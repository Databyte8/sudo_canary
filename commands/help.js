const Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
    name: 'help',
    description: 'The Help command.',
    execute(message) {
        const helpEmbed = new Discord.MessageEmbed()
            .setColor(0xe8bb09)
            .setTitle('HELP')
            .setURL('https://github.com/Databyte8/sudo_canary')
            .setDescription(`This is the help for the bot! All commands are starting with **${prefix}** | [INVITE](https://discord.com/api/oauth2/authorize?client_id=793388958616780843&permissions=8&scope=bot 'Invite sudo_canary to your Server!')`)
            .addFields(
                { name: ':tools: Utility Commands :tools:', value: '`ping` - Shows the current ping\n`serverinfo` - Shows some information about the server\n`about` - Shows some information about the bot', inline: false },
                { name: ':police_car: Moderation Commands :police_car: ', value: '`ban <User>` - Bans a user\n`kick <User>` - Kick a user form the server', inline: false },
                { name: ':rotating_light: Admin Commands :rotating_light:', value: '*Work in Progress*', inline: false },
                { name: ':clown: Fun Commands :clown: ', value: '`coinflip` - Flips a coin', inline: false },
                { name: ':arrow_up: Level Commands :arrow_up: ', value: '*Work in Progress*', inline: false },
                { name: ':musical_note:  Music Commands :musical_note:', value: '*Work in Progress*', inline: false },
                { name: ':earth_africa: Global Chat Commands :earth_africa:', value: '`addglobal` - Adds the global chat (WIP)', inline: false },
                { name: ':link: Bump Commands :link:', value: '`bump` - Bumps the server to other servers (WIP)', inline: false },
            )
            .setTimestamp()
            .setFooter('Made by MatteoDEV#1109 and BabaEvil#0934', 'https://i.imgur.com/OiXPxXS.png');

        message.channel.send(helpEmbed);
    },
};
