exports.do = async function() {
  if (message.channel.id == 563777580428296214) {
    if (!message.content.startsWith('**')) {
      message.delete()
    }
  }
}
