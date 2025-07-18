function handleMessage(message) {
    const text = message.body?.trim();
    if (!text) return;

    if (text.toLowerCase() === '!ping') {
        message.reply('pong');
    } else {
        message.reply('You said: ' + text);
    }
}

module.exports = { handleMessage };
