const Discord = require("discord.js");
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);
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


//General Commands
client.on("message", (message)=>{
  let prefix=".";
  if(!message.content.startsWith(prefix)) return;
  if(message.author.bot) return;

  //Role Assign
  if(message.content.startsWith(prefix+"iplay")){
    //alpha concept code to understand roles
    console.log("iPlay Called");
    const params=message.content.split(" ").slice(1);
    var tempRoleString="";
    for (var tempRoleInCounter=0; tempRoleInCounter<params.length; tempRoleInCounter++){
      tempRoleString=tempRoleString+(params[tempRoleInCounter]);
      if(tempRoleInCounter<params.length-1){tempRoleString=tempRoleString+" ";}
    }
    let member = message.member;
    var roletext = tempRoleString;
    let role = message.guild.roles.find("name", roletext);
    console.log("Starting role text: "+role);
    //remove end
    //role.
    console.log("member: "+member+" tempRoleString: \""+roletext+"\" role: "+role);
    member.addRole("375868134357336064").catch(console.error);
  }
});
