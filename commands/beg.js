const Discord = require('discord.js');
const {write} = require('../utils/database.js')

module.exports = {
	name: 'beg',
    description: 'Begs for money',
    usage: 'beg',
    cooldown: 60,
	execute(message, args) {
        var value = Math.floor(Math.random()*100);
        if (value < 50) {
            value += 45
        };
        write(message.author.id, value);
        begEmbed = new Discord.MessageEmbed()
            .setDescription(`You begged and got \`${value}\` coins`)
            .setColor('#fdfbfb')
        message.channel.send(begEmbed)       
    }
}