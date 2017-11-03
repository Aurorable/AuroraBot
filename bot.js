const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
  //client.user.setStatus("dnd");
  //client.user.setPresence({game: {name: "updated?", type: 0}});
});

//test function
client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

client.login(process.env.BOT_TOKEN);

//constants
let prefix=".";
const params;

//FUNCTIONS GO BELOW HERE
//Bot Owner Only Commands
/*
client.on("message", (message)=>{
  if(!message.content.startsWith(prefix)) return;
  if(message.author != process.env.OWNER_ID){
    message.channel.send("You do not have permission to access this command.");
  }
  params = message.content.split(" ").slice(1);
  if(message.content.startsWith(prefix + "test")){
    message.channel.send("Hello @"+OWNER_ID+"!");
  }
});
*/
