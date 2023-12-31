import { SlashCommandBuilder } from "@discordjs/builders";

export default {
  data: new SlashCommandBuilder()
  .setName("subdircmd")
  .setDescription("subdircmd!"),
  run: async (client, interaction) => {
    interaction.reply("This is a command in a subdirectory!")
  }
};
