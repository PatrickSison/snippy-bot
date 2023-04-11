import {
  Interaction,
  SlashCommandBuilder,
  Client as DiscordClient,
  Collection,
  ClientOptions,
} from "discord.js";

export type Command = {
  data: SlashCommandBuilder;
  execute: (interaction: Interaction) => void;
};

export class Client extends DiscordClient {
  public commands: Collection<string, Command>;
  constructor({
    commands,
    ...options
  }: ClientOptions & { commands: Collection<string, Command> }) {
    super(options);
    this.commands = commands;
  }
}
