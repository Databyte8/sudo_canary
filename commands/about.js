const Discord = require('discord.js');

module.exports = {
    name: 'about',
    description: 'about the bot',
    execute(message) {
        const aboutEmbed = new Discord.MessageEmbed()
            .setTitle('About')
            .setColor(0xe8bb09)
            .setDescription(`Here are some information about the bot`)
            .addFields(
            { name: ':regional_indicator_v: Version :regional_indicator_v:', value: '2021.1 v1 Alpha', inline: true },
                { name: ':clock1: Creation date :clock1:', value: `${message.client.user.createdAt}`, inline: true },
            )
        message.channel.send(aboutEmbed);
    },
};
