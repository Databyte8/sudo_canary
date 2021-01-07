const Discord = require('discord.js');

module.exports = {
    name: 'addGlobal',
    description: 'adds the chat',
    execute(message) {
        const addGlobalEmbed = new Discord.MessageEmbed()
            .setTitle('Work in Progress!')
            .setColor(0xe8bb09)
            .setDescription(`This command is still WIP.`);
        message.channel.send(addGlobalEmbed);
    },
};
