const Discord = require('discord.js');

module.exports = {
	name: 'ping',
    description: 'Ping!',
    usage: 'ping',
    cooldown: 1,
	execute(message, args) {
		const pingEmbed = new Discord.MessageEmbed()
            .setColor('#fdfbfb')
            .setDescription(`Bot Latency: ${Date.now() - message.createdTimestamp}ms`)
            .setAuthor('Ping', iconURL=message.author.avatarURL())
            .setFooter(text=`Requested by ${message.author.tag}`)
        message.reply(pingEmbed);
    }
};