import { SlashCommandBuilder, CommandInteraction, CacheType } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("say")
  .setDescription("Replies with Pong!");

export async function execute(interaction: CommandInteraction<CacheType>) {
  await interaction.reply("Pong!");
}
