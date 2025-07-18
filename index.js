const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Initialize the WhatsApp client with local auth persistence
const client = new Client({
    authStrategy: new LocalAuth()
});

// Generate and scan this QR code with your WhatsApp mobile app
client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

// Log successful authentication
client.on('ready', () => {
    console.log('WhatsApp bot is ready!');
});

// Example message handler
client.on('message', message => {
    const text = message.body?.trim();
    if (!text) return;

    // Simple command: reply "pong" when user sends "!ping"
    if (text.toLowerCase() === '!ping') {
        message.reply('pong');
        return;
    }

    // Echo back any other text
    message.reply('You said: ' + text);
});

client.initialize();
