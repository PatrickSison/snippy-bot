import { Events } from "discord.js";

module.exports = {
  name: Events.ShardDisconnect,
  once: true,
  execute() {
    console.log("Disconnect!");
  },
};
