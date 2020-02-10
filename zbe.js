const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", message => {
  if (message.channel.type === "dm") {
    if (message.author.id === client.user.id) return;
    var embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTimestamp()
      .setTitle("متحرش جديد")
      .setThumbnail(`${message.author.avatarURL}`)
      .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
      .setFooter(`From **${message.author.tag} (${message.author.id})**`);
    client.channels.get("676244391832190988").send({ embed: embed });
  }
});

client.on('message', message => {
var prefix = "ELGASOS PREFIX";

    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
message.channel.send("**bc <message>**");
return;
}
        message.guild.members.forEach(m => {
   if (message.author.id !== '380694082990768138') return;
            var bc = new Discord.RichEmbed()
            .addField('» السيرفر :', `${message.guild.name}`)
            .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});

client.login(process.env.BOT_TOKEN);
