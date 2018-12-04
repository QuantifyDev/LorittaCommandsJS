const Discord = require("discord.js");

exports.run = async (client, message) =>{
    const mensagem = await message.channel.send("Pegando o ícone do servidor...");
    mensagem.delete();

    const servericon = message.guild.iconURL;
    const discordicon = "https://www.logolynx.com/images/logolynx/1b/1bcc0f0aefe71b2c8ce66ffe8645d365.png";

    const embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, discordicon)
        .setDescription(`Clique [aqui](${servericon})`)
        .setImage(servericon + "?size=2048");
    message.channel.send(embed);
};