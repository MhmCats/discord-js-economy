const fs = require('fs');
const Discord = require('discord.js');

const {PREFIX} = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const cooldowns = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const {connect, end} = require('./utils/database.js')

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
    console.log(`Loaded command: ${command.cooldown}`)
}


client.once('ready', () => {
	console.log('\nReady!');
	connect()
});

client.on('message', message => {
	
	if (!message.content.startsWith(PREFIX) || message.author.bot || !message.guild) return;

	const args = message.content.slice(PREFIX.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	if (!client.commands.has(commandName)) return;

	const command = client.commands.get(commandName);

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}
	
	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = command.cooldown * 1000;	
	
	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
	
		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${Math.floor(timeLeft.toFixed(1))} more second(s) before reusing the \`${command.name}\` command.`);
		}
	};

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
	
	try {
	    command.execute(message, args);
    } catch (error) {
	    console.error(error);
    }
});

const dotenv = require('dotenv');
dotenv.config();
client.login(`${process.env.TOKEN}`);