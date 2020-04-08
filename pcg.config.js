module.exports = {
    type: 'api-lib',
    name: '@deepvision/tg.js',
    shortname: 'tg',
    description: 'Telegram API - JS LIB',
    author: {
        name: 'Vitaliy Angolenko',
        email: 'v.angolenko@deepvision.team',
    },
    repository: {
        name: 'Telegram Bot JS',
        host: 'github.com',
        path: 'deeepvision/telegram-bot-js',
    },
    license: 'file LICENSE.md',
    headers: [
        {
            name: 'author',
            value: '💧DeepVision <support@deepvision.team>',
        },
    ],
    loopback: {
        oas2: '/oas2.json',
    },
};
