exports.do = async function() {
  if (message.content.startsWith(`!ban`)) {
    if (!message.channel.permissionsFor(message.author).has("BAN_MEMBERS")) {
      message.channel.sendMessage("Nie masz uprawnień do banowania.");
      return;
    } else if (!message.channel.permissionsFor(client.user).has("BAN_MEMBERS")) {
      message.channel.sendMessage("Nie mam uprawniń do banowania.");
      return;
    }

    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.ban().then(() => {
          message.reply(`Zbanowano <@${user.id}>`)
        })
      } else {
        message.reply('Ten urzytkownik nie jest na serwerze.');
      }
    } else {
      message.reply('Nie powiedziałeś kogo zbanować!');
    }
  }
}
