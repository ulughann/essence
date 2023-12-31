import { SlashCommandBuilder } from "@discordjs/builders";

export default {
  data: new SlashCommandBuilder()
  .setName("ping")
  .setDescription("Pong!"),
  run: async (client, interaction) => {
    interaction.reply(`Pong 🏓 in ${client.ws.ping}ms`)
  }
};
