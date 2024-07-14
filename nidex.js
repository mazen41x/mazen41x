const { Client, GatewayIntentBits } = require('discord.js');
    const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

    // توكن البوت الخاص بك
    const token = 'MTE4MjM2OTE2NDc0NTI1MjkwNA.GWe73B.5Emny5WnKCUTKLdfygqYrGy3gGm3mSx-mU9quc';

    client.once('ready', () => {
        console.log('البوت جاهز!');
    });

    client.on('messageCreate', message => {
        // تجاهل رسالة البوت نفسه
        if (message.author.bot) return;

        // الأوامر باللغة العربية
        if (message.content === 'السلام عليكم') {
            message.reply('وعليكم السلام!');
        } else if (message.content === 'كيف الحال؟') {
            message.reply('بخير، الحمد لله!');
        }
    });

    client.login(token);
