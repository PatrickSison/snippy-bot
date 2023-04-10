import { SlashCommandBuilder, CommandInteraction, CacheType } from "discord.js";
import { codeBlock, quote } from "@discordjs/formatters";
import openai from "../ai";

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
    const message = interaction.options.get("message");
    await interaction.deferReply();
    if (message?.value) {
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: String(message?.value) }],
      });
      console.log(
        `AI Token usage: ${response.data.usage?.total_tokens ?? "???"}`
      );
      await interaction.editReply(
        `${quote(String(message.value))}${codeBlock(
          String(response.data.choices[0].message?.content)
        )}`
      );
    } else {
      await interaction.editReply("Could not retrieve the message");
    }
  } catch (error) {
    throw error;
  }
}
