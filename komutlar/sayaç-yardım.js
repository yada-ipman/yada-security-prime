exports.run = function(client, message, args) {
        message.channel.send("The Number You Specified Is Too Small Or You Have Already Reached That Number: shrug: Example Usage: \n ```set-counter #channel <number>``` ");
    };
//

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permLevel: 0
};

module.exports.help = {
  name: 'counter',
  description: '',
  usage: 'counter-help'
};