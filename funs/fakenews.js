exports.do = () => {
  if (msg.channel.id == 563777580428296214) {
    if (!msg.content.startsWith('**')) {
      msg.delete()
    }
  }
}
