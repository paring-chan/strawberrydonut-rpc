const rpc = require('discord-rpc')

const clientID = '684736677960482826'

rpc.register(clientID)

const client = new rpc.Client({transport: 'ipc'})

const update = () => client.setActivity({
    details: '나만의 스토리를 만들다',
    largeImageKey: 'donut',
    largeImageText: '귀여움',
    state: 'discord.gg/WWk5xG3ehQ',
    buttons: [
        { label: "딸기도넛 서포트 서버", url: "https://discord.gg/WWk5xG3ehQ" },
        { label: "딸기도넛 공식 사이트", url: "https://sbdonut.dev/" }
    ],
})

client.on('ready', async () => {
    await update()
    setInterval(update, 15000)
})

client.login({clientId: clientID}).catch(console.error)
