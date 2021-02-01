const Discord = require('discord.js');

module.exports = {
	name: 'info',
    description: 'Information about the bot',
    usage: 'info',
    cooldown: 1,
	execute(message, args, client) {
		const infoEmbed = new Discord.MessageEmbed()
            .setColor('#fdfbfb')
            .setDescription(`This bot was created by invalid-user#7804`)
            .setAuthor('Bot Info', iconURL=message.author.avatarURL())
            .addFields(
                {name: 'Uptime (minutes)', value: `\`${Math.ceil(parseInt(client.uptime/60000))}\``, inline: true},
                {name: 'Username', value: '\`Luki#8511\`', inline: true},
                {name: 'Created With', value: '\`Nodejs\` and \`discord.js\`', inline: false},
                {name: 'ID', value: '\`802495080757461032\`', inline: false}
            )
            .setThumbnail(url=client.user.avatarURL())
            .setFooter(text=`Requested by ${message.author.tag}`)
        message.reply(infoEmbed);
    }
};