const Discord = require("discord.js");

exports.run = async (client, message) =>{
    const mensagem = await message.channel.send(`Buscando as informações necessárias...`);
    mensagem.delete();

    const diasdasemana = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado", "Domingo"];
    const mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    const diadasemana = diasdasemana[message.channel.createdAt.getDay()];
    const dia = message.channel.createdAt.getDate();
    const mess = mes[message.channel.createdAt.getMonth()];
    const ano = message.channel.createdAt.getFullYear();

    const hora = message.channel.createdAt.getHours();
    const minutos = message.channel.createdAt.getMinutes();

    const embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}`, message.author.avatarURL)
        .setDescription(`Informações do canal ${message.channel.name}`)
        .addField(`Nome do canal`, `${message.channel.name}`, true)
        .addField(`ID do Canal`, `${message.channel.id}`, true)
        .addField(`Criado em`, `${diadasemana}, ${dia} de ${mess} de ${ano} às ${hora}:${minutos}`, true)
        .addField(`Tópico`, `${message.channel.topic !== null ? `${message.channel.topic}` : 'Não definido'}`, true)
        .addField(`NSFW Ativado`, `${message.channel.nsfw ? 'Sim' : 'Não'}`, true);
    message.reply(embed);
};
