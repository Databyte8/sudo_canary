const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Shows the ping between the user and the hoster.',
    execute(message) {
        const pingEmbed = new Discord.MessageEmbed()
            .setTitle(':ping_pong: Pong!')
            .setColor(0xe8bb09)
            .setDescription(`${Date.now() - message.createdTimestamp}ms`);
        message.channel.send(pingEmbed);
    },
};
