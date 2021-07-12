const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let every = message.guild.roles.cache.find(r => r.name === "@everyone");
 message.channel.createOverwrite(every, {
    SEND_MESSAGES: null
  });

  message.channel.send(" Chat channel has been changed to ``Unwritable`` status");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "chat",
  permLevel: 3
};

exports.help = {
  name: "chat-on",
  description: "It serves to close your chat.",
  usage: "off"
};