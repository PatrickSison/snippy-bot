import { SlashCommandBuilder, CommandInteraction, CacheType } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("say")
  .setDescription("Does something that I don't know yet.")
  .addStringOption((option) =>
    option
      .setName("message")
      .setDescription("What do you want to say to Snippy?")
  );

export async function execute(interaction: CommandInteraction<CacheType>) {
  try {
    const response = interaction.options.get("message");
    await interaction.reply(`Shut up. ${response?.value}`);
  } catch (error) {
    throw error;
  }
}
