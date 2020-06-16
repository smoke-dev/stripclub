const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const low = require('lowdb')
    const FileSync = require('lowdb/adapters/FileSync')
    const adapter = new FileSync('./db.json')
    const db = low(adapter)
    var founder = [
        "684806056203124757"
    ]
    if (founder.includes(message.author.id)) {
        const member = message.mentions.members.first();
        if (!member) return message.channel.send("**<a:unchecked:722036540473212948> | Merci de mentionner un utilisateur.**")
        if (!db.get("staffs").find({ user_id: member.id }).value()) {
            db.get("staffs").push({ user_id: member.id }).write()
            message.channel.send("**<a:checked:722035748819173406> L'utilisateur <@" + member.id + "> est désormais ajouté en tant que staff.**")
        } else {
            message.channel.send("**<a:unchecked:722036540473212948> | L'utilisateur <@" + member.id + "> est déja staff.**")
        }
    } else {
        message.channel.send("**<a:unchecked:722036540473212948> | Vous ne disposez pas des permissions nécessaires.**")
    }
}
