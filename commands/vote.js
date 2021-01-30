const Discord = require('discord.js');

module.exports = {
    name: 'vote',
    description: 'vote message',
    execute(message) {
        const pingEmbed = new Discord.MessageEmbed()
            .setTitle('Vote for us!')
            .setColor(0xe8bb09)
            .setDescription(`You can now vote for our bot on top.gg! Vote Here: https://top.gg/bot/793388958616780843/vote`);
        message.channel.send(pingEmbed);
    },
};
