const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');
const { json } = require('stream/consumers');

const filePath = path.resolve(__dirname,'bot.json');
file = fs.readFileSync(filePath, 'utf8');
const BotConfig = JSON .parse(file);


const client = new Discord.Client({ intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages
  ]})
  

const token = BotConfig.Token;


client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);
  const userId = BotConfig.Users.Subash;
  const user = await client.users.fetch(userId);
  //console.log(login)
  //user.send('Hi').catch(console.error);
  console.log(user)
});

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

login = client.login(token);
//






// client.users.cache.get('<id>').send('<message>');