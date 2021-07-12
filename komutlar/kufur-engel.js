const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
      if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send("Insufficient ** authorization! **")
  
  if (!args[0]){
    message.channel.send('swearing-obstacle turn off / on You have to type')
  }
  if (args[0] === 'on'){
    message.channel.send("Swearing Barrier is Active!")
    
    db.set(`kufur_${message.guild.id}`, "open")
  }
  if (args[0] === 'off'){
    message.channel.send('Kufur Engel Successfully Closed')
    
    db.set(`kufur_${message.guild.id}`, "closed")
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "swearing-obstacle",
  description: "Swear barrier opens or closes.",
  usage: "swearing"
}