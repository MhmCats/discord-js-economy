const Discord = require('discord.js');

module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['commands'],
	usage: 'help',
	cooldown: 5,
	execute(message, args, client) {
        const helpEmbed = new Discord.MessageEmbed()
            .setColor('#fdfbfb')
            .setAuthor('Help', iconURL=message.author.avatarURL())
            .addFields(
                {name: ':gear: Information Commands :gear:', 
                 value:`\`info\`, \`help\`, \`ping\``,
                 inline: true},
                {name: ' :moneybag: Economy Commands  :moneybag:', 
                 value:`\`balance\`, \`beg\`, \`work\`, \`bet\``},
            )
            .setFooter(text=`Requested by ${message.author.tag}`)
        
        message.reply(helpEmbed)
    }
}