module.exports = {

    name: 'rules',
    description: "rules",
    execute(message,args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor(#696969)
        .setTitle('Rules')
        .setDescription('This is an embed for the server rules')
        .addFields(
            {name: 'Rule 1', value: 'Be nice'}
        )
    }

    message.channel.send(newEmbed);
}