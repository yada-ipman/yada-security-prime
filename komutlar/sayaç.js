const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async (client, message, args) => {
  //

  const sayacsayi = await db.fetch(`sayac_${message.guild.id}`);
  const sayackanal = message.mentions.channels.first()
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`To use this command"\`Manager\`" you must have the authority.`);
        
  if(!args[0]) {
    message.channel.send(`You must write a number.`)
    return
  }
  
  if(!sayackanal) {
   message.channel.send(`You must label the meter channel.`)
  }
  
  
  if(args[0] === "reset") {
    if(!sayacsayi) {
      message.channel.send(`You cannot reset what is not set.`)
      return
    }
    
    db.delete(`sayac_${message.guild.id}`)
    db.delete(`sayacK_${message.guild.id}`)
    message.channel.send(`The counter has been reset successfully.`)
    return
  }
  
  if(isNaN(args[0])) {
    message.channel.send(`You must write a number.`)
    return
  }
 
        if(args[0] <= message.guild.members.size) {
                message.channel.send(`From the number of users on the server (${message.guild.members.size}) You must enter a higher value.`)
                return
        }
  
  db.set(`sayac_${message.guild.id}`, args[0])
  db.set(`sayacK_${message.guild.id}`, sayackanal.name)
  
  message.channel.send(`Counter **${args[0]}**, counter channel **${sayackanal}** was set to.`)
}
 
exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: [''],
        permLevel: 3
}
 
exports.help = {
        name: 'set-counter',
        description: 'Sets the meter.',
        usage: 'counter <number> <#channel> / reset'
}