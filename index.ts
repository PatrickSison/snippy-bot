import Discord, {
  Collection,
  Interaction,
  Events,
  GatewayIntentBits,
  Routes,
  SlashCommandBuilder,
} from "discord.js";
import config from "./config/default.json";
import ytdl from "ytdl-core";
import path from "path";
import fs from "fs";
import * as dotenv from "dotenv";
dotenv.config();

type Command = {
  data: SlashCommandBuilder;
  execute: (interaction: Interaction) => void;
};

class Client extends Discord.Client {
  commands: any;
}

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.commands = new Collection<string, Command>();

const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  if ("data" in command && "execute" in command) {
    client.commands.set(command.data.name, command);
  } else {
    console.log(
      `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
    );
  }
}

/**
 * Discord lifecycle stuff
 */
console.log("Starting...");
client.once(Events.ClientReady, () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});
client.once("reconnecting", () => {
  console.log("Reconnecting!");
});
client.once("disconnect", () => {
  console.log("Disconnect!");
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  const command = client.commands.get(interaction.commandName);

  if (!command) {
    console.error(`No command matching ${interaction.commandName} was found.`);
    return;
  }

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    if (interaction.replied || interaction.deferred) {
      await interaction.followUp({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    } else {
      await interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    }
  }
});

client.on(Events.MessageCreate, (msg) => {
  if (msg.author.bot) return;

  msg.content = msg.content.toLowerCase();
  switch (msg.content) {
    case "re":
      msg.channel.send(
        "REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE"
      );
      break;
    case "betty dab":
      msg.channel.send("https://i.imgur.com/rwElyFd.gif");
      break;
    case "ligma":
      msg.channel.send(
        "https://media.giphy.com/media/wIyvbQa4g7CajwxkD5/giphy.gif"
      );
      msg.channel.send("LIGMA BALLS");
      break;
    case "sugma":
      msg.channel.send(
        "https://media.giphy.com/media/wIyvbQa4g7CajwxkD5/giphy.gif"
      );
      msg.channel.send("SUGMA DICK");
      break;
    case "gotta bounce":
      msg.channel.send("GOTTA BOUNCE ON MAH BOYS DICK");
      msg.channel.send(
        "https://media.giphy.com/media/wIyvbQa4g7CajwxkD5/giphy.gif"
      );
      msg.channel.send(
        "https://media.giphy.com/media/wIyvbQa4g7CajwxkD5/giphy.gif"
      );
      msg.channel.send(
        "https://media.giphy.com/media/wIyvbQa4g7CajwxkD5/giphy.gif"
      );
      break;
  }
});

client.login(process.env.DISCORD_SECRET);
