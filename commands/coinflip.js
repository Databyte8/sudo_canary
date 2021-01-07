const Discord = require('discord.js');

module.exports = {
    name: 'coinflip',
    description: 'tail/head flip',
    execute(message) {
        let outcomes = ['`Heads` <:coin_heads:793951771361673257>', '`Tails` <:coin_tails:793951771436908584>'];
        let outcomesIndex = Math.round(Math.random() * outcomes.length);
        message.channel.send(outcomes[outcomesIndex]);
    },
};