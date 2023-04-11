import { Events, Message } from "discord.js";

module.exports = {
  name: Events.MessageCreate,
  execute(message: Message) {
    if (message.author?.bot) return;

    message.content = message.content.toLowerCase();
    switch (message.content) {
      case "re":
        message.channel.send(
          "REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE"
        );
        break;
      case "betty dab":
        message.channel.send("https://i.imgur.com/rwElyFd.gif");
        break;
      case "ligma":
        message.channel.send(
          "https://media.giphy.com/media/wIyvbQa4g7CajwxkD5/giphy.gif"
        );
        message.channel.send("LIGMA BALLS");
        break;
      case "sugma":
        message.channel.send(
          "https://media.giphy.com/media/wIyvbQa4g7CajwxkD5/giphy.gif"
        );
        message.channel.send("SUGMA DICK");
        break;
      case "gotta bounce":
        message.channel.send("GOTTA BOUNCE ON MAH BOYS DICK");
        message.channel.send(
          "https://media.giphy.com/media/wIyvbQa4g7CajwxkD5/giphy.gif"
        );
        message.channel.send(
          "https://media.giphy.com/media/wIyvbQa4g7CajwxkD5/giphy.gif"
        );
        message.channel.send(
          "https://media.giphy.com/media/wIyvbQa4g7CajwxkD5/giphy.gif"
        );
        break;
    }
  },
};
