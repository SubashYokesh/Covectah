const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');
const { json } = require('stream/consumers');
let BotJson;

const filePath = path.resolve(__dirname,'bot.json');



function doSome(callback){
    file = fs.readFile(filePath, 'utf8', (err, jsonString) => {
        // if (err) {
        //   console.log("Error reading file:", err);
        //   return;
        // }
        callback(err, jsonString)
        //BotJson = jsonString;
        //console.log(BotJson)
      });
}

doSome(function (err, jsonString){
    if (err) {
        console.log("Error reading file:", err);
        return;
      }
      BotJson = jsonString;
      console.log(BotJson)
});













console.log(BotJson)
//const BotConfig = JSON.parse(BotJson);

// const client = new Discord.Client({ intents: [
//     Discord.GatewayIntentBits.Guilds,
//     Discord.GatewayIntentBits.GuildMessages
//   ]})
  

// const token = BotConfig.token;

// client.on('ready', () => {
//   console.log(`Logged in as ${client.user.tag}!`);
// });

// client.on('message', (message) => {
//   if (!message.content.startsWith(prefix) || message.author.bot) return;
//   const args = message.content.slice(prefix.length).trim().split(/ +/);
//   const command = args.shift().toLowerCase();

//   if (command === 'search') {
//     // Perform your search logic here
//     const searchResults = [
//       'Result 1',
//       'Result 2',
//       'Result 3',
//     ];

//     let searchReply = 'Here are your search results:\n';
//     searchResults.forEach((result, index) => {
//       searchReply += `**${index + 1}:** ${result}\n`;
//     });

//     message.channel.send(searchReply);
//   }
// });

// client.login(token);