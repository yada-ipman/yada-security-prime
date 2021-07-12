const Discord = require("discord.js");


exports.run = (client, message, args) => {


let member = args[0]
let guild = message.guild;
let kanal = '833511082429120533'//Log Kanal id Yazın

if(!member) return message.channel.send("You Should Enter an Id")





guild.members.unban(member)

const ban = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL())
.setColor('RANDOM')
.addField(`Banned User`,`<@${member}>`)
.addField(`Authorized`,message.author)
.setTimestamp()
.setFooter(`${message.author.username} Used By`)
client.channels.cache.get(kanal).send(ban)


};
exports.conf = {
  enabled: true, //komutu açmaya yada kapatmaya yarar. / true = açık - false = kapalı
  guildOnly: false, //komutu sunucuya özelmi olucağını belirler.
  aliases: [], //komutun diğer adlar buraya ne yazarsanız komut kullanırken bu da geçerli olucaktır.
  permLevel: 0 //komutun yetkisini ayarlar / bu komut için hiç bir yeetkiye gerek yok bu yüzden 0
};
exports.help = {
  name: 'unban', //komutun ismidir. / prefix + paralarım şeklinde çalışır.
  description: 'Ban the User', //komutun açıklamasıdır çok önemi yok!
  usage: 'D!ban @user <reason>' //komutun kullanım şeklidir çok önemi yok!
};