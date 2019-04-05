global.Discord = require('discord.js');
global.client = new Discord.Client();
global.fs = require('fs');
global.config = require('./config.json');

client.on("ready", () => {
  console.log("Ready to use.")
  console.log("Current Tag: " + client.user.tag + ".")
  console.log("Current ID: " + client.user.id + ".");
})

client.on("message", message => {
  global.message = message
  if(message.author.bot) return;
  fs.readdir('./funs/', (err, files) => {
    files.forEach(file => {
      loadcommand(file)
    })
  })

  function loadcommand(file) {
    require('./funs/' + file).do()
  }
})

client.login(config.token);
