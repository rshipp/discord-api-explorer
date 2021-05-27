# Discord API Explorer

Two tools:

1. A bot that connects to a Discord server and logs everything.
2. An [interactive console](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop)
   where you can type in [discord.js code](https://discord.js.org/#/docs/main/stable/general/welcome)
   and have it print the results.

## Setup

With NodeJS and `yarn` installed:

    git clone https://github.com/rshipp/discord-api-explorer.git
    cd discord-api-explorer
    yarn install

### Creating a new bot

While logged in to your Discord account, go to https://discord.com/developers/applications
and click the "New Application" button.

Enter a name for the application. Pick something unique, otherwise it'll get
mad when you try to create a bot later, because "Too many users have this username".

Once you have a new applicaiton, find the "Bot" tab on the left and click the
"Add Bot" button, then confirm "Yes, do it!"

From the bot page, click the "Copy" button under "Token" to get your bot token.

Now that you have the token, put it in `config.json` in the folder with the bot files:

```json
{
  "key": "PUT_YOUR_TOKEN_HERE"
}
```

### Inviting your bot to your server

Still in your API application settings, go back to the "General Information" tab
on the left, and find your "APPLICATION ID". Copy that ID, and use it to form
a URL that looks like this:

    https://discord.com/api/oauth2/authorize?client_id=PUT_YOUR_APPLICATION_ID_HERE&scope=bot&permissions=8

Visit that URL. You should see a "Connect to Discord" prompt with your bot's name,
and an "ADD TO SERVER" dropdown. Select the server you want to add the bot to,
and click "Continue". Confirm the permissions you want to grant to the bot
(Administrator), and click "Authorize". Your bot has now been added to your server.

## Logger Bot

Usage:

    node bot.js

Do something in your Discord server(s), and watch the bot log it all.
The logging is very verbose. If you want to log fewer events, edit `bot.js`
and remove the events you don't want to see from the `EVENTS` constant at the
top of the file. You can find a list of available events, with descriptions,
here: https://discord.js.org/#/docs/main/stable/class/Client.

## Interactive Console

Usage:

    node console.js

The [client](https://discord.js.org/#/docs/main/stable/class/Client) is available as `client`:

    > client.channels

You can run any JavaScript:

    > console.log("hello, world");

Use anything from discord.js:

    > attachment = new Discord.MessageAttachment('http://placekitten.com/200/300')
