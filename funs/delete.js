exports.do = () => {
  if (message.content == "!delete ") {
    if (!message.channel.permissionsFor(message.author).has("MANAGE_MESSAGES")) {
      message.channel.sendMessage("Nie masz uprawnień do zarządzania wiadomościami.");
      return;
    } else if (!message.channel.permissionsFor(client.user).has("MANAGE_MESSAGES")) {
      message.channel.sendMessage("Nie mam uprawniń do zarządzania wiadomościami.");
      return;
    }

    if (message.channel.type == 'text') {
        message.delete()
        message.channel.bulkDelete(message.content.slice(8, message.content.length)).then(messages => message.reply(`Usunięto ${messages.size} wiadomości.`).delete(1500))
      .catch(err => {
        console.log('Error while doing Bulk Delete');
        console.log(err);
      })}
}}
