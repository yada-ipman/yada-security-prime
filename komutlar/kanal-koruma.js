const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async(client, message, args) => {

let prefix = ayarlar.prefix
  
  
  if (!args[0]) {
    const sa = new Discord.MessageEmbed()
    .setDescription(`Are You Looking For This? $ {prefix} channel-protect on/off`)
    .setTimestamp()
    return message.channel.send(sa)
  }
  if (args[0] === 'on') {
    
    db.set(`kanalk_${message.guild.id}`, "Active")
       const sa = new Discord.MessageEmbed()
    .setDescription(`Channel Guard Successfully Opened! ✅`)
    .setTimestamp()
    return message.channel.send(sa)
  }
   if (args[0] === 'off') {
    
    db.delete(`kanalk_${message.guild.id}`)
       const sa = new Discord.MessageEmbed()
    .setDescription(`Channel Guard Successfully Closed! ☑`)
    .setTimestamp()
    return message.channel.send(sa)
  }
};
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'channel-guard'
}; 
