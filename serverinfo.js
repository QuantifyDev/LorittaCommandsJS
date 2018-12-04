const Discord = require("discord.js");
require('dotenv').config();
const guildid = process.env.GUILD;

exports.run = async (client, message) =>{
    if(message.author.bot || message.guild.id !== guildid) return;

    const mensagem = await message.channel.send(`Pegando as informações necessárias...`);

    const monName = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro"];

    const onlinemembers = message.guild.members.filter(member => member.user.presence.status === 'online');
    const idlemembers = message.guild.members.filter(member => member.user.presence.status === 'idle');
    const ocupadomembers = message.guild.members.filter(member => member.user.presence.status === 'dnd');
    const offmembers = message.guild.members.filter(member => member.user.presence.status === 'offline');

    const day = message.guild.createdAt.getDate();
    const year = message.guild.createdAt.getFullYear();
    const as = message.guild.createdAt.getHours();

    const sicon = message.guild.iconURL;
    const discordicon = "https://www.logolynx.com/images/logolynx/1b/1bcc0f0aefe71b2c8ce66ffe8645d365.png";
    const serverembed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, discordicon)
        //.setFooter(`Servidor criado em • ${day}.${month}.${year}`)
        .setColor("#7289DA")
        .setThumbnail(sicon)
        .addField("💻 ID", message.guild.id, true)
        .addField("👑 Dono", message.guild.owner.user.tag, true)
        .addField("🌎 Região", message.guild.region, true)
        .addField(`:speech_balloon: Canais: (${message.guild.channels.size})`, true)
        .addField(`:date: Criado em`, `${day} de ${monName[message.guild.createdAt.getMonth()]} de ${year} às ${message.guild.createdAt.getHours()}:${message.guild.createdAt.getMinutes()}`,true)
        .addField(`👥 Membros (${message.guild.memberCount})`, `**Online**: ${onlinemembers.size} | **Ausente**: ${idlemembers.size} | **Ocupado**: ${ocupadomembers.size} | **Offline**: ${offmembers.size}`, true);
        //.addField("Bots", message.guild.members.filter(m => m.user.bot).size, true)
        //.addField("Online", onlinemembers.size, true)
    mensagem.delete();
    message.channel.send(serverembed);
};