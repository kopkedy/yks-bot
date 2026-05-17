const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const cron = require('node-cron');

const client = new Client({
    puppeteer: {
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox'
        ]
    }
});

// QR kod
client.on('qr', qr => {
    console.log('QR KOD:');
    qrcode.generate(qr, { small: true });
});

// Bot hazır
client.on('ready', () => {
    console.log('Bot hazır ✅');
});

// !yks komutu
client.on('message', async message => {

    if(message.body === '!yks') {

        const yksDate =
            new Date("2026-06-20T10:15:00");

        const now = new Date();

        const diff = yksDate - now;

        const days =
            Math.floor(diff / (1000 * 60 * 60 * 24));

        message.reply(
            `⏳ YKS 2026'ya ${days} gün kaldı!`
        );
    }

});

client.on('message', async message => {

    if(message.body === '!yks') {

        const yksDate =
            new Date("2026-06-20T10:15:00");

        const now = new Date();

        const diff = yksDate - now;

        const days =
            Math.floor(diff / (1000 * 60 * 60 * 24));

        message.reply(
            `⏳ YKS 2026'ya ${days} gün kaldı!`
        );
    }

    if(message.body === '!kral') {

        message.reply('Ersin Geriş 👑');

    }

});

// Her sabah 08:00 mesajı
cron.schedule('0 8 * * *', async () => {

    const chats = await client.getChats();

    const hedefGrup = chats.find(
        chat => chat.name === '๛ERGE๛ Dayı ve Yeğenleri'
    );

    if(hedefGrup) {

        const yksDate =
            new Date("2026-06-20T10:15:00");

        const now = new Date();

        const diff = yksDate - now;

        const days =
            Math.floor(diff / (1000 * 60 * 60 * 24));

        hedefGrup.sendMessage(
`☀️ Günaydın!

YKS 2026'ya ${days} gün kaldı 📚
Bugün çalışmayı unutma 🚀`
        );
    }

});

cron.schedule('40 22 * * *', async () => {

    const chats = await client.getChats();

    const hedefGrup = chats.find(
        chat => chat.name === '๛ERGE๛ Dayı ve Yeğenleri'
    );

    if(hedefGrup) {

        hedefGrup.sendMessage(
`📱 Arkadaşlar Ersin abinin QR kodu okutalım 😄`
        );

    }

});

cron.schedule('0 18 * * *', async () => {

    const chats = await client.getChats();

    const hedefGrup = chats.find(
        chat => chat.name === '๛ERGE๛ Dayı ve Yeğenleri'
    );

    if(hedefGrup) {

        hedefGrup.sendMessage(
`🍽️ Yemekhane vakti`
        );

    }

});

client.initialize();
