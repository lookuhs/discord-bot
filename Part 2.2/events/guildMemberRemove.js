module.exports = {
  name: 'guildMemberRemove',
  once: false,
  execute(member) {
    const channel = member.guild.channels.cache.get('1020513269133344808');
    channel.send(`${member.user} has left the server!`);
  }
}