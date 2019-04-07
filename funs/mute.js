exports.do = () => {
  //Muting
  if (message.content.startsWith(`!mute`)) {
    if (!message.channel.permissionsFor(message.author).has("MANAGE_ROLES")) {
      message.channel.sendMessage("Nie masz uprawnień do zarządzania rolami.");
      return;
    } else if (!message.channel.permissionsFor(client.user).has("MANAGE_ROLES")) {
      message.channel.sendMessage("Nie mam uprawniń do zarządzania rolami.");
      return;
    }
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.addRole('564193168120086530').then(() => {
          message.reply(`Wyciszono <@${user.id}>`)
        })
      } else {
        message.reply('Ten urzytkownik nie jest na serwerze.');
      }
    } else {
      message.reply('Nie powiedziałeś kogo wyciszyć!');
    }
  }
  //Unmuting
  if (message.content.startsWith(`!unmute`)) {
    if (!message.channel.permissionsFor(message.author).has("MANAGE_ROLES")) {
      message.channel.sendMessage("Nie masz uprawnień do zarządzania rolami.");
      console.log("Użytkownik nie ma uprawnień");
      return;
    } else if (!message.channel.permissionsFor(client.user).has("MANAGE_ROLES")) {
      message.channel.sendMessage("Nie mam uprawniń do zarządzania rolami.");
      console.log("Nie mam uprawnień do zarządzania rolami.");
      return;
    }
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.removeRole('564193168120086530').then(() => {
          message.reply(`Włączono <@${user.id}>`)
        })
      } else {
        message.reply('Ten urzytkownik nie jest na serwerze.');
      }
    } else {
      message.reply('Nie powiedziałeś kogo włączyć!');
    }
  }
}
