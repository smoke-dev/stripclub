const Discord = require('discord.js')
const client = new Discord.Client()
const PREFIX = ("?")


client.on("ready", () => {

    client.user.setStatus("online");
var memberCount = client.users.size;
    var serverCount = client.guilds.size;
    client.user.setActivity(`?help | ` + serverCount + " Servers");
    
    console.log("--------------------------------------");
    console.log('Information du bot: Je fonctionne !')
    console.log(`Nom du bot: ${client.user.tag}!`);
    console.log(`Id du bot: ${client.user.id}`)
    console.log(`Bot Cr?e par le king des king: Millenium`)
    console.log("--------------------------------------");
    console.log('Information du client:')
    console.log("Serveurs: " + serverCount);
    console.log("Users: " + memberCount);
    console.log('--------------------------------------')
});






client.on('message', msg => { if (msg.content === '?stats') { msg.channel.send(`${client.users.size} **users** | ${client.guilds.size} **servers** | ${client.channels.size} **channels** `); } });
client.on('message', async message =>{
    if(message.content.startsWith("?invite")) {    message.channel.send(`**Voici mon lien d'invitation:** https://discordapp.com/oauth2/authorize?client_id=720688716984615023&scope=bot&permissions=2080382143`)
    }
});
client.on('message', msg => { if (msg.content === '?support') { msg.channel.send("**Support:** https://discord.gg/SEdGscb"); }});
client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
let channelle = client.channels.get('720711723706876024')
    var serverCount = client.guilds.size;
        channelle.send(`<:Join:684070092153028646> New guild joined: ${guild.name} (id: ${guild.id}) Owner: ${guild.owner.user.tag}. This guild has ${guild.memberCount} members!`)
  console.log(` New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
client.user.setActivity(`?help | ` + serverCount + " Servers");

});
client.on("guildDelete", guild => {
  // This event triggers when the bot joins a guild.
let channelle = client.channels.get('720711723706876024')
    var serverCount = client.guilds.size;
        channelle.send(`<:leave:721278847617728524> Bot removed from: ${guild.name} (id: ${guild.id}) Owner: ${guild.owner.user.tag}. This guild had ${guild.memberCount} members.`)
  console.log(`Bot removed from: ${guild.name} (id: ${guild.id}) Owner: ${guild.owner.user.tag}. This guild had ${guild.memberCount} members.`);
client.user.setActivity(`?help | ` + serverCount + " Servers");

});





client.on('message', msg => {
const embed1 = new Discord.RichEmbed()
.setTitle("PortectorZ Help Panel")
.setURL("https://discord.gg/SEdGscb")
.setColor('#110fe6')
.setDescription(`
 :flag_fr:
**Merci d'utiliser PotectorZ! Ce bot à pour objectifs de souhaiter la bienvenue aux membres rejoignant votre et serveur et d'assurer une sécurité contre les personnes malveillantes.**

:flag_us:
**Thank you for using ProtectorZ! This bot aims to welcome members joining your and server and provide security against malicious people. **

         **➜  Moderations:**
        _?clearall_      | Clear all messages
        _?purge [number_] | Purge [number] messages
        _?ban [user]_     | Ban [user] from the server
        _?kick [user]_    | Kick [user] from the sever
        _?ping_           | Send the latency of the bot
        _?checkid [user]  | Check if [user] is in blacklist of the bot
         **➜  About:**

        _?stats_ | Send my statistics
        _?support_ | Send my server support
        _?invite_ | Show the link to add the bot on your server

:warning: **Pour être retiré de la blacklist merci de rejoindre le support!**
:warning: **To be removed from the blacklist please join the support!**
        
`)
.setThumbnail("https://media.discordapp.net/attachments/720715666495242362/721337913392103540/kv-img.png")
.setFooter(`By SMOK3 DEVELOPERS`, "https://cdn.discordapp.com/attachments/633890037989244929/661257607352418305/image0.gif")
.setTimestamp()
 if (msg.content === '?help') { msg.channel.send(embed1); } 

});
client.on('message', msg => { if (msg.content === '?help') { console.log(`help send to ${msg.author.tag}`); } });

client.on('ready', () => {
   client.guilds.forEach((guild) => {
    var generalChannel = client.channels.get("721757450402791425") // Replace with known channel ID
    generalChannel.send(" - " + guild.name)  
})

client.on('guildMemberAdd', member => {
  
   
    const logChannel = member.guild.channels.find(channel => channel.name === "welcome");
 
  //  client.logChannel.send(`${member} joined; Welcome here!`);
  });


client.on('message', message => {
  if (message.content === '?clearall') {
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
              message.channel.send(`> **Channel Clear!**
> https://thumbs.gfycat.com/MeanTanBeardedcollie-size_restricted.gif`)
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})
        }
  }
});


client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
 
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice("?").trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Let's go with a few common example commands! Feel free to delete or change those.
  
  if(command === "?ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  
//  if(command === "?say") {
  //  const sayMessage = args.join(" ");
 //   message.delete().catch(O_o=>{}); 
   // message.channel.send(sayMessage); 
 // }
  
  if(command === "?kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.hasPermission("KICK_MEMBERS")) {
      return message.channel.send("You should have kick members perms to use this command!")
    }
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    
    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);
     console.log(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`)
  }
  
  if(command === "?ban") {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)

     if(!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel.send("You should have ban members perms to use this command!")
     }
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
     console.log(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`)
  }
  
  
  if(command === "?purge") {
    // This command removes all messages from all users in the channel, up to 100.
    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send("You should have manage messages perms to use this command!")
     }
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
    message.channel.send(`> **${message.author.tag}** deleted **${deleteCount}** messages`).then(m => {m.delete(4000)})
     console.log(`${message.author.tag} deleted ${deleteCount} messages`)
    }
  
});


//client.on('guildMemberAdd', member => {
//       member.guild.channels.get('720695206457901120').send('**' + member.user.username + '**, has joined the server!'); 
//});
























  

const fs = require("fs");
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./db.json')
const db = low(adapter)
db.defaults({
    staffs: [],
    blacklist_users: [],
}).write()

var now = new Date();
var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();
var times = (`[${hour}:${minute}:${second}]/`);
const config = require("./config.json");
client.config = config;


fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

client.commands = new Discord.Collection();

// Recherche de toutes les commandes

fs.readdir("./commands/", (err, content) => {
    if (err) console.log(err);
    if (content.length < 1) return console.log('Veuillez créer des dossiers dans le dossier commands !');
    var groups = [];
    content.forEach(element => {
        if (!element.includes('.')) groups.push(element); // Si c'est un dossier
    });
    groups.forEach(folder => {
        fs.readdir("./commands/" + folder, (e, files) => {
            let js_files = files.filter(f => f.split(".").pop() === "js");
            if (js_files.length < 1) return console.log('Veuillez créer des fichiers dans le dossier "' + folder + '" !');
            if (e) console.log(e);
            js_files.forEach(element => {
                let props = require('./commands/' + folder + '/' + element);
                client.commands.set(element.split('.')[0], props);
            });
        });
    });
});

client.on("guildMemberAdd", member => {
    if (!db.get("blacklist_users").find({ user_id: member.id }).value()) {
        return;
    } else {
        member.ban();
        member.send("**Vous êtes blacklist du bot.**")
      console.log(`${member.tag} has been banned from ${member.guild.name} because he is in blacklist!`)
    }
})

client.on('message', message => {
    let member = message.author;
    if(!db.get("blacklist_users").find({ user_id: member.id }).value()) {
        return;
    }else {
        member.ban();
        member.send("**Vous êtes blacklist du bot.**")
    }
});












 const AntiSpam = require('discord-anti-spam');
  const antiSpam = new AntiSpam({
      warnThreshold: 3, // Amount of messages sent in a row that will cause a warning.
      kickThreshold: 8, // Amount of messages sent in a row that will cause a ban.
      banThreshold: 9, // Amount of messages sent in a row that will cause a ban.
      maxInterval: 2400, // Amount of time (in milliseconds) in which messages are considered spam.
      warnMessage: '{@user}, Please stop spamming. :warning:', // Message that will be sent in chat upon warning a user.
      kickMessage: '**{user_tag}** has been kicked for spamming.', // Message that will be sent in chat upon kicking a user.
      banMessage: '**{user_tag}** has been banned for spamming.', // Message that will be sent in chat upon banning a user.
      deleteMessagesAfterBanForPastDays: 1,
      maxDuplicatesWarning: 7, // Amount of duplicate messages that trigger a warning.
      maxDuplicatesKick: 10, // Amount of duplicate messages that trigger a warning.
      maxDuplicatesBan: 9, // Amount of duplicate messages that trigger a warning.
      exemptPermissions: [ 'ADMINISTRATOR'], // Bypass users with any of these permissions.
      ignoreBots: false, // Ignore bot messages.
      verbose: true, // Extended Logs from module.
      ignoredUsers: [], // Array of User IDs that get ignored.
      ignoredRoles: [717490950217400445], // Array of string role IDs or role name that are ignored.
      muteMessage: "**{user_tag}** has been muted for spamming.", // Message will be sent in chat upon banning.
      muteThreshold: 2, // Amount of messages sent in a row that will cause a mute.// And many more options... See the documentation.
      muteRoleName: "Muted", // Name of the role that the bot gonna give to users that get muted.
      maxDuplicatesMute: 4, // Amount of duplicate messages that trigger a warning.
      // And many more options... See the documentation.
  });

  const data = antiSpam.resetData();

  antiSpam.on("banAdd", (member) => console.log(`${member.user.tag} has been banned from ${member.guild.name}`));
  client.on('message', (message) => antiSpam.message(message)); 
  antiSpam.on("error", (message, error, type) => {
      console.log(`${message.author.tag} couldn't receive the sanction '${type}', error: ${error}`);
  });
  antiSpam.on("warnAdd", (member) => console.log(`${member.user.tag} has been warned in ${member.guild.name}`));
  antiSpam.on("kickAdd", (member) => console.log(`${member.user.tag} has been kicked from ${member.guild.name}`));


























});










































client.login("NzIwNjg4NzE2OTg0NjE1MDIz.XuJsbg.aXoXKY-deyhoJldlqcS2LZ5Na9c");