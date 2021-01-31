const Discord = require('discord.js');
const {read} = require('../utils/database.js')

module.exports = {
	name: 'balance',
    description: 'Checks your balance',
    usage: 'balance',
    cooldown: 1,
	execute(message, args) {
        (async () => {
            if (!await read(message.author.id)) {
                const balanceEmbedWithNone = new Discord.MessageEmbed()
                    .setAuthor(`${message.author.tag}'s balance`, iconURL=message.author.avatarURL())
                    .setDescription(`You have not got any coins yet.`)
                    .setColor('#fdfbfb')
                    .setFooter(text=`Requested by ${message.author.tag}`)
                message.channel.send(balanceEmbedWithNone)
            }
            else {
                const balanceEmbed = new Discord.MessageEmbed()
                    .setAuthor(`${message.author.tag}'s balance`, iconURL=message.author.avatarURL())
                    .setDescription(`You have \`${await read(message.author.id)}\` coins.`)
                    .setColor('#fdfbfb')
                    .setFooter(text=`Requested by ${message.author.tag}`)
                message.channel.send(balanceEmbed)
            }
        })()
    }
}