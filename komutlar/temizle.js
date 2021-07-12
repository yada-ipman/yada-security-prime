const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You Do Not Have Permission To Use This Command!");
if(!args[0]) return message.channel.send("**Please Write The Amount Of The Message To Be Deleted.!** ");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(` ${args[0]} I deleted the number of messages.`).then(a => a.delete(200));
})
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['delet'],
  permLevel: 2
};

exports.help = {
  name: 'clean',
  description: 'Deletes a specified amount of messages.',
  usage: 'clean <number of messages to be deleted>'
};