import { Events } from "discord.js";

module.exports = {
  name: Events.ShardReconnecting,
  once: true,
  execute() {
    console.log("Reconnecting!");
  },
};
