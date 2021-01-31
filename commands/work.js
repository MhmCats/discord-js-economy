const Discord = require('discord.js');
const {write} = require('../utils/database.js')

module.exports = {
	name: 'work',
    description: 'Works for money',
    usage: 'work',
    cooldown: 1800,
	execute(message, args) {
        var value = Math.floor(Math.random()*1000)
        if (value > 501) {
            value += 450
        };
        write(message.author.id, value);
        workEmbed = new Discord.MessageEmbed()
            .setDescription(`You worked and got \`${value}\` coins`)
            .setColor('#fdfbfb')
        message.channel.send(workEmbed)       
    }
}