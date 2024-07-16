//https://discord.gg/selfbot
const discord = require("discord.js-selfbot-v13");
const client = new discord.Client();

client.on("ready", async () => {
    client.user.setPresence({
        activities: [{
            name: 'ex',
            type: 'PLAYING',
            platform: "ps5",
            timestamps: { start: Date.now() - (404 * 24 * 60 * 60 * 1000) },
            assets: { large_image: null, large_text: null, small_image: null, small_text: null }
        }]
    });
});

client.login("XXXXXXXXXXXXXX");
