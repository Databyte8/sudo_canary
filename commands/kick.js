const Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
    name: 'kick',
    description: 'kicks a user by tag',
    execute(message) {
        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.members.resolve(user);
            if (member) {
                member
                    .kick('reason - WIP')
                    .then(() => {
                        const succseskickEmbed = new Discord.MessageEmbed()
                            .setTitle(':white_check_mark: Succses!')
                            .setColor(0x26ff00)
                            .setDescription(`Succsesfully kicked ${member}`);
                        message.channel.send(succseskickEmbed);
                    })
                    .catch(err => {
                        const errorkickEmbed = new Discord.MessageEmbed()
                            .setTitle(':no_entry: Error while kicking member')
                            .setColor(0xff0000)
                            .setDescription(`Error Unknown - More Information in the log console`);
                        message.channel.send(errorkickEmbed);
                        console.error(err);
                    });
            } else {
                const nouserkickEmbed = new Discord.MessageEmbed()
                    .setTitle(':no_entry: Error while kicking member')
                    .setColor(0xff0000)
                    .setDescription(`That member isn't in this server!`);
                message.channel.send(nouserkickEmbed);
            }
        } else {
            const nomentionEmbed = new Discord.MessageEmbed()
                .setTitle(':no_entry: Error while kicking member')
                .setColor(0xff0000)
                .setDescription(`You didn't mentioned a user to kick!`);
            message.channel.send(nomentionEmbed);
        }
    },
};

