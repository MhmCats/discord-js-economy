const Discord = require('discord.js');
const {write} = require('../utils/database.js')

module.exports = {
	name: 'daily',
    description: 'Claims daily for money',
    usage: 'daily',
    cooldown: 86400,
	execute(message, args) {
        var value = Math.floor(Math.random()*2000)
        if (value < 805) {
            value += 450
        };
        write(message.author.id, value);
        workEmbed = new Discord.MessageEmbed()
            .setDescription(`You worked and got \`${value}\` coins`)
            .setColor('#fdfbfb')
        message.channel.send(workEmbed)       
    }
}