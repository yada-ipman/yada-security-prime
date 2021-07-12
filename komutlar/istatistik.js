const Discord = require("discord.js");


exports.run = async (client, message, args) => {

  
const istatistikler = new Discord.MessageEmbed()
  .addField(`Ping` ,`${client.ws.ping}ms`,true)
  .addField(`My producer` ,`<@776494689703559208>`,true)
  .addField(`Node.js`, `${process.version}`, true)
 .addField(`» Number of Channels`, `${client.channels.cache.size  }`, true)
 .addField(`» Number of users`, `${client.users.cache.size}`, true)
 .addField(`Number of Servers`, `${client.guilds.cache.size}`, true)
 .addField(`» Links`, `[Support Server](https://discord.gg/xVbFaP6hbx)`, true)
  message.channel.send(istatistikler)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['statistics'],
  permLevel: 0
};

exports.help = {
  name: 'about',
  description: 'It serves to adjust the autorol system.',
  usage: 'metetaga'
}; 