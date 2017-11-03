const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
  //client.user.setStatus("dnd");
  //client.user.setPresence({game: {name: "updated?", type: 0}});
});

//test function
client.on("message", (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

//FUNCTIONS GO BELOW HERE
//Bot Owner Only Commands
client.on("message", (message)=>{
  let prefix=".";
  if(!message.content.startsWith(prefix)) return;
  if(message.author.id != OWNER_ID){
    message.channel.send("You do not have permission to access this command.");
    return;
  }
  //const params = message.content.split(" ").slice(1);
  if(message.content.startsWith(prefix + "test")){
    message.channel.send("Hello <@261759589941248022>!");
  }
  if(message.content.startsWith(prefix + "setGame")){
    const params = message.content.split(" ").slice(1);
    //string builder
    var tempGameName ="";
    for(var gameNameInCounter=0; gameNameInCounter<params.length; gameNameInCounter++){
      tempGameName=tempGameName+(params[gameNameInCounter]+" ");
    }
    client.user.setPresence({game: {name: tempGameName, type: 0}});
  }
});
