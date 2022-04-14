"Tag Yazdırma Komutu"
"ArviS#0011"

const { ApplicationCommandType, ApplicationCommandOptionType, ChatInputCommandInteraction, Client } = require('discord.js');

module.exports = {
    type: ApplicationCommandType.ChatInput,
    name: 'tag',
    description: 'Harika Tagımıza Göz Atmak İster misin?', //ArviS#0011
    options: [],
    /**
     * Run a chat input command interaction.
     * @param {ChatInputCommandInteraction} interaction The interaction.
     * @param {Client} client The client of the bot.
     */
    async run(interaction, client) {

        interaction.reply("**İşte O Muhteşem Tagımız:** TAGINIZ BURAYA") //ArviS#0011
    },
};

//ArviS#0011
