
const XTroid = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const CPK = "\n◢◤◇◥◣◥◤◢◤◇◥◣◥◤◢◤◇◥◣\n║*🍁Cpack Lite║🍁*\n║\n║\n╠═*.cup*\n║🍄```.cup your text```\n║\n╠═*.cmt*\n║🍄```.cmt your text```\n║\n╠═*.cfl*\n║🍄```.cfl your text```\n║\n╠═*.cmg*\n║🍄```.cmg your text```\n║\n╠═*.cgl*\n║🍄```.cgl your text```\n║\n╠═*.cstn*\n║🍄```.cstn your text```\n║\n╠═*.crod*\n║🍄```.crod your text```\n║\n╠═*.cgem*\n║🍄```.cgem your text```\n║\n╚⏤⏤⏤⏤╗❀╔⏤⏤⏤⏤╝\n"
const Config = require('../config')
const Ln = "Cpack Logo"
let FM = Config.WORKTYPE == 'public' ? false : true


XTroid.addCMD({pattern: 'cpk', fromMe: FM, deleteCommand: false, desc: Ln,}, (async (message, match) => {await message.client.sendMessage(message.jid,CPK, MessageType.text);}));
© 2021 GitHub, Inc.
