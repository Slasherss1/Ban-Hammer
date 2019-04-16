exports.do = async function() {
  if (message.content.startsWith(`${config.prefix}warn`)) {
    message.delete()
    if (!message.channel.permissionsFor(message.author).has("MANAGE_MESSAGES")) {
      message.channel.sendMessage("Nie masz uprawnień do zarządzania wiadomościami.");
      return;
    } else if (!message.channel.permissionsFor(client.user).has("MANAGE_MESSAGES")) {
      message.channel.sendMessage("Nie mam uprawniń do zarządzania wiadomościami.");
      return;
    }
    const user = message.mentions.users.first();
    if (user) {
      const hook = new Discord.WebhookClient(config.hook.id, config.hook.token)
      let embed = new Discord.RichEmbed().setAuthor(message.author.tag).setTitle('Warn').addField("Content", message.content.slice(6, message.content.length)).setColor('#ff270f')
      hook.send(embed)
    } else {
      message.reply(`Nie powiedziałeś kogo upomnieć`)
    }
  }
}
