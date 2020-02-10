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

client.login(process.env.BOT_TOKEN);
