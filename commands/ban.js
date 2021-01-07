const Discord = require('discord.js');

module.exports = {
    name: 'ban',
    description: 'bans a user by tag',
    execute(message) {
        const user = message.mentions.users.first();
        if (user) {
            // Now we get the member from the user
            const member = message.guild.members.resolve(user);
            // If the member is in the guild
            if (member) {
                member
                    .ban({
                        reason: 'wip',
                    })
                    .then(() => {
                        const succsesbanEmbed = new Discord.MessageEmbed()
                            .setTitle(':white_check_mark: Succses!')
                            .setColor(0x26ff00)
                            .setDescription(`Succsesfully banned ${member}`);
                        message.channel.send(succsesbanEmbed);
                    })
                    .catch(err => {
                        const errorbanEmbed = new Discord.MessageEmbed()
                            .setTitle(':no_entry: Error while banning member')
                            .setColor(0xff0000)
                            .setDescription(`Error Unknown - More Information in the log console`);
                        message.channel.send(errorbanEmbed);
                        console.error(err);
                    });
            } else {
                // The mentioned user isn't in this guild
                const nouserbanEmbed = new Discord.MessageEmbed()
                    .setTitle(':no_entry: Error while kicking member')
                    .setColor(0xff0000)
                    .setDescription(`That member isn't in this server!`);
                message.channel.send(nouserbanEmbed);
            }
        } else {
            const nomentionbanEmbed = new Discord.MessageEmbed()
                .setTitle(':no_entry: Error while banning member')
                .setColor(0xff0000)
                .setDescription(`You didn't mentioned a user to ban!`);
            message.channel.send(nomentionbanEmbed);
        }
    },

};






