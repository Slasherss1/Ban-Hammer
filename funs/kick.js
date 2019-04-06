exports.do = () => {
  if (message.content.startsWith(`!kick`)) {
    if (!message.channel.permissionsFor(message.author).has("KICK_MEMBERS")) {
      message.channel.sendMessage("Nie masz uprawnień do zarządzania wiadomościami.");
      console.log("Użytkownik nie mam uprawnień");
      return;
    } else if (!message.channel.permissionsFor(client.user).has("KICK_MEMBERS")) {
      message.channel.sendMessage("Nie mam uprawniń do zarządzania wiadomościami.");
      console.log("Nie mam uprawnień do zarządzania wiadomościami.");
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
