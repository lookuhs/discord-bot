module.exports = {
  name: 'guildMemberAdd',
  once: false,
  execute(member) {
    const channel = member.guild.channels.cache.get('1020513269133344808');
    channel.send(`${member.user} has joined the server!`);
  }
}