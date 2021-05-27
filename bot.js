const Discord = require('discord.js');

const CONFIG = require('./config.json');

const client = new Discord.Client();

const EVENTS = [
  'channelCreate',
  'channelDelete',
  'channelPinsUpdate',
  'channelUpdate',
  'debug',
  'emojiCreate',
  'emojiDelete',
  'emojiUpdate',
  'error',
  'guildBanAdd',
  'guildBanRemove',
  'guildCreate',
  'guildDelete',
  'guildIntegrationsUpdate',
  'guildMemberAdd',
  'guildMemberAvailable',
  'guildMemberRemove',
  'guildMembersChunk',
  'guildMemberSpeaking',
  'guildMemberUpdate',
  'guildUnavailable',
  'guildUpdate',
  'invalidated',
  'inviteCreate',
  'inviteDelete',
  'message',
  'messageDelete',
  'messageDeleteBulk',
  'messageReactionAdd',
  'messageReactionRemove',
  'messageReactionRemoveAll',
  'messageReactionRemoveEmoji',
  'messageUpdate',
  'presenceUpdate',
  'rateLimit',
  'ready',
  'roleCreate',
  'roleDelete',
  'roleUpdate',
  'shardDisconnect',
  'shardError',
  'shardReady',
  'shardReconnecting',
  'shardResume',
  'typingStart',
  'userUpdate',
  'voiceStateUpdate',
  'warn',
  'webhookUpdate',
];


/**
 * Bot Main
 */
client.on('ready', () => {
  console.error(`>> Logged in as ${client.user.tag}!`);
});

// Log everything.
EVENTS.forEach(eventName => {
  client.on(eventName, data => {
    console.log(`Event name: ${eventName}`);
    console.log("Event data:");
    console.log(data);
    console.log('');
  });
});

client.login(CONFIG.key);
