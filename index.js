const fs = require('fs')
const Discord = require('discord.js');
const db = require('mongoose')
const MongoDBProvider = require('commando-provider-mongo').MongoDBProvider
const { prefix, token } = require('./config.json');

const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
}

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('Bot Ready!');
//db.connect('mongodb+srv://munijuni23:<password>@cluster0.0clzm.mongodb.net/<dbname>?retryWrites=true&w=majority', dbOptions)
//        .then(console.log('Database Ready!'))
    client.user.setPresence({
        status: "online",  //online, idle, dnd zum ändern des Onlinestatuses
        activity: {
            name: `Prefix: ${prefix} | Version 2021.1 Alpha`,
            type: "PLAYING" // PLAYING, WATCHING, LISTENING, STREAMING zum ändern des stauts
        }
    });
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()

    if (command == 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command == 'help'){
        client.commands.get('help').execute(message, args);
    } else if (command == 'coinflip') {
        client.commands.get('coinflip').execute(message, args);
    } else if (command == 'kick') {
        client.commands.get('kick').execute(message, args);
    } else if (command == 'serverinfo') {
        client.commands.get('serverinfo').execute(message, args);
    } else if (command == `addglobal`) {
        client.commands.get('addGlobal').execute(message, args);
    } else if (command == `ban`) {
        client.commands.get('ban').execute(message, args);
    } else if (command == `about`) {
        client.commands.get('about').execute(message, args);
    }
});



client.login(token);
