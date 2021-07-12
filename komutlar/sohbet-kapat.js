const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let every = message.guild.roles.cache.find(r => r.name === "@everyone");
 message.channel.createOverwrite(every, {
    SEND_MESSAGES: false
  });

  message.channel.send("Chat channel ``Unwritable`` was brought to the state.");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "chat",
  permLevel: 3
};

exports.help = {
  name: "chat-off",
  description: "It serves to close your chat.",
  usage: "off"
};