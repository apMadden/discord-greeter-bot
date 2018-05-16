var Discord = require('discord.io');

var logger = require('winston');
var auth = require('./auth.json');


// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';


// Initialize Discord Bot
var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});


bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);

        switch(cmd) {
            case 'pug':
                numPlayers = 5;
                bot.sendMessage({ to: channelID, message: 'Pug!' });
            break;
            case '10man':
                bot.sendMessage({ to: channelID, message: '10man!' });
            break;
            case 'squad':
                bot.sendMessage({ to: channelID, message: 'Squad!' });
            break;
            case 'help':
                bot.sendMessage({ to: channelID, message: 'try !pug, !10man, or !squad' });
            break;
            default:
                bot.sendMessage({ to: channelID, message: 'Unknown command.' });
        }
    }
})
