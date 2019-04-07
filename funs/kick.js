exports.do = () => {
  if (message.content.startsWith(`!kick`)) {
    if (!message.channel.permissionsFor(message.author).has("KICK_MEMBERS")) {
      message.channel.sendMessage("Nie masz uprawnień do wyrzucania.");
      console.log("Użytkownik nie ma uprawnień");
      return;
    } else if (!message.channel.permissionsFor(client.user).has("KICK_MEMBERS")) {
      message.channel.sendMessage("Nie mam uprawniń do wyrzucania.");
      console.log("Nie mam uprawnień do wyrzucania.");
      return;
    }

    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.kick().then(() => {
          message.reply(`Wyrzucono <@${user.id}>`)
        })
      } else {
        message.reply('Ten urzytkownik nie jest na serwerze.');
      }
    } else {
      message.reply('Nie powiedziałeś kogo wyrzucić!');
    }
  }
}
