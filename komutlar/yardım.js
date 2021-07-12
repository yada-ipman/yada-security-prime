const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Federation of Titans Guard Bot`)
.setDescription(`

\`D!channel-guard\` : **Channel Guard on / off**
\`D!role-protection\` : **Role Protection on/off**
\`D!swearing-obstacle\`:  **Swearing Barrier on/off**
\`D!ad-block\` :  **Ad Barrier on/off**
\`D!chat on-off\` :  **You Open and Close Chat**
\`D!ban\`: **You Ban The Person You Specified From The Server**
\`D!unban\`:  **You Unblock The Person You Specified**
\`D!statistics\`:  **Throws the Bot's Stats**
\`D!clean\`:  **Deletes the Number of Messages You Specified**
\`D!ping\`:  **Measures and Throws Your Ping**
\`D!mute\`:  **Mute chat members**
\`D!unmute\`:  **unMute chat members**
\`D!avatar\`:  **Throws Your Avatar**
\`D!about  | D!web  | D!server \`


https://dsecurity.xyz
`)
.setImage("")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help'], 
  permLevel: 0
};

exports.help = {
  name: "help",
  description: 'A help code we made.',
  usage: 'help'
};












































