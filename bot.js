const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
  //client.user.setStatus("dnd");
  //client.user.setPresence({game: {name: "updated?", type: 0}});
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

client.login(process.env.BOT_TOKEN);

//FUNCTIONS GO BELOW HERE
