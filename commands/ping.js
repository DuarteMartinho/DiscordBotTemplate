const Discord = require("discord.js");

module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, args) {
        const MIN_INTERVAL = 1000 * 40
        setInterval(function(){
            var now = new Date();
            var hour = now.getUTCHours();
            var minute = now.getUTCMinutes();
            if (hour === 19 && minute === 48)
            {
                message.channel.send("Hello World!");
            }
        }, MIN_INTERVAL)
        message.channel.send('Pong.' +  args);
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`)
		
		message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
            
    
        const menta = new Discord.MessageEmbed()
            .setTitle('ERBE')
            .addField('Nome', 'Alloro')
            .addField('Proprietá', 'Visioni psichiche e sogni, respinge la negatività e il male.')
            .setColor('#66CD00');
        message.channel.send(menta);
    
    },
};