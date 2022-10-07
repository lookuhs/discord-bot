const { SlashCommandBuilder, EmbedBuilder, ChannelType } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('server')
    .setDescription('Displays information about the server'),
  async execute(interaction) {
    const guild = interaction.guild;
    const name = guild.name;
    const serverId = guild.id;
    const creationDate = Math.floor(guild.createdTimestamp / 1000);
    const owner = await guild.fetchOwner();
    const members = await guild.memberCount;
    const textChannels = guild.channels.cache.filter((c) =>
      c.type === ChannelType.GuildText).size;
    const voiceChannels = guild.channels.cache.filter((c) =>
      c.type === ChannelType.GuildVoice).size;
    const roles = guild.roles.cache.size;
    const totalBoosts = guild.premiumSubscriptionCount;
    let boostTier = guild.premiumTier;
    const embed = new EmbedBuilder()
      .setTitle('Server Info')
      .setDescription(`${name}'s server information`)
      .addFields(
        { name: ':id: Server ID', value: `${serverId}`, inline: true },
        { name: ':calendar: Created at', value: `<t:${creationDate}>`, inline: true },
        { name: ':crown: Owned by', value: `${owner}`, inline: true },
        { name: ':busts_in_silhouette: Member count', value: `${members}`, inline: true },
        { name: ':speech_balloon: Text channels', value: `${textChannels}`, inline: true },
        { name: ':microphone2: Voice channels', value: `${voiceChannels}`, inline: true },
        { name: ':label: Roles', value: `${roles}`, inline: true },
        { name: ':comet: Total boosts', value: `${totalBoosts}`, inline: true },
        { name: ':medal: Boost tier', value: `${boostTier}/3`, inline: true },
      )
    await interaction.reply({ embeds: [embed] });
  },
};
