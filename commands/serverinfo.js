const Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
    name: 'serverinfo',
    description: 'information about the server',
    execute(message) {
        const serverinfoEmbed = new Discord.MessageEmbed()
            .setColor(0xe8bb09)
            .setTitle('SERVERINFO')
            .setDescription(`Shows some Information about this Server. Prefix for this Server: **${prefix}**`)
            .addFields(
                { name: ':pager:Servername:pager:', value: `${message.guild.name}`, inline: true },
                { name: ':crown:Owner:crown:', value: `${message.guild.owner}`, inline: true },
                { name: ':busts_in_silhouette:Members:busts_in_silhouette:', value: `${message.guild.memberCount}`, inline: true },
                { name: ':clock1:Creationdate:clock1:', value: `${message.guild.createdAt}`, inline: true },
                { name: ':globe_with_meridians:Serverregion:globe_with_meridians:', value: `${message.guild.region}`, inline: true },
                { name: ':safety_vest:Verificationlevel:safety_vest:', value: `${message.guild.verificationLevel}`, inline: true },
            )

            .setTimestamp()
            .setFooter('WIP', 'https://i.imgur.com/OiXPxXS.png');

        message.channel.send(serverinfoEmbed);
    },
};
