const { Client, GatewayIntentBits, PermissionFlagsBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// توكن البوت الخاص بك
const token = 'MTE4MjM2OTE2NDc0NTI1MjkwNA.GWe73B.5Emny5WnKCUTKLdfygqYrGy3gGm3mSx-mU9quc';

client.once('ready', () => {
console.log('البوت جاهز!');
});

client.on('messageCreate', async message => {
// تجاهل رسالة البوت نفسه
if (message.author.bot) return;

const args = message.content.split(' ');
const command = args.shift().toLowerCase();

if (command === '!فتح تذكرة') {
const ticketChannel = await message.guild.channels.create(`تذكرة-${message.author.username}`, {
type: 'GUILD_TEXT',
permissionOverwrites: [
{
id: message.guild.id,
deny: [PermissionFlagsBits.ViewChannel],
},
{
id: message.author.id,
allow: [PermissionFlagsBits.ViewChannel],
},
{
id: '1261914132203180144', // استبدل بـ ID الدور المسؤول عن الدعم
allow: [PermissionFlagsBits.ViewChannel],
},
],
});
message.reply(`تم فتح تذكرة: ${ticketChannel}`);
ticketChannel.send(`أهلاً ${message.author}, من فضلك أخبرنا بمشكلتك.`);
} else if (command === '!استلام تذكرة') {
if (!message.channel.name.startsWith('تذكرة')) return;
message.channel.send('تم استلام التذكرة من قبل أحد المدراء.');
} else if (command === '!إغلاق تذكرة') {
if (!message.channel.name.startsWith('تذكرة')) return;
message.channel.send('ستُغلق التذكرة في غضون 5 ثواني.').then(() => {
setTimeout(async () => {
message.channel.send('التذكرة مغلقة.').then(() => {
message.author.send('نشكرك على استخدام نظام الدعم الخاص بنا. من فضلك قيّم تجربتك: [رابط التقييم]');
});
}, 5000);
});
} else if (command === '!حذف تذكرة') {
if (!message.channel.name.startsWith('تذكرة')) return;
message.channel.delete();
}
});

client.login(token);
