const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async(client, message, args) => {
if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('You must have `Administrator` privilege to use this command.')
let prefix = ayarlar.prefix

  if (!args[0]) {
 message.channel.send(`**Örnek Kullanım:** ${prefix}role-protection on/off`)
  }
  if (args[0] === 'on') {
    db.set(`rolk_${message.guild.id}`, "Active")
     message.channel.send(`Role Protection Successfully Opened! `)
  }
   if (args[0] === 'off') {
    db.delete(`rolk_${message.guild.id}`)
    message.channel.send(`Role Protection Successfully Disabled! `)
  }
};
exports.conf = {
  aliases: ['rolepro'],
  permLevel: 0
};
exports.help = {
  name: 'role-protection'
}; 