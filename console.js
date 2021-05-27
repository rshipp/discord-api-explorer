const Discord = require('discord.js');
const repl = require('repl');

const CONFIG = require('./config.json');

const client = new Discord.Client();

/**
 * Bot Main
 */
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log("Discord client is avaiable as: client");

  // Start the repl.
  const local = repl.start('> ');

  // Expose Discord context.
  local.context.client = client;
  local.context.Discord = Discord;

  local.on('exit', () => {
    process.exit();
  });
});

client.login(CONFIG.key);
