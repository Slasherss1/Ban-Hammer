exports.do = () => {
  //Muting
  if (message.content.startsWith(`!mute`)) {
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
