const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async(client, message, args) => {

  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix

  if (!message.member.permissions.has('KICK_MEMBERS')) return message.channel.send(`** Hey You ** Yes You! Not Enough Proficiency For This Command!`)
if (!args[0])  {
    const küfürcu0k = new Discord.MessageEmbed()
    .setTitle('Unsuccessful')
    .setDescription(`You are looking for this? \n ${prefix}ad-block on / off`)
      return message.channel.send(küfürcu0k)

  }   
  if (args [0] == 'on') {
    db.set(`reklamengel_${message.guild.id}`, '**Advertisement block Active!** ')
    let lus = await db.fetch(`reklamengel_${message.guild.id}`)
    
    const reklamengelcim = new Discord.MessageEmbed()
    .setTitle('Successful')
    .setDescription('**I Opened an Ad Block** ')
    return message.channel.send(reklamengelcim)

  }
  
  if (args [0] == 'off') {
      
    db.delete(`reklamengel_${message.guild.id}`)

   const küfürengelcim22 = new Discord.MessageEmbed()
    .setTitle('Successful')
    .setDescription('**Ad Block Closed**')
    return message.channel.send(küfürengelcim22)
  }

  
  
  
};
exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['ad-block'],
 permLevel: 0
};

exports.help = {
 name: 'ad-block'
};