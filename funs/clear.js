exports.do = () => {
  if (message.content == "!clear") {
    if (!message.channel.permissionsFor(message.author).has("MANAGE_MESSAGES")) {
      message.channel.sendMessage("Nie masz uprawnień do zarządzania wiadomościami.");
      console.log("Użytkownik nie ma uprawnień");
      return;
    } else if (!message.channel.permissionsFor(client.user).has("MANAGE_MESSAGES")) {
      message.channel.sendMessage("Nie mam uprawniń do zarządzania wiadomościami.");
      console.log("Nie mam uprawnień do zarządzania wiadomościami.");
      return;
    }

    if (message.channel.type == 'text') {
      message.channel.fetchMessages()
      .then(messages => {
        message.channel.bulkDelete(messages);
        messagesDeleted = messages.array().length;
      })
      .catch(err => {
        console.log('Error while doing Bulk Delete');
        console.log(err);
      });
}}}
