 // <BOT BY FX - TEAM>

const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES, 
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		prepareMessageFromContent, 
		processTime,
} = require('@adiwajshing/baileys')
const qrcode = require("qrcode-terminal") 
const fs = require('fs')
const os = require('os')
const axios = require("axios")
const speed = require('performance-now')
const request = require('request')
const imgbb = require('imgbb-uploader')
const toMs = require('ms')
const googleImage = require('g-i-s')
const ms = require('parse-ms')
const encodeUrl = require('encodeurl')
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const cheerio = require('cheerio')
const phoneNum = require('awesome-phonenumber')
const ffmpeg = require('fluent-ffmpeg')
const hx = require('hxz-api')
const imageToBase64 = require('image-to-base64')
const lolis = require('lolis.life')
const zee = require('api-alphabot')
const ytsd = require('ytsr')
const gis = require('g-i-s');
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const ggs = require('google-it')
const loli = new lolis()

const { mediafireDl } = require('./lib/mediafire.js')


const Exif = require('./lib/exif');
const exif = new Exif();
const util = require('util');
const { igDownloader } = require("./lib/gif.js")

//********** FUNCTIONS **********//
const { removeBackgroundFromImageFile } = require('remove.bg')
const { color, bgcolor } = require('./lib/color')
const simple = require('./lib/simple.js')

const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { exec } = require('child_process')
const { uploadimg } = require('./lib/uploadimg')

//********** SRC **********//
const ban = JSON.parse(fs.readFileSync('./src/banned.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const antivirtex = JSON.parse(fs.readFileSync('./src/antivirtex.json'))
const autostick = JSON.parse(fs.readFileSync('./src/autostik.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const antilinkmax = JSON.parse(fs.readFileSync('./src/antilinkmax.json')) 
const antitiburon = JSON.parse(fs.readFileSync('./src/antibot.json')) 
const antifake = JSON.parse(fs.readFileSync('./src/antifake.json'))
const mekih = JSON.parse(fs.readFileSync('./src/simi.json'))
const settings = JSON.parse(fs.readFileSync('./src/settings.json'))
const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
const videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
const { stick } = require('./src/respon');
//*********** CUSTOMABLE ***********//

 
f = '_'
 
blocked = []
fake = '- [ 𝙁𝙓 𝘽𝙊𝙏 ] -'
baterai = {
battery: "" || "No Detectado",
isCharge: "" || false
}
offline = false
fakeimg = fs.readFileSync(`./media/FxBot.jpeg`)
numbernye = '0'
join = '\`\`\`New Member\`\`\` \n \`\`\`Nama :\`\`\` \n \`\`\`Askot : \`\`\` \n \`\`\`Umur :\`\`\` \n \`\`\`Status :\`\`\` \n\n - [ 𝙎𝙀𝙇𝙁 𝘽𝙊𝙏 ] -'
leave = '\`\`\`Adios👋\`\`\`'
promote = '*Your Welcome🥳*'
demote = '*Yahahahwahyuuu kasihaan di demote🤣*'
public = true





const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}
const scommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}
//*********** VCARD  ***********//
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:FxBotシ︎\n'
            + 'ORG:Owner FxBot;\n'
            + 'TEL;type=CELL;type=VOICE;waid=5219984646983:+52 998 464 6983\n'
            + 'END:VCARD'

//*********** 𝗔𝗣𝗜𝗞𝗘𝗬 ***********//
const BarBarKey = 'Apikey-Lu' 
const VhtearKey = 'Apikey-Lu' 
const XteamKey = 'Apikey-Lu' 
const TobzApi = 'Apikey-Lu' 
const OnlyDev = 'Apikey-Lu'
const TechApi = 'Apikey-Lu'
const ZeksApi = 'Apikey-Lu'
const shizukaapi = 'Apikey-Lu'
const LolHuman = 'Apikey-Lu'
const LolKey = 'Apikey-Lu'

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`
}
function tanggal(){
myMonths = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
			myDays = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
			var tgl = new Date();
			var day = tgl.getDate()
			bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

function monospace(string) {
return '```' + string + '```'
}


async function starts() {
	const FxBot = new WAConnection()
FxBot.version = [2, 2140, 12]
console.log(banner.string)
   FxBot.on('qr', qr => {
   	
   qrcode.generate(qr, { small: true })
   console.log(color('[','white'),color('∆','red'),color(']','white'),color('Escanee el codigo QR de arriba.','white'),color('YOU','red'),color('TUBE','white'),color('Felixcrack 409','yellow'))
})

FxBot.on('credentials-updated', () => {
	const authInfo = FxBot.base64EncodedAuthInfo()
   console.log(`credentials updated!`)
   fs.writeFileSync('./FxBot_Connection.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./FxBot_Connection.json') && FxBot.loadAuthInfo('./FxBot_Connection.json')
FxBot.sendMessage(`5219984646983@s.whatsapp.net`, `─────「 *CONECTADO* 」─────\n\n▢ Conectado exitomekente con su WhatsApp, para iniciar el bot, escribe .menu en un chat de WhatsApp.\n\n▢ Este bot es creado por FxTeam\n\n▢ Canal Oficial de YT : https://youtube.com/c/Felixcrack409\n\n▢ Grupo de soporte por si tienes alguna duda : https://chat.whatsapp.com/LOHYHhBJRjG7ruk67QkExj\n\n▢ Recomendaciones para que el bot no se apagué\n\n▢ Quítale la optimización de la batería al WhatsApp donde tengas al bot\n\n▢ Quítale la optimización de la batería a Termux\n\n▢ Copyright Felixcrack 409 ©\n\n─────「 *FXBOT* 」─────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Click aqui",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./media/FxBot.jpeg'),sourceUrl:"https://wa.me/529984646983?text=Hola soy : \n\nTengo una duda/problema/error con el bot."}}})
FxBot.connect();

   
	FxBot.on("group-participants-update", async (anu) => {
    try {
    	if(antifake.includes(anu.jid)) {
const mdata = await FxBot.groupMetadata(anu.jid)
if (anu.action == 'add'){
num = anu.participants[0]
if(!num.split('@')[0].startsWith(00)) {

setTimeout(async function () {
if (num.startsWith('1')) return FxBot.groupRemove(mdata.id, [num])
if (num.startsWith('994')) return FxBot.groupRemove(mdata.id, [num])
if (num.startsWith('48')) return FxBot.groupRemove(mdata.id, [num])
if (num.startsWith('91')) return FxBot.groupRemove(mdata.id, [num])
if (num.startsWith('62')) return FxBot.groupRemove(mdata.id, [num])
if (num.startsWith('60')) return FxBot.groupRemove(mdata.id, [num])
 if (num.startsWith('66')) return FxBot.groupRemove(mdata.id, [num])
 if (num.startsWith('371')) return FxBot.groupRemove(mdata.id, [num])
 if (num.startsWith('380')) return FxBot.groupRemove(mdata.id, [num])
}, )
}
}
}

		const thisfrom = await FxBot.groupMetadata(anu.jid)

if (anu.action == 'add'){
bbykev = anu.participants[0]
const fakelord =  { "key" : {"remoteJid": "299277777@g.us","fromMe": false,"participant": '0@s.whatsapp.net'}, message: { "stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/AipZmrw402_detgfViyjnKOg4hTUhpCTjyyJwHFYj8dw.enc", "fileSha256": "gUCkLdDm6fVT7oGr4Wtw1E4IcA1c2BNwX/IsNx2ox6U=", "fileEncSha256": "il2fkvb3+y3tKHfsWJVNnvz7CBdLhZQoCDdjGlbU1CI=", "mediaKey": "5aKnfk61dIoUlhBjvPCFYl3U9Wzq48thKjK/yZlXsrQ=", "mimetype": "image/webp", "height": 64, "width": 64, "directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73", "fileLength": "44978", "mediaKeyTimestamp":"1621218472" }}}
if(bbykev.startsWith('5219984646983')) return FxBot.sendMessage(thisfrom.id, 'Ui Entro El Creador De Este Bot', MessageType.text, {quoted: ftoko, contextInfo: {forwardingScore: 9999, isForwarded: true}})
}


if (!welkom.includes(anu.jid)) return

const mdata = await FxBot.groupMetadata(anu.jid)
      groupMet = await FxBot.groupMetadata(anu.jid)
      groupMembers = groupMet.participants
      groupAdmins = getGroupAdmins(groupMembers)
      num = anu.participants[0]
      
      ini_user = FxBot.contacts[num]
      namaewa = ini_user.notify
      member = mdata.participants.length
      console.log(anu)
      memeg = mdata.participants.length
      let v = FxBot.contacts[num] || { notify: num.replace(/@.+/, "") }
      anu_user = v.vname || v.notify || num.split("@")[0]
       time_wel = moment.tz("America/Mexico_City").format("HH:mm")
        let w = FxBot.contacts[num] || { notify: num.replace(/@.+/, "") }
       
        out = `${leave}`
 try {
        pp_user = await FxBot.getProfilePicture(num)
      } catch (e) {
        pp_user =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
      }
      try {
        pp_grup = await FxBot.getProfilePicture(anu.jid)
      } catch (e) {
        pp_grup =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
      }
        shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${pp_user}`)
        
     
 if (anu.action == 'add') {
  
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/welcome?nama=${encodeUrl(namaewa)}&descriminator=${
            groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://i.postimg.cc/rFkw8MpX/IMG-20210807-151325.jpg`
        )
        buttons = [
          { buttonId: `sjJwkLwbWk`, buttonText: { displayText: "¡Bienvenido al grupo!" }, type: 1 },
        ]
        imageMsg = (
          await FxBot.prepareMessageMedia(buff, "imageMessage", {
            thumbnail: buff,
          })
        ).imageMessage
        buttonsMessage = {
          contentText: `🪀「 Bienvenid@ 」🪀\n\n¡Hola @${anu_user}!\n\n ¿Como estas?\n\nYo soy FxBot y te doy la bienvenida a : ${mdata.subject}\n\n🪀 Usuarios: ${memeg}\n\n🪀 Administradores: ${groupAdmins.length}\n\n🪀 Reglas Del Grupo: \n\n${mdata.desc}`,
           
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        }
        prep = await FxBot.prepareMessageFromContent(
          mdata.id,
          { buttonsMessage },
          {}
        )
        FxBot.relayWAMessage(prep)
      }
     else if (anu.action == 'remove') {
        
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/goodbye?nama=${encodeUrl(namaewa)}&descriminator=${
            groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://i.postimg.cc/rFkw8MpX/IMG-20210807-151325.jpg`
        )
        buttons = [
          { buttonId: `hHHYGFRH`, buttonText: { displayText: `${leave}` }, type: 1 },
        ]
        imageMsg = (
          await FxBot.prepareMessageMedia(buff, "imageMessage", {
            thumbnail: buff,
          })
        ).imageMessage
        buttonsMessage = {
          contentText: `${out}`,
          footerText: `${leave}`,
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        }
        prep = await FxBot.prepareMessageFromContent(
          mdata.id,
          { buttonsMessage },
          {}
        )
        FxBot.relayWAMessage(prep)
      
  
  }
  
  
  
  
  
     else if (anu.action == 'promote' && !num.includes(FxBot.user.jid)) {
            img = await getBuffer(`http://hadi-api.herokuapp.com/api/card/promote?nama=${encodeUrl(namaewa)}&member=${member}&pesan=Nuevo Admin Del Grupo&pp=${shortpc.data}&bg=https://i.postimg.cc/rFkw8MpX/IMG-20210807-151325.jpg`)
            teks = `◪ PROMOTE DETECTADO\n\n├─ Número: ${num.replace('@s.whatsapp.net', '')}\n├─ Mensaje: ¡Felicitaciones por ser un administrador de grupo!\n└─ ❏ @${num.split('@')[0]}`
            FxBot.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
         } else if (anu.action == 'demote' && !num.includes(FxBot.user.jid)) {
            img = await getBuffer(`http://hadi-api.herokuapp.com/api/card/demote?nama=${encodeUrl(namaewa)}&member=${member}&pesan=Un Admin Menos&pp=${shortpc.data}&bg=https://i.postimg.cc/rFkw8MpX/IMG-20210807-151325.jpg`)
            teks = `◪ DEMOTE DETECTADO\n\n\n├─ Número: ${num.replace('@s.whatsapp.net', '')}\n├─ Mensaje: Lo siento ya no eres admin 💩\n└─ ❏ @${num.split('@')[0]}`
            FxBot.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
         }
     } catch (e) {
         console.log('Error : %s', color(e, 'red'))
      }
})

/********** FUCTION BATERIA **********/
FxBot.on('CB:action,,battery', json => {
global.batteryLevelStr = json[2][0][1].value
global.batterylevel = parseInt(batteryLevelStr)
var baterai = batterylevel
if (json[2][0][1].live == 'true') charging = true
if (json[2][0][1].live == 'false') charging = false
console.log(color('🔋Carga de la bateria: ' + batterylevel+'%', "yellow"))
})

	FxBot.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	/////***𝙁𝙐𝙉𝙏𝙄𝙊𝙉  𝙂𝙍𝙐𝙋***\\\\\
FxBot.on('group-update', async(chat) => {
var donde = chat.jid
var group = await FxBot.groupMetadata(donde)
if (!chat.desc == '') {
var tag = chat.descOwner.split('@')[0] + '@s.whatsapp.net'
var mensajeDesc = `*🐤 「 Descripción Del Grupo Cambiada 」 🍟*\n\nLa descripción del grupo acaba de ser cambiada por\n\n@${chat.descOwner.split('@')[0]}*\n\n•Nueva descripción:\n\n${chat.desc}`
FxBot.sendMessage(group.id, mensajeDesc, MessageType.text)
}
if (chat.announce == 'false'){
teks = `「 *Grupo Abierto* 」\n\n_El grupo ha sido abierto por el administrador_\n\n_Ahora todos los miembros pueden reply mensajes._`
FxBot.sendMessage(group.id, teks, MessageType.text)
}
if(chat.announce == 'true'){
teks = `「 *Grupo cerrado* 」\n\n_El administrador ha cerrado el grupo_\n\n_Ahora solo los administradores pueden reply mensajes_`
FxBot.sendMessage(group.id, teks, MessageType.text)
 }
if(chat.restrict == 'false'){
teks = `「 *Configuración Del Grupo Cambiada 」\n\nSe ha abierto la opción Editar información del grupo para todos los miembros.\n\nAhora todos los miembros pueden editar la información de este grupo.`
FxBot.sendMessage(group.id, teks, MessageType.text)
}
if(chat.restrict == 'true'){
teks = `「 *Configuración Del Grupo Cambiada 」\n\nSe ha cerrado la opción de Editar la información del grupo para los miembros.\n\nAhora solo el administrador del grupo puede editar la información de este grupo`
FxBot.sendMessage(group.id, teks, MessageType.text)
}
})

	FxBot.on('message-delete', async (chat) => {
 
if (m.key.remoteJid == 'status@broadcast') return
if (m.key.fromMe) return
FxBot.sendMessage(m.key.remoteJid, `antidelete detectado`, MessageType.text, {})
console.log(color('[ ANTI ELIMINAR MENSAJE ]', 'magenta'), color(`MENSAJE ELIMINADO DETECTADO`, 'red'))
setTimeout( () => {
                FxBot.copyNForward(m.key.remoteJid, m.message)
                
                }, 1000)
                })


FxBot.on('chat-update', async (mek) => {
	    try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
        if (!mek.message) return
        if (mek.key && mek.key.remoteJid == 'status@broadcast') return
        global.blocked
        global.p
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
   
			global.prefix
			
			global.blocked
			const m = simple.smsg(FxBot, mek);
			const type = Object.keys(mek.message)[0]        
			const typei = Object.keys(mek.message)[0]
			const cmd = (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId && m.quoted.sender === FxBot.user.jid) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'listResponseMessage' && mek.message.listResponseMessage.singleSelectReply.selectedRowId && m.quoted.sender === FxBot.user.jid) ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
            const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
		    const apiKey = settings.apiKey 
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		    const date = new Date().toLocaleDateString()
			const jam = moment.tz('Asia/Jakarta').format('HH:mm')
            const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
            const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
            const senderme = mek.participant
            symantec = (type === 'listResponseMessage') ? mek.message.listResponseMessage.selectedDisplayText : ''
   /************** BUDY DO AUTO RESPONDER ************/
        const body = (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) && m.quoted.sender === FxBot.user.jid) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'listResponseMessage' && mek.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) && m.quoted.sender === FxBot.user.jid) ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""

		const budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''

		const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		    const arg = chats.slice(command.length + 2, chats.length)
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
           const messagesC = pes.slice(0).trim()
		   FxBot.on("CB:action,,battery", json => {
	       const battery = json[2][0][1].value
	       const persenbat = parseInt(battery)
           baterai.battery = `${persenbat}%`
	       baterai.isCharge = json[2][0][1].live
	       })
			button = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''

			mess = {
			wait: '▢ ¡Espera un momento!',
			success: '▢ ¡Done!',
			nsfwoff: '▢ ¡La funcion de NSFW no está activa!',
			wrongFormat: '▢ Formato incorrecto.',
			waitimg: '▢ ¡Espera un momento!\n\nEstoy creando tu imagen.', 
			error: {
				stick: '▢ Ocurrió un error.',
				errostick: '▢ Ocurrió un error.',
				Iv: '▢ Verifica que el link sea correcto.',
			},
			only: {
				group: '▢ Este comando solo puede ser usado en grupos.',
				admin: '▢ Lo siento.\n\nNo eres administrador del grupo.',
				Badmin: '▢ El bot necesita ser admin para poder usar este comando'
			}
		}
      const totalchat = await FxBot.chats.all()
			const botNumber = FxBot.user.jid
			const ownerNumber = [`50764813347@s.whatsapp.net`] // replace this with your number
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await FxBot.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const itsMe = sender == botNumber ? true : false
            const isAntiLink = isGroup ? antilink.includes(from) : false
            const isAntiLinkMax = isGroup ? antilinkmax.includes(from) : false
            const isAntiTiburoMierdaBot = isGroup ? antitiburon.includes(from) : false
			const isWelkom = isGroup ? welkom.includes(from) : false
            const isBanned = ban.includes(sender)
			const isNsfw = isGroup ? nsfw.includes(from) : false
            const AntiVirtex = isGroup ? antivirtex.includes(from) : false
            const isAntiFake = isGroup ? antifake.includes(from) : false
            const isAutoSt = isGroup ? autostick.includes(from) : false
            const conts = mek.key.fromMe ? FxBot.user.jid : FxBot.contacts[sender] || { notify: jid.replace(/@.+/, '') }
            const pushname = mek.key.fromMe ? FxBot.user.name : conts.notify || conts.vname || conts.name || '-'
			const isSimi = isGroup ? mekih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const q = args.join(' ')
			const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
            }
			const reply = (teks) => {
				FxBot.sendMessage(from, teks, text, {quoted:freply})
			}
			const sendMess = (hehe, teks) => {
				FxBot.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? FxBot.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : FxBot.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}

const jmn = moment.tz('America/Mexico_City').format('HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 enero 2022').getTime()
				const weton = ['pahing', 'lunes.','Sueldo','Kliwon','leyes'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })

const sendMediaURL = async(to, url, text="", mids=[]) =>{
				if(mids.length > 0){
					text = normalizeMention(to, text, mids)
				}
				const fn = Date.now() / 10000;
				const filename = fn.toString()
				let mime = ""
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						mime = res.headers['content-type']
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, filename, async function () {
					console.log('done');
					let media = fs.readFileSync(filename)
					let type = mime.split("/")[0]+"Message"
					if(mime === "image/gif"){
						type = MessageType.video
						mime = Mimetype.gif
					}
					if(mime.split("/")[0] === "audio"){
						mime = Mimetype.mp4Audio
					}
					FxBot.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
					
					fs.unlinkSync(filename)
				});
			}

const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
console.log('Listo, emoji enviado.');
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vf "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=60, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse" ${asw}`, (err) => {
let media = fs.readFileSync(asw)
FxBot.sendMessage(to, media, MessageType.sticker,{sendEphemeral: true, contextInfo: { forwardingScore: 9999, isForwarded: true}, quoted: ftoko})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
} 

const sendSticker = (from, filename, mek) => {
FxBot.sendMessage(from, filename, MessageType.sticker, {quoted: mek})
}
const fakegroup = (teks) => {
			FxBot.sendMessage(from, teks, text, {
				quoted: {
					key: {
						fromMe: false,
						participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6281226770537-1604595598@g.us" } : {})
					},
					message: {
						conversation: fake
					}
				}
			})
		}
		const txt1 = {
key:
{ fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ?
{ remoteJid: "status@broadcast" } : {}) },
message: { "imageMessage": { "mimetype": "image/jpeg","caption": `© FxBot Team 🍡`, 'jpegThumbnail': fs.readFileSync('./media/FxBot.jpeg')}}
}
contextInfo: {
mentionedJid: [sender]}

const ftroli = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "529984646983@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 999999999999,status: 1,surface : 1,message: `${fake}`,orderTitle: 'FXTeam',thumbnail: fs.readFileSync('./media/FxBot.jpeg'), sellerJid: '0@s.whatsapp.net'}}}

const fdocu = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/FxBot.jpeg')}}}
            
const sticWait = (hehe) => {
			ano = fs.readFileSync('./sticker/wait.webp')
			FxBot.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		
		const sticNoAdm = (hh) => {
			ano = fs.readFileSync('./sticker/noadm.webp')
			FxBot.sendMessage(hh, ano, sticker, { quoted: mek})
		}

const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`media/FxBot.jpeg`)} } }
const ofrply = fs.readFileSync('./media/FxBot.jpeg')
const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./media/FxBot.jpeg`)
					},
					"title": fake,
					"description": "SELF BOT",
					"currencyCode": "USD",
					"priceAmount1000": "999999999999",
					"retailerId": "Self Bot",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}

const math = (teks) => {
				return Math.floor(teks)
}

const pinterest = (queryy) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://id.pinterest.com/search/pins/?autologin=true&q=${queryy}`, {
      headers: {
        cookie: "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"
      }
    }).then(({data}) => {
      const $ = cheerio.load(data)
      const result = []
      const hasil = []
      $('div > a').get().map(b => {
        const link = $(b).find('img').attr('src')
        result.push(link)
      })
      result.forEach(function (v) {
        if (v == undefined) return
        hasil.push(v.replace(/236/g,'736'))
      })
      hasil.shift()
      resolve(hasil)
    }).catch(reject)
  })
}
const uploadImages = (buffData, type) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
        const { ext } = await fromBuffer(buffData)
        const cmd = text.toLowerCase()
        const filePath = 'utils/tmp.' + ext
        const _buffData = type ? await resizeImage(buffData, false) : buffData
        fs.writeFile(filePath, _buffData, { encoding: 'base64' }, (err) => {
            if (err) return reject(err)
            console.log('Uploading image to telegra.ph server...')
            const fileData = fs.readFileSync(filePath)
            const form = new FormData()
            form.append('file', fileData, 'tmp.' + ext)
            fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form
            })
                .then(res => res.json())
                .then(res => {
                    if (res.error) return reject(res.error)
                    resolve('https://telegra.ph' + res[0].src)
                })
                .then(() => fs.unlinkSync(filePath))
                .catch(err => reject(err))
        })
    })
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await FxBot.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
FxBot.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
fx10 = vid1
mhan = await FxBot.prepareMessage(from, fx10, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
FxBot.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await FxBot.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
FxBot.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
FxBot.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
FxBot.sendMessage(from, hasil, type, options).catch(e => {
FxBot.sendMessage(from, { url : link }, type, options).catch(e => {
reply
console.log(e)
})
})
})
})
}

const Sendbutdocument = async(id, text1, desc1, file1, doc1, but = [], options = {}) => {
media = file1
kma = doc1
mhan = await FxBot.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
FxBot.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

const floc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    liveLocationMessage: {
                    caption: `s`,
                    jpegThumbnail: fakeimg
                          }
                        }
                      }
const sendFakeThumb = async function(from, url, title, desc){
				var anoim = {
					detectLinks: false
				}
				var qul = await FxBot.generateLinkPreview(url)
				qul.title = title
				qul.description = desc
				qul.jpegThumbnail = dfrply
				FxBot.sendMessage(from, qul, MessageType.extendedText, anoim)
			}
			function Json(objectPromise) {
var objectString = JSON.stringify(objectPromise, null, 2)
var parse = util.format(objectString)
if (objectString == undefined) {
parse = util.format(objectPromise)
}
return reply(parse)
}
            function speedText(speed) {
                let bits = speed * 8;
                const units = ['', 'K', 'M', 'G', 'T'];
                const places = [0, 1, 2, 3];
                let unit = 0;
                while (bits >= 2000 && unit < 4) {
                    unit++;
                    bits/= 1000;
                }
                return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
            } 


////***𝙁𝙐𝙉𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙑𝙄𝙍𝙐𝙎***\\\\\
    if (budy.length > 1800) {
    if (!isGroup) return
    if (!AntiVirtex) return
    if (isGroupAdmins) return
    reply('                              \n'.repeat(300))
    reply(`「 *ANTI-TRAVA* 」\n\n¡Kuaker malo! ¿Por qué reply una trava ✋🏻📰? \nBye kuaker...\n\nAdiós~`)
    console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
    FxBot.groupRemove(from, [sender])
    }
/////***𝙁𝙐𝙉𝙏𝙄𝙊𝙉  𝘼𝙉𝙏𝙄𝙇𝙄𝙉𝙆 𝙂𝙍𝙐𝙋***\\\\\
      if (budy.includes(`chat.whatsapp.com`)){
	   
					if (isGroup && !mek.key.fromMe) {
					if (!isAntiLink) return
					if (isGroupAdmins) return reply('Te salvaste eres admin 🙂')
					if (messagesC.includes("@529984646983")) return reply("Permiso recibido")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`▢ Eliminé al usuario @${sender.split("@")[0]}\n\nPor romper una de las reglas del grupo.`)
					FxBot.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)
					}, 0)
				    }
}
if (budy.includes(`http`)){
	   
					if (isGroup && !mek.key.fromMe) {
					if (!isAntiLinkMax) return
					if (isGroupAdmins) return reply('Te salvaste eres admin 🙂')
					if (messagesC.includes("@529984646983")) return reply("Permiso recibido")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`▢ Eliminé al usuario @${sender.split("@")[0]}\n\nPor romper una de las reglas del grupo.`)
					FxBot.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)
					}, 0)
				    }
}
	if (budy.includes(`https://www.youtube.com/c/TheKillerMaxOFC`)){
	   
					if (isGroup && !mek.key.fromMe) {
					if (!isAntiTiburoMierdaBot) return
					 
					if (messagesC.includes("@529984646983")) return reply("Permiso recibido")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`▢ Eliminé al usuario @${sender.split("@")[0]}\n\nPor usar BotTiburon.`)
					FxBot.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)
					}, 0)
				    }
}

if (!settings.autocomposing) {
FxBot.updatePresence(from, Presence.composing)
}
if (!settings.autorecording) {
FxBot.updatePresence(from, Presence.recording)

}
const sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //FX TEA
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍋 Ganaste 👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        '🍌 : 🍌 : 🍌 Ganaste👑'
        ]
			colors = ['red','white','black','blue','yellow','green']
			const isImage = type == 'imageMessage'
        const isVideo = type == 'videoMessage'
        const isAudio = type == 'audioMessage'
        const isSticker = type == 'stickerMessage'
        const isContact = type == 'contactMessage'
        const isLocation = type == 'locationMessage'
	    const isTexto = type == 'textMessage'
	
	
		const isQuoted = type == 'extendedTextMessage'
	    const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		if (itsMe){
        if(chats.toLowerCase() == `${prefix}self`){
        public = false
        FxBot.sendMessage(from, `Success`, `STATUS : SELF`)
        }
        if (chats.toLowerCase() == 'status'){
        FxBot.sendMessage(from, `STATUS : ${public ? 'PUBLIC' : 'SELF'}`)
        }
        }
        if (!public){
    if (!mek.key.fromMe) return
  }
 
		if (isAutoSt && isMedia && isImage) {
		if (!mek.key.fromMe) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await FxBot.downloadAndSaveMediaMessage(encmedia)
            ran = '666.webp'
            await ffmpeg(`./${media}`)
           .input(media)
           .on('start', function (cmd) {
           console.log(`Started : ${cmd}`)
           })
          .on('error', function (err) {
          console.log(`Error : ${err}`)
          fs.unlinkSync(media)
          reply('error')
          })
          .on('end', function () {
           console.log('Finish')
           FxBot.sendMessage(from, fs.readFileSync(ran), MessageType.sticker, { thumbnail:ran, contextInfo: { externalAdReply:{title:'𝑭𝒆𝒍𝒊𝒙𝒄𝒓𝒂𝒄𝒌 𝑩𝒐𝒕 𝑶𝒇𝒄',body:'Felix Bot',previewType:"PHOTO",thumbnailUrl:'https://e.top4top.io/p_2067fvqbo0.jpg',sourceUrl:'https://chat.whatsapp.com/GvLYKa9QfITF1iUyQqZRD2'}}, quoted : mek })
           fs.unlinkSync(media)
           fs.unlinkSync(ran)
           })
           .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
           .toFormat('webp')
           .save(ran)
		}}
		if ((isAutoSt && isMedia && mek.message.videoMessage.fileLength < 10000000 || isVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
		if (!itsMe) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await FxBot.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            sticWait(from)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Falló, al convertir ${tipe} a stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            FxBot.sendMessage(from, fs.readFileSync(ran), MessageType.sticker, { thumbnail:ran, contextInfo: { externalAdReply:{title:'𝑭𝒆𝒍𝒊𝒙𝒄𝒓𝒂𝒄𝒌 𝑩𝒐𝒕 𝑶𝒇𝒄',body:'Felix Bot',previewType:"PHOTO",thumbnailUrl:'https://e.top4top.io/p_2067fvqbo0.jpg',sourceUrl:'https://chat.whatsapp.com/GvLYKa9QfITF1iUyQqZRD2'}}, quoted : mek })
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(300,iw)':min'(300,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
		        }}
			if (!isGroup && !isCmd) console.log(color(time, 'white'), color('[ PV ]', 'aqua'), color(budy, 'white'), 'DE', color(sender.split('@')[0], 'yellow'))
            if (isGroup && !isCmd) console.log(color([time], 'white'), color('[  GRUPO  ]', 'aqua'), color(budy, 'white'), 'DE', color(sender.split('@')[0], 'yellow'), 'in', color(groupName, 'white'))
            if (!isGroup && isCmd) console.log(color([time], 'white'), color('[ COMANDO ]', 'aqua'), color(budy, 'white'), 'DE', color(sender.split('@')[0], 'yellow'))
            if (isGroup && isCmd) console.log(color([time], 'white'), color('[ COMANDO ]', 'aqua'), color(budy, 'white'), 'DE', color(sender.split('@')[0], 'yellow'), 'in', color(groupName, 'white'))
            if (isCmd && isBanned) {
            return console.log(color('[ USUÁRIO BANEADO ] Ignorando comando', 'blue'), color(moment.tz('America/México').format('HH:mm:ss'), 'yellow'), color(`${command}`),'DE:', color(pushname))}
            if (mek.message.stickerMessage) {
            let stickerKey = mek.message.stickerMessage.fileSha256.toString('base64');
            if(stickerKey=="cuERL9nVYB/KgVLZBShunZcmmqeyXdIRpzldZwcEuCg="){
            if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					 
            await FxBot.groupRemove(mek.key.remoteJid, [mek.message.stickerMessage.contextInfo.participant])
        }
        }
        if (mek.message.stickerMessage) {
            let stickerKey = mek.message.stickerMessage.fileSha256.toString('base64');
            if(stickerKey=="G+f4o9Z/5iYsY/gCxFbYcG8K3BeImZYcPK7khx2QLg4="){
       if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					
            await FxBot.groupRemove(mek.key.remoteJid, [mek.message.stickerMessage.contextInfo.participant])
        }
        }

			let authorname = FxBot.contacts[from] != undefined ? FxBot.contacts[from].vname || FxBot.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			function addMetadata(packname, author) {	
				if (!packname) packname = 'WABot'; if (!author) author = 'BOT';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
			
			switch(command) {
			  
			
			      
         case '𝑀𝑒𝑛𝑢𝐴𝑙𝑙':
  case 'allmenu':
  case 'menu': 
        uwu = '```' 
        const chatsIds = await FxBot.chats.all()
                const timestamp = speed();
                var groups = FxBot.chats.array.filter(v => v.jid.endsWith('g.us'))
	            var privat = FxBot.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
                uptime = process.uptime()
                const totalchat = await FxBot.chats.all()
                const latensi = speed() - timestamp 
tescok = `
┌──▢     「 *BOT INFO* 」
│❍⃝⃘۪۪۪👤YourName : ${pushname}
│❍⃝⃘۪۪۪👑Creator : Felixcrack
│❍⃝⃘۪۪۪📨MyEmail : fxbotteam@gmail.com
│❍⃝⃘۪۪۪❔Prefix : 『 ${prefix} 』
│❍⃝⃘۪۪۪📌Online : _${kyun(uptime)}_
│❍⃝⃘۪۪۪⏱️Ping : _${latensi.toFixed(4)} _s_
│❍⃝⃘۪۪۪🔋Batería : ${baterai.battery}
│❍⃝⃘۪۪۪📣GroupChat : _${groups.length}_
│❍⃝⃘۪۪۪💬PrivateChat : _${privat.length}_
│❍⃝⃘۪۪۪⏳ChatTotal : _${totalchat.length}_
│❍⃝⃘۪۪۪🖥Platform : ${os.platform()}
└──▢  
┌──▢  「 *SEGURIDAD* 」
├ ${prefix}antienlace
├ ${prefix}antienlacemax 
├ ${prefix}antifake
├ ${prefix}autosticker
├ ${prefix}antitrava
└──▢  
┌──▢  「 *SIMPLE* 」
├ ${prefix}donar
├ ${prefix}ping
├ ${prefix}estado
└──▢  
┌──▢  「 *TAG's* 」
├ ${prefix}hidetag
├ ${prefix}imgtag
├ ${prefix}sticktag
├ ${prefix}contag
└──▢  
┌──▢  「 *DUEÑO* 」
├ ${prefix}self 
├ ${prefix}public
├ ${prefix}join
├ ${prefix}ban
├ ${prefix}unban
├ ${prefix}term
├ ${prefix}leave
└──▢  
┌──▢  「 *JUEGOS* 」
├ ${prefix}shipping 
├ ${prefix}random
├ ${prefix}casino
└──▢  
┌──▢  「 *ANIME* 」
├ ${prefix}wallpp
├ ${prefix}ppcouple
├ ${prefix}loli 
├ ${prefix}wallml 
├ ${prefix}waifu
├ ${prefix}neko
├ ${prefix}cosplay 
├ ${prefix}husbu
├ ${prefix}milf
└──▢  
┌──▢  「 *NSFW* 」
├ ${prefix}nsfw_loli
├ ${prefix}nsfw_neko
├ ${prefix}nsfw_waifu
├ ${prefix}blowjob
├ ${prefix}yuri
├ ${prefix}thighs
├ ${prefix}pussy
├ ${prefix}panties
├ ${prefix}neko
├ ${prefix}masturbation
├ ${prefix}hentai
├ ${prefix}glasses
├ ${prefix}gangbang
├ ${prefix}foot
├ ${prefix}fembom
├ ${prefix}ero
├ ${prefix}cum
├ ${prefix}cuckold
├ ${prefix}bdsm
├ ${prefix}ahegao
├ ${prefix}ass
└──▢  
┌──▢  「 *GRUPO* 」
├ ${prefix}linkgrupo
├ ${prefix}dm
├ ${prefix}pm
├ ${prefix}listonline
├ ${prefix}kick
├ ${prefix}grupo abrir/cerrar
├ ${prefix}tagall
└──▢  
┌──▢  「 *STICKERS* 」
├ ${prefix}s
├ ${prefix}toimg
├ ${prefix}attp
├ ${prefix}ttp
└──▢  
┌──▢  「 *DESCARGAS* 」
├ ${prefix}play
├ ${prefix}video
├ ${prefix}ytdl
├ ${prefix}ytsearch
├ ${prefix}ytmp4
├ ${prefix}ytmp3
├ ${prefix}igdl
├ ${prefix}spotify
├ ${prefix}emojidl
├ ${prefix}mediafire
├ ${prefix}nhentai
├ ${prefix}telesticker
├ ${prefix}gitclone
├ ${prefix}githubstalk
├ ${prefix}gimage
├ ${prefix}tiktokdl
├ ${prefix}cuttly
├ ${prefix}ssweb
└──▢`
Sendbutdocument(from, tescok, "_𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑜𝑡_", fs.readFileSync('./media/Fx.pdf'), {mimetype:Mimetype.pdf, thumbnail:fs.readFileSync('./media/ft_dcm.jpg'), filename:`Felixcrack.pdf`, pageCount: 9999999999 }, [{buttonId:`${prefix}rds`,buttonText:{displayText:'𝑅𝑒𝑑𝑒𝑠 𝑆𝑜𝑐𝑖𝑎𝑙𝑒𝑠'},type:1}], {quoted: ftoko, contextInfo: { mentionedJid: [], forwardingScore: 508, isForwarded: true, externalAdReply:{title:`𝐵𝑜𝑡 𝐷𝑒 𝑊ℎ𝑎𝑡𝑠𝐴𝑝𝑝 𝐵𝑦 𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘`,mediaType:"2",thumbnail:ofrply,mediaUrl:`https://youtu.be/Np08yVjpnWU`}}})
break

case 'donar':
case 'rds':
		FxBot.sendMessage(from, { text : `**𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑜𝑡 𝑂𝑓𝑐*

PayPal :
> 
fxbotteam@gmail.com

YouTube :
> https://youtube.com/c/Felixcrack409

Grupo de WhatsApp :
> https://chat.whatsapp.com/GvLYKa9QfITF1iUyQqZRD2

╶
Te agradecería si me donaras para seguir trabajando con versiones de FX - BOT y recuerda seguirme en YouTube &
GitHub : @⁨Fxmods`, matchedText: '-', description: "", title: "HAGA CLIC PARA SEGUIR", jpegThumbnail: ofrply }, 'extendedTextMessage', { detectLinks: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: ftoko})
		break

case 'gc':
FxBot.sendMessage(from, { text : `*𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑜𝑡 𝑂𝑓𝑐*\n\n> https://chat.whatsapp.com/E6UCJqYBUKBAQDLtU2CQyD`, matchedText: '-', description: "", title: "HAGA CLIC PARA SEGUIR", jpegThumbnail: ofrply }, 'extendedTextMessage', { detectLinks: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: ftoko})
break

//--- ATTP
case 'attp':
if (args.length < 1) return reply('▢ Ejemplo de uso : /attp Hola')
sticWait(from)
attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(body.slice(5))}`)
FxBot.sendMessage(from, attp2, sticker, {quoted: mek})
break

case 'ssweb':
teks = args.join(' ')
sticWait(from)
sendMediaURL(from, `https://hardianto.xyz/api/tools/ssweb?url=${teks}&apikey=hardianto`)
            break

case 'pinterest':
if (!q) return reply("")
pint = await pinterest (q)
FxBot.sendMessage(from, {url: `${pint[Math.floor(Math.random() * pint.length)]}`}, image, {quoted: mek, thumbnail: Buffer.alloc(0), caption: "𝐿𝑖𝑠𝑡𝑜, 𝑆𝑢𝑏𝑠𝑐𝑟𝑖𝑏𝑒𝑡𝑒 𝑎 𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘"})
break


case 'cuttly':
if (args.length === 0) return reply(`⬡ Acortar Enlaces\n\n¿Como usar?\n\nEjemplo : ${prefix}cuttly https://google.com`)
try {
teks = args.join(' ')
sticWait(from)
anu = await fetchJson(`https://hadi-api.herokuapp.com/api/cuttly?url=${teks}`)
FxBot.sendMessage (from, `▢ Resultado : ${anu.result}\n\n▢ Original : ${teks}`, MessageType.text, {quoted: ftoko, "forwardingScore": 9999, "isForwarded": true})
} catch(e) {
reply(`Ingrese el emlace correctamente, ejemplo : ${prefix}cuttly https://google.com`)
}
break

case 'top5': 
          if (!isGroup) return reply('▢ Comando solo disponible en grupos.')
          member = []
          top5 = args.join(' ')
          const p1 = groupMembers
          const p2 = groupMembers
          const p3 = groupMembers
          const p4 = groupMembers
          const p5 = groupMembers
          const o1 = p1[Math.floor(Math.random() * p1.length)]
          const o2 = p2[Math.floor(Math.random() * p2.length)]
          const o3 = p3[Math.floor(Math.random() * p3.length)]
          const o4 = p4[Math.floor(Math.random() * p4.length)]
          const o5 = p5[Math.floor(Math.random() * p5.length)]
          teks = `
*Atencion estos son los 5 elegidos*\n\n *Primer puesto para* @${o1.jid.split('@')[0]}\n\n*Segundo puesto para*@${o2.jid.split('@')[0]}\n\n*Tercer puesto para*@${o3.jid.split('@')[0]}\n\n*Cuarto puesto para* @${o4.jid.split('@')[0]}\n\n*Quinto puesto para* @${o5.jid.split('@')[0]}\n\n\n_Top 5 de_ *${top5}* en este grupo`
member.push(o1.jid)
member.push(o2.jid)
member.push(o3.jid)
member.push(o4.jid)
member.push(o5.jid)
mentions(teks, member, true)
break

case 'igdl': 
       case 'instagram':
       case 'instagramdownload':
              if (!q) return reply('¿En donde esta el enlace?')
              if (!q.includes('instagram')) return 
              sticWait(from)
              anu = await igDownloader(`${q}`)
             .then((data) => { sendMediaURL(from, data.result.link, data.result.desc, mek) })
             .catch((err) => { reply(String(err)) })
              break



case 'neko':   
ini_buffer = await getBuffer(`https://api.dapuhy.xyz/api/sfw/sfwneko?apikey=noapikey`)
buttons = [{buttonId: `${prefix}neko`,buttonText:{displayText: `𝖲𝖨𝖦𝖴𝖨𝖤𝖭𝖳𝖤 ⏩`},type:1}]
imageMsg = ( await FxBot.prepareMessage(from, ini_buffer, 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:'FX - BOT ⁴̅⁰͍⁴̵', imageMessage: imageMsg,
contentText:`Haz click en el boton para ver otra imagen.`,buttons,headerType:4}
prep = await FxBot.prepareMessageFromContent(from,{buttonsMessage},{quoted: txt1})
FxBot.relayWAMessage(prep)
break


case 'waifu':   
ini_buffer = await getBuffer(`https://apidhani.herokuapp.com/api/anime/waifu?apikey=NisaaCantik`)
buttons = [{buttonId: `${prefix}waifu`,buttonText:{displayText: `𝖲𝖨𝖦𝖴𝖨𝖤𝖭𝖳𝖤 ⏩`},type:1}]
imageMsg = ( await FxBot.prepareMessage(from, ini_buffer, 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:'FX - BOT ⁴̅⁰͍⁴̵', imageMessage: imageMsg,
contentText:`Haz click en el boton para ver otra imagen.`,buttons,headerType:4}
prep = await FxBot.prepareMessageFromContent(from,{buttonsMessage},{quoted: txt1})
FxBot.relayWAMessage(prep)
break

case 'loli':   
ini_buffer = await getBuffer(`https://apidhani.herokuapp.com/api/anime/loli?apikey=NisaaCantik`)
buttons = [{buttonId: `${prefix}loli`,buttonText:{displayText: `𝖲𝖨𝖦𝖴𝖨𝖤𝖭𝖳𝖤 ⏩`},type:1}]
imageMsg = ( await FxBot.prepareMessage(from, ini_buffer, 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:'FX - BOT ⁴̅⁰͍⁴̵', imageMessage: imageMsg,
contentText:`Haz click en el boton para ver otra imagen.`,buttons,headerType:4}
prep = await FxBot.prepareMessageFromContent(from,{buttonsMessage},{quoted: txt1})
FxBot.relayWAMessage(prep)
break

case 'nsfw_loli':   
ini_buffer = await getBuffer(`https://fx-rest.herokuapp.com/api/wallpaper/nsfwloli?apikey=APIKEY`)
buttons = [{buttonId: `${prefix}nsfw_loli`,buttonText:{displayText: `𝖲𝖨𝖦𝖴𝖨𝖤𝖭𝖳𝖤 ⏩`},type:1}]
imageMsg = ( await FxBot.prepareMessage(from, ini_buffer, 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:'FX - BOT ⁴̅⁰͍⁴̵', imageMessage: imageMsg,
contentText:`Haz click en el boton para ver otra imagen.`,buttons,headerType:4}
prep = await FxBot.prepareMessageFromContent(from,{buttonsMessage},{quoted: txt1})
FxBot.relayWAMessage(prep)
break




case 'nsfw_waifu':   
ini_buffer = await getBuffer(`https://api.waifu.pics/nsfw/waifu`)
buttons = [{buttonId: `${prefix}nsfw_waifu`,buttonText:{displayText: `𝖲𝖨𝖦𝖴𝖨𝖤𝖭𝖳𝖤 ⏩`},type:1}]
imageMsg = ( await FxBot.prepareMessage(from, ini_buffer, 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:'FX - BOT ⁴̅⁰͍⁴̵', imageMessage: imageMsg,
contentText:`Haz click en el boton para ver otra imagen.`,buttons,headerType:4}
prep = await FxBot.prepareMessageFromContent(from,{buttonsMessage},{quoted: txt1})
FxBot.relayWAMessage(prep)
break

case 'nsfw_neko':   
ini_buffer = await getBuffer(`https://api.waifu.pics/nsfw/neko`)
buttons = [{buttonId: `${prefix}nsfw_neko`,buttonText:{displayText: `𝖲𝖨𝖦𝖴𝖨𝖤𝖭𝖳𝖤 ⏩`},type:1}]
imageMsg = ( await FxBot.prepareMessage(from, ini_buffer, 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:'FX - BOT ⁴̅⁰͍⁴̵', imageMessage: imageMsg,
contentText:`Haz click en el boton para ver otra imagen.`,buttons,headerType:4}
prep = await FxBot.prepareMessageFromContent(from,{buttonsMessage},{quoted: txt1})
FxBot.relayWAMessage(prep)
break


case 'getneko':
ini_buffer = await getBuffer(`https://api.dapuhy.xyz/api/sfw/sfwneko?apikey=noapikey`)
FxBot.sendMessage(from, ini_buffer, image, { quoted: txt1})
break



       case 'husbu':
       case 'milf':
       case 'cosplay':
       case 'wallml':
              /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://FxBot-chan02.github.io`)
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
sticWait(from)
              let wiwi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wiwi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `𝖲𝖨𝖦𝖴𝖨𝖤𝖭𝖳𝖤 ⏩`},type:1}]
              imageMsg = ( await FxBot.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'FX - BOT ⁴̅⁰͍⁴̵', imageMessage: imageMsg,
              contentText:`Haz click en el boton para ver otra imagen.`,buttons,headerType:4}
              prep = await FxBot.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              FxBot.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break


case 'wallpapersearch':
case 'wallpp':

if (args.length === 0) return reply(`⬡ WALLPAPER\n\n¿Como usar?\n\nEjemplo : ${prefix}wallpapersearch Anime`)

search = args.join(' ')

buf = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper?apikey=RIFQIBOTZ&query=${search}`)

ft = buf.result

			
sendMediaURL(from, `${ft}`)
break

case 'blowjob':
case 'yuri':
case 'thighs':
case 'pussy':
case 'panties':
case 'neko':
case 'masturbation':
case 'hentai':
case 'glasses':
case 'gangbang':
case 'foot':
case 'fembom':
case 'ero':
case 'cum':
case 'cuckold':
case 'bdsm':
case 'ahegao':
case 'ass':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/nsfw/${command}?apikey=NisaaCantik`)
sticWait(from)
anu1 = await getBuffer(anu.result)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `𝖲𝖨𝖦𝖴𝖨𝖤𝖭𝖳𝖤 ⏩`},type:1}]
imageMsg = ( await FxBot.prepareMessage(from, anu1, 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:'FX - BOT ⁴̅⁰͍⁴̵', imageMessage: imageMsg,
contentText:`Haz click en el boton para ver otra imagen.`,buttons,headerType:4}
prep = await FxBot.prepareMessageFromContent(from,{buttonsMessage},{quoted: txt1})
FxBot.relayWAMessage(prep)
break
 
 case 'ppcouple':
            sticWait(from)
             anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=dappakntlll`)
             cewe = await getBuffer(anu.result.female)
              cowo = await getBuffer(anu.result.male)
              
              buttons = [{buttonId: `${prefix}ppcouple`,buttonText:{displayText: `𝖲𝖨𝖦𝖴𝖨𝖤𝖭𝖳𝖤 ⏩`},type:1}]
              
imageMsg = ( await FxBot.prepareMessage(from, cewe, 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
FxBot.sendMessage(from, cowo, image, {quoted: ftoko, caption: '𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑜𝑡 💘' })
buttonsMessage = {footerText:'FX - BOT ⁴̅⁰͍⁴̵', imageMessage: imageMsg,
contentText:`Haz click en el boton para ver otra imagen.`,buttons,headerType:4}
prep = await FxBot.prepareMessageFromContent(from,{buttonsMessage},{quoted: txt1})

FxBot.relayWAMessage(prep)
break
                
     case 'valentine':
case 'neon-light':
case 'ancient':
case 'colorLED':
case 'candyy':
case 'depsea':
case 'scifi':
case 'waterpipe':
case 'circuit':
case 'discovery':
case 'berrypop':
case '3dneon-light':
case 'embosed':
case 'skaleton':
case 'glitter':
case 'carbon':
case 'hororgif':
case 'newyear':
case 'greenhoror':
case 'magma':
case 'hallowen-text':
case 'neon-light':
case 'broken-glass':
case 'art-papper':
case 'glossy':
case 'water-color':
case 'multi-color':
case 'neon-devil':
case 'sky-text':
case 'luxury':
case 'writing':
case 'engraved':
case 'glue-text':
case 'holograpic':
case 'deluxe-silver':
case 'fabric':
case 'larva':
case 'wicker':
case 'toxic-bokeh':
case 'stroberi':
case 'koi':
case 'horor-blood':
case 'bread':
case 'ice':
case 'rusty':
case '3d-gradient':
case 'christmas':
case 'black-pink':
case 'drop-water':
case 'natural-leavest':
case '3dstone':
case 'harry-potter':
case '1917':
case 'thunder2':
case 'hallowen':
case 'joker-logo':
case 'blood':
case 'astone':
case 'grafity-text':
if (args.length === 0) return reply(`⬡ TEXT - PRO\n\n¿Como usar?\n\nEjemplo : ${prefix}blood Felixcrack`)
qs = args.join(' ')
ini_buffer = await getBuffer(`https://api.reysekha.xyz/api/textpro/${command}?text=${qs}&apikey=apirey`)
FxBot.sendMessage(from, ini_buffer, image, {quoted: mek, thumbnail: Buffer.alloc(0), caption: "𝐿𝑖𝑠𝑡𝑜, 𝑆𝑢𝑏𝑠𝑐𝑟𝑖𝑏𝑒𝑡𝑒 𝑎 𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘"})
break 
        
        
//--- Tag Random
case 'random':
  jds = []
					 jdii = groupMembers
					 diaa = jdii[Math.floor(Math.random() * jdii.length)]
					teks = `✅ El usuario elegido al azar es @${diaa.jid.split('@')[0]}`
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					break

//--- Casino
case 'slot':
		case 'casino':
            case 'slots': 
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            FxBot.sendMessage(from, `[  🎰 | CASINO ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n\n\nDescripción: Si obtienes 3 iguales significa que ganas\n\nEjemplo : 🍌 : 🍌 : 🍌<=====`, MessageType.text, { quoted: mek })
            break

case 'shipping':
					jds = []
					jdii = groupMembers
					koss = groupMembers
					akuu = jdii[Math.floor(Math.random() * jdii.length)]
				 diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `*La pareja del dia* 
					
●❯────────────────❮●
@${akuu.jid.split('@')[0]}
❤️
@${diaa.jid.split('@')[0]}
●❯────────────────❮●`
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					break	
case 'spotify':
if (args.length === 0) return reply(`⬡ SPOTIFY\n\n¿Como usar?\n\nEjemplo : ${prefix}spotify <link Spotify>`)
teks = args.join(' ')
sticWait(from)
anu = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=RIFQIBOTZ&url=${teks}`)
etv = await getBuffer(`${anu.result.thumbnail}`)
txtt =`*<DESCARGA SPOTIFY\>*

き⃟📝 Titulo : ${anu.result.title}
き⃟👁️ Artista : ${anu.result.artists}
き⃟📆 Duración : ${anu.result.duration}
き⃟👤 Popularidad : ${anu.result.popularity}
き⃟👥 ID : ${anu.result.id}

▢ Enviando archivo, espere por favor... `
buffer = await getBuffer(anu.result.thumbnail)
FxBot.sendMessage(from, buffer, image, {quoted: ftroli, caption: txtt})
lagu = await getBuffer(anu.result.link)
FxBot.sendMessage(from, lagu, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: false })
break



//---------- SISTEMA YTDL ------------//

case 'ytdl':
if (args.length === 0) return reply(`⬡ YTDL\n\n¿Como usar?\n\nEjemplo : ${prefix}ytdl Control NCS`)
teks = args.join(' ')
sticWait(from)
anu = await fetchJson(`https://hardianto.xyz/api/yt/playmp3?query=${teks}&apikey=hardianto`)
etv = await getBuffer(`${anu.thumb}`)
txtt =`*<DESCARGA YOUTUBE\>*

き⃟📝 Titulo : ${anu.title}
き⃟👁️ Vistas : ${anu.views}
き⃟📆 Subida : ${anu.published}
き⃟👥 Canal : ${anu.channel}`
 gbutsan = [
{buttonId: `${prefix}button_mp3 ${teks}`, buttonText: {displayText: '⎙ MP3'}, type: 1},
{buttonId: `${prefix}button_mp4 ${teks}`, buttonText: {displayText: '⎙ MP4'}, type: 1},
]
 imageMsg = (await FxBot.prepareMessageMedia(etv, 'imageMessage', {thumbnail: etv})).imageMessage              
buttonsMessage = {
contentText: `${txtt}`,
footerText: 'Seleccione su tipo de archivo.', imageMessage: imageMsg,
buttons: gbutsan,
headerType: 4
}
prep = await FxBot.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
FxBot.relayWAMessage(prep)
break

case 'button_mp3':
teks = args.join(' ')
anu = await fetchJson(`https://hardianto.xyz/api/yt/playmp3?query=${teks}&apikey=hardianto`)
lagu = await getBuffer(anu.url)
FxBot.sendMessage(from, lagu, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: false })
break

case 'button_mp4':
teks = args.join(' ')
anu = await fetchJson(`https://hardianto.xyz/api/yt/playmp4?query=${teks}&apikey=hardianto`)
lagu = await getBuffer(anu.url)
FxBot.sendMessage(from, lagu, video, { mimetype: 'video/mp4', quoted: mek })
break
     
case 'play':
if (args.length === 0) return reply(`⬡ Descargar Música\n\n¿Como usar?\n\nEjemplo : ${prefix}play Control NCS`)
yts = args.join(" ")
sticWait(from)
anu = await fetchJson(`https://fx-rest.herokuapp.com/api/yt/playmp3?query=${yts}&apikey=APIKEY`)
console.log(color(time, 'yellow'), color('▢ Iniciando Servidor YTA...'))
infomp3 = `                 「 *MÚSICA*  」
       
き⃟📝Titulo : ${anu.title}
き⃟👁️Vistas : ${anu.views}
き⃟📎Canal : ${anu.channel}
き⃟📆Subida : ${anu.published}

▢ Enviando archivo, espere por favor... `
buffer = await getBuffer(anu.thumb)
FxBot.sendMessage(from, buffer, image, {quoted: ftroli, caption: infomp3})
lagu = await getBuffer(anu.url)
FxBot.sendMessage(from, lagu, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: false })
break

case 'video':
if (args.length === 0) return reply(`⬡ Descargar Videos\n\n¿Como usar?\n\nEjemplo : ${prefix}video Control NCS`)
teks = args.join(' ')
sticWait(from)
anu = await fetchJson(`https://fx-rest.herokuapp.com/api/yt/playmp4?query=${teks}&apikey=APIKEY`)
console.log(color(time, 'yellow'), color('▢ Iniciando Servidor YTV...'))
infomp4 = `                「 *VIDEO*  」
       
き⃟📝Titulo : ${anu.title}
き⃟👁️Vistas : ${anu.views}
き⃟📎Canal : ${anu.channel}
き⃟📆Subida : ${anu.published}

▢ Enviando archivo, espere por favor... `
buffer = await getBuffer(anu.thumb)
FxBot.sendMessage(from, buffer, image, {quoted: ftroli, caption: infomp4})
lagu = await getBuffer(anu.url)
FxBot.sendMessage(from, lagu, video, { mimetype: 'video/mp4', quoted: mek })
break
  
case 'ytsearch':
if (!args.length) return reply('¿Que estas buscando?')
try {
sticWait(from)
const input = args.join(" ")
const filter1 = await ytsd.getFilters(input)
const filters1 = filter1.get('Type').get('Video')
const { items } = await ytsd(filters1.url, { limit: 10 })
let hehe = `┌ ◪ *BÚSQUEDA DE YOUTUBE*
└ *Consulta de busqueda:* ${input}\n\n`
for (let i = 0; i < items.length; i++) {
hehe += `───────────────\n
┌ ⬣ *Título:* ${items[i].title}
├ ⬣ *ID:* ${items[i].id}
├ ⬣ *Vistas:* ${items[i].views}
├ ⬣ *Duración:* ${items[i].duration}
└ ⬣ *Enlace:* ${items[i].url}\n\n`
}
thumb = await getBuffer(items[0].bestThumbnail.url)
await FxBot.sendMessage(from, thumb, image, {quoted: mek, caption: `${hehe}───────────────\n\n┌ ◪ *DOWNLOAD*
├ ${prefix}ytmp3 [link yt] = Audio
└ ${prefix}ytmp4 [link yt] = Video`})
} catch(e) {
reply('Didn\'t find anything or there is any error!')
reply(`Error: ${e.message}`)
}
break

case 'ytmp4':
if (args.length === 0) return reply(`⬡ Descargar Música\n\n¿Como usar?\n\nEjemplo : ${prefix}play Control NCS`)

yts = args.join(" ")
sticWait(from)
anu = await fetchJson(`https://fx-rest.herokuapp.com/api/download/ytmp4?url=${yts}&apikey=APIKEY`)
console.log(color(time, 'yellow'), color('▢ Iniciando Servidor YTA...'))
infomp3 = `                 「 *YTMP4*  」
       
き⃟📝Titulo : ${anu.result.title}
き⃟👁️Vistas : ${anu.result.views}
き⃟📎Canal : ${anu.result.channel}
き⃟📆Subida : ${anu.result.published}

▢ Enviando archivo, espere por favor... `
buffer = await getBuffer(anu.result.thumb)
FxBot.sendMessage(from, buffer, image, {quoted: ftroli, caption: infomp3})
lagu = await getBuffer(anu.result.url)
FxBot.sendMessage(from, lagu, video, { mimetype: 'video/mp4', quoted: mek, ptt: false })
break

case 'ytmp3':
if (args.length === 0) return reply(`⬡ Descargar Música\n\n¿Como usar?\n\nEjemplo : ${prefix}play Control NCS`)
yts = args.join(" ")
sticWait(from)
anu = await fetchJson(`https://fx-rest.herokuapp.com/api/yt/playmp3?query=${yts}&apikey=APIKEY`)
console.log(color(time, 'yellow'), color('▢ Iniciando Servidor YTA...'))
infomp3 = `                 「 *YTMP3*  」
       
き⃟📝Titulo : ${anu.title}
き⃟👁️Vistas : ${anu.views}
き⃟📎Canal : ${anu.channel}
き⃟📆Subida : ${anu.published}

▢ Enviando archivo, espere por favor... `
buffer = await getBuffer(anu.thumb)
FxBot.sendMessage(from, buffer, image, {quoted: ftroli, caption: infomp3})
lagu = await getBuffer(anu.url)
FxBot.sendMessage(from, lagu, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: false })
break

/// EMOJIDL

case 'emojidl':
try {
	
	if (args.length === 0) return reply(`*Ejemplo De Uso:*
1° ${prefix + command}emojidl 🌹`)
qes = args.join(' ')
FXX = {
buttonText: `⎙ SELECCIONAR`,
 
 description: `*_〝 Emoji A Sticker 〞_*

_Solo se permite un emoji._

*Ejemplo De Uso:*
1° ${prefix + command}emojidl 🌹

_Las Variantes Disponibles Son:_

°き⃟🔖 *apple*
°き⃟🔖 *google*
°き⃟🔖 *meksung*
°き⃟🔖 *whatsapp*
°き⃟🔖 *microsoft*
°き⃟🔖 *twitter*
°き⃟🔖 *facebook*
°き⃟🔖 *joypixels*
°き⃟🔖 *skype*
°き⃟🔖 *openmoji*
°き⃟🔖 *emojidex*
°き⃟🔖 *lg*
°き⃟🔖 *htc*

Seleccione una opción.`,
 sections: [
                     {
                      "title": `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑜𝑡 - ${jmn} - ${calender}`,
 rows: [
                          {
                              "title": "𝐴𝑝𝑝𝑙𝑒",
											"description": "",
											"rowId": `${prefix}apple ${qes}`
                          },
                          {
                              "title": "𝐺𝑜𝑜𝑔𝑙𝑒",
											"description": "",
											"rowId": `${prefix}google ${qes}`
                           },
                           {
                              "title": "𝑊ℎ𝑎𝑡𝑠𝑎𝑝𝑝",
											"description": "",
											"rowId": `${prefix}wa ${qes}`
                           }, 
                           {
                              "title": "𝑀𝑖𝑐𝑟𝑜𝑠𝑜𝑓𝑡",
											"description": "",
											"rowId": `${prefix}mc ${qes}`
                           }, 
                           {
                              "title": "𝑇𝑤𝑖𝑡𝑡𝑒𝑟",
											"description": "",
											"rowId": `${prefix}tw ${qes}`
                           }, 
                           {
                              "title": "𝐹𝑎𝑐𝑒𝑏𝑜𝑜𝑘",
											"description": "",
											"rowId": `${prefix}fb ${qes}`
                           }, 
                           {
                              "title": "𝐽𝑜𝑦𝑝𝑖𝑥𝑒𝑙𝑠",
											"description": "",
											"rowId": `${prefix}joy ${qes}`
                           }, 
                           {
                              "title": "𝐸𝑚𝑜𝑗𝑖𝑑𝑒𝑥",
											"description": "",
											"rowId": `${prefix}dex ${qes}`
                           }, 
                           {
                              "title": "𝐼𝑛𝑠𝑡𝑎𝑔𝑟𝑎𝑚",
											"description": "",
											"rowId": `${prefix}igg ${qes}`
                           }, 
                           {
                              "title": "𝐻𝑇𝐶",
											"description": "",
											"rowId": `${prefix}emoji_htc ${qes}`
                           }, 
                           {
                              "title": "𝑂𝑝𝑒𝑛𝐸𝑚𝑜𝑗𝑖",
											"description": "",
											"rowId": `${prefix}opp ${qes}`
                           }, 
                           {
                              "title": "𝐸𝑚𝑜𝑗𝑖 𝐷𝑇",
											"description": "",
											"rowId": `${prefix}emo3 ${qes}`
                           }, 
                           {
                              "title": "𝑆𝑘𝑦𝑝𝑒",
											"description": "",
											"rowId": `${prefix}skk ${qes}`
                           }, 
                           {
                              "title": "𝑆𝑎𝑚𝑠𝑢𝑛𝑔",
											"description": "",
											"rowId": `${prefix}mek ${qes}`
                           }
                        ]
                     }],
 listType: 1
}
} catch {
	reply('Ocurrió un error al convertir.')
	}

FxBot.sendMessage(from, FXX, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted: ftoko})
break  
					
						
case '𝐴𝑝𝑝𝑙𝑒':
case 'apple':
qes = args.join(' ')
emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[0].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})  		           
   break
   case '𝐺𝑜𝑜𝑔𝑙𝑒': 
   case 'google':
   qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[1].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})  		         
   break
case '𝑆𝑎𝑚𝑠𝑢𝑛𝑔':
case 'mek':
qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[2].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
   break
case '𝑀𝑖𝑐𝑟𝑜𝑠𝑜𝑓𝑡': 
case 'mc':
qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[3].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		
            break


case '𝑊ℎ𝑎𝑡𝑠𝑎𝑝𝑝':  
case 'wa':
qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		
            break

case '𝑇𝑤𝑖𝑡𝑡𝑒𝑟': 
case 'tw':
qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[5].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
					break       
					
case 'fb': 
qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[6].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
					break       
					

case '𝑆𝑘𝑦𝑝𝑒':
case 'skk':
qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[7].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		
            break
case '𝐽𝑜𝑦𝑝𝑖𝑥𝑒𝑙𝑠': 
case 'joy':
qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[8].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		
            break
case '𝑂𝑝𝑒𝑛𝑚𝑜𝑗𝑖': 
case 'opp':
qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[9].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		
            break
case '𝐸𝑚𝑜𝑗𝑖𝑑𝑒𝑥':
case 'dex':
qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[10].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		
            break
case '𝐸𝑚𝑜𝑗𝑖𝐷𝑇':
case 'emo3':
qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[11].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
            break 



case '𝐼𝑛𝑠𝑡𝑎𝑔𝑟𝑎𝑚': 
case 'igg':
qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[12].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			}) 
            break

case 'emoji_htc':
 
		
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[13].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			}) 
            break


                /////////////// TIKTOK-DL

case 'tiktokdl':

try {
	tk = args.join(' ')
	if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('▢ Enlace invalido.')
	if (args.length === 0) return reply(`*Ejemplo De Uso:* ${prefix + command} https://vm.tiktok.com/ZMLepEMdd/`)


FXX = {

buttonText: `⎙ SELECCIONAR`,

 
 description: `*_〝 Descargas de TikTok 〞_*

_Solo se permite un enlace._

*Ejemplo De Uso:*
1° ${prefix + command} https://vm.tiktok.com/ZMLepEMdd/

_Los Formatos Disponible Son:_

°き⃟🔖 *nowm*
°き⃟🔖 *original*
°き⃟🔖 *audio*

Seleccione una opción.`,
 sections: [
                     {
                      "title": `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑜𝑡`,
 rows: [
                          {
                              "title": "𝑁𝑜𝑊𝑚",
											"description": `\nVideo sin marca de agua.`,
											"rowId": `${prefix}tiktoknowm ${tk}`
                          },
                          { 
                              "title": "𝑂𝑟𝑖𝑔𝑖𝑛𝑎𝑙",
											"description": `\nVideo con marca de agua.`,
											"rowId": `${prefix}tiktokwm ${tk}`
                           }, 
                           {
                              "title": "𝐴𝑢𝑑𝑖𝑜",
											"description": `\nSolo audio  del video.`,
											"rowId": `${prefix}tiktokaudio ${tk}`
                           }
                        ]
                     }],
 listType: 1
}
} catch {
	reply('▢ Ocurrió un error.')
	}

FxBot.sendMessage(from, FXX, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted: ftoko})
 break

case 'tiktoknowm':   
if (args.length === 0) return reply(`*Ejemplo De Uso:* ${prefix + command} https://vm.tiktok.com/ZMLepEMdd/`)
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('▢ Enlace invalido.')
			 tk = args.join(' ')
			zee.Ttdownloader(tk)
			.then(result => {
				const { wm, nowm, audio } = result
				axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
				.then(async (a) => {
					me = `*Link* : ${a.data}`
					noweem = await getBuffer(nowm)
					FxBot.sendMessage(from,noweem , MessageType.video, {mimetype: 'video/mp4',quoted: mek})
					})
				}).catch((err) => reply('▢ Enlace invalido.'))
             break 
case 'tiktokwm':
if (args.length === 0) return reply(`*Ejemplo De Uso:* ${prefix + command} https://vm.tiktok.com/ZMLepEMdd/`)
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('▢ Enlace invalido.')
			 tk = args.join(' ')
			zee.Ttdownloader(tk)
			.then(result => {
				const { wm, nowm, audio } = result
				axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
				.then(async (a) => {
					me = `*Link* : ${a.data}`
					weem = await getBuffer(wm)
					FxBot.sendMessage(from,weem , MessageType.video, {mimetype: 'video/mp4',quoted: mek})
					})
				}).catch((err) => reply('▢ Enlace invalido.'))
			
             break 
             
case 'tiktokmusic': case 'tiktokaudio':  
if (args.length === 0) return reply(`*Ejemplo De Uso:* ${prefix + command} https://vm.tiktok.com/ZMLepEMdd/`)
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('▢ Enlace invalido.')
			tk = args.join(' ')
			zee.Ttdownloader(tk)
			.then(result => {
				const { wm, nowm, audio } = result
				axios.get(`https://tinyurl.com/api-create.php?url=${audio}`)
				.then(async (a) => {
					audnha = await getBuffer(audio)
					FxBot.sendMessage(from,audnha , MessageType.document, {mimetype: 'audio/mp4',filename: `Tiktok Music.mp3`,quoted: mek, ptt: false })
					})
				}).catch((err) => reply('▢ Enlace invalido.'))
			
             break

 


case 'telesticker': case 'tstiker': {
		if (args.length === 0) return reply(`*Ejemplo De Uso:* ${prefix + command} https://t.me/addstickers/Zoobabiesbz`)
			if (!q.includes('t.me')) return reply('▢ Enlace invalido.')
			var telestc = await zee.Telesticker(`${q}`)
			
			for (let i = 0; i < (telestc.length < 10 ? telestc.length : 10); i++) {
			FxBot.sendMessage(from, await getBuffer(telestc[i].url), sticker, {mimetype:'image/webp',quoted: mek})
			}
		}
		break

//********** SIMPLE**********//

case 'ping':
      case 'speed':
              timestampe = speed();
              latensie = speed() - timestampe
              reply(`「 *SPEED TEST* 」\nVelocidad de Respuesta : ${latensie.toFixed(4)} Seg 💬`)
              break
      case 'estado':
              case 'status':
case 'stats':
				var groups = FxBot.chats.array.filter(v => v.jid.endsWith('g.us'))
				var privat = FxBot.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
				var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
					uptime = process.uptime();
					const timestampu = speed();
					const totalChat = await FxBot.chats.all()
					const latensiw = speed() - timestampu
					var total = math(`${groups.length} ${privat.length}`)
					const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = FxBot.user.phone
					stamtus = `*BOT STATISTICS*
き⃟👥 Chat privados : ${privat.length}
き⃟👥 Chats de grupos : ${groups.length}
き⃟👥 Chat totales : ${totalChat.length}

き⃟⌛ Tiempo de ejecución : ${kyun(uptime)}
き⃟🔋 Batería : ${baterai.battery}
き⃟🔌 Charged : ${baterai.isCharge}
き⃟🐥 Modo : ${public ? 'public' : 'self'}
き⃟💡 Prefix : Multi Prefijo
き⃟📝 Uso de RAM : ${ram2}
き⃟🧠 Nombre de host : ${os.hostname()}
き⃟🥄 Plataforma : ${os.platform()}
き⃟⌛ Tiempo de actividad : ${kyun(os.uptime())}
き⃟🐣 MNC : ${mnc}
き⃟🐣 MCC : ${mcc}
き⃟📱 Device Model: ${FxBot.user.phone.device_model}
き⃟📱 Device Manufactur : ${device_manufacturer}
き⃟👥 Wa Version: ${FxBot.user.phone.wa_version}
き⃟👥 Os Version: ${FxBot.user.phone.os_version}

⍟ ────────────────── ⍟`
reply(stamtus)
break
case 'kick':
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return sticNoAdm(from)
          FxBot.sendMessage (from, 'El comando de eliminar miembros ah cambiado, en un momento se replya un sticker...\n\n¿Como usar?\n\nCon el sticker solo etiqueta el mensaje de la persona a eliminar...', MessageType.text, {quoted: txt1, "forwardingScore": 9999, "isForwarded": true})
          FxBot.sendMessage(from, fs.readFileSync(`./sticker/kick.webp`), sticker, {quoted: txt1, "forwardingScore": 9999, "isForwarded": true})
            break

case 'autosticker':   
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return sticNoAdm(from)
if (args.length < 1) return reply(`≡ _¿Cómo activar el Auto-Sticker?_\n\n┌─⊷ *AUTO-STICKER* ⊶\n├▢ 1 para activar\n├▢ 0 para desactivar\n└─────────────\n\n≡ Ejemplo :\n\n${prefix}autosticker 1`)
if (args[0] === '1') {                                                
	if (isAutoSt) return reply('Ya estaba activo 🙄')  
	autostick.push(from)             
	fs.writeFileSync('./src/autostik.json', JSON.stringify(autostick))      
	reply('▢ El Auto-Sticker se ah activado con éxito. ✔️')
	reply('▢ Ahora cada imagen que se envíe sera convertida automáticamente en sticker.')
} else if (args[0] === '0') {           
	var ini = autostick.indexOf(from)
	autostick.splice(ini, 1)                  
	fs.writeFileSync('./src/autostik.json', JSON.stringify(autostick))      
	reply('▢ El Auto-Sticker se ah desactivado con éxito. ✔️')
} else {                                
	reply(`≡ _¿Cómo activar el Auto-Sticker?_\n\n┌─⊷ *AUTO-STICKER* ⊶\n├▢ 1 para activar\n├▢ 0 para desactivar\n└─────────────\n\n≡ Ejemplo :\n\n${prefix}autosticker 1`) 
}                          
            break


case 'antilink':
case 'antienlace':
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return sticNoAdm(from)
if (args.length < 1) return reply(`≡ _¿Cómo activar el Anti-Enlace?_\n\n┌─⊷ *ANTI-ENLACE* ⊶\n├▢ 1 para activar\n├▢ 0 para desactivar\n└─────────────\n\n≡ Ejemplo :\n\n${prefix}antilink 1`)
if (args[0] === '1') {                             
						if (isAntiLink) return reply('Ya estaba activo 🙄')  
						antilink.push(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('▢ El Anti-Enlace se ah activado con éxito. ✔️')
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('Anti-Enlace desactivado.')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('▢ El Anti-Enlace se ah desactivado con éxito. ✔️')
					} else {
						reply(`≡ _¿Cómo activar el Anti-Enlace?_\n\n┌─⊷ *ANTI-ENLACE* ⊶\n├▢ 1 para activar\n├▢ 0 para desactivar\n└─────────────\n\n≡ Ejemplo :\n\n${prefix}antilink 1`)
					}
            break 
 

case 'grupo':
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroupAdmins) return sticNoAdm(from)
        
        txtt =`Hola ${pushname}\n\nSelecciona si quieres abrir o cerrar el grupo, recuerda que esa función solo es para los admins.\n\nSi no eres adm, no la uses por favor o seras eliminado del grupo...\nDepende del admin, Gracias.`

               gbutsan = [
  {buttonId: 'ABRIR GRUPO', buttonText: {displayText: 'ABRIR GRUPO'}, type: 1},
  {buttonId: 'CERRAR GRUPO', buttonText: {displayText: 'CERRAR GRUPO'}, type: 1},
]

               imageMsg = (await FxBot.prepareMessageMedia(fs.readFileSync(`./sticker/thumb.jpeg`), 'imageMessage', {thumbnail: fs.readFileSync(`./sticker/thumb.jpeg`)})).imageMessage

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: '© FxBot Team\nApoyame suscribiendote', imageMessage: imageMsg,
               buttons: gbutsan,
               headerType: 4
}

               prep = await FxBot.prepareMessageFromContent(from,{buttonsMessage},{quoted: txt1})
               FxBot.relayWAMessage(prep)
               FxBot.sendMessage (from, 'Si no te aparecen los botones...\n\nPrueba con los comandos :\n\n#opengc = Para abrir el grupo.\n\n#closegc = Para cerrar el grupo. ', MessageType.text, {quoted: txt1, "forwardingScore": 9999, "isForwarded": true})
               
            break







case 'viewto2':
		const viewary = []
		const untpar = JSON.stringify(mek.message[type].contextInfo.quotedMessage.viewOnceMessage.message)
		const popet = JSON.parse(untpar)
		 
		if (!mek.message[type].contextInfo.quotedMessage.viewOnceMessage) return reply("No es nesesario convertir.")
		const viewtype = Object.keys(popet)[0]
		viewary.push(JSON.parse(untpar))
		delete popet[viewtype].viewOnce
		const viewom = FxBot.prepareMessageFromContent(from, popet,{quoted: mek})
		await FxBot.relayWAMessage(viewom)
		break




//-- mencionar a todos los miembros
case 'mentionall': 
case 'tagall':
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return sticNoAdm(from)
					members_id = []
					 
		teks = `▢ Grupo : *${groupName}*\n▢ Miembros : *${groupMetadata.participants.length}*\n▢ Mensaje : ${q}\n┌───⊷ *MENCIONES* ⊶\n`
			for (let mem of groupMembers) {
				teks += `├╼ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
		teks += `└─────✪ FX ┃ ᴮᴼᵀ ✪───────`
			mentions(teks, members_id, true)
			break

         case 'antilinkmax':
         case 'antienlacemax':
         if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return sticNoAdm(from)
if (args.length < 1) return reply(`≡ _¿Cómo activar el Anti-Enlace?_\n\n┌─⊷ *ANTI-ENLACE-MAX* ⊶\n├▢ 1 para activar\n├▢ 0 para desactivar\n└─────────────\n\n≡ Ejemplo :\n\n${prefix}antilinkmax 1`)
if (args[0] === '1') {                             
						if (isAntiLinkMax) return reply('Ya estaba activo 🙄')  
						antilinkmax.push(from)
						fs.writeFileSync('./src/antilinkmax.json', JSON.stringify(antilinkmax))
						reply('▢ El Anti-Enlace-Max se ah activado con éxito. ✔️')
						reply('▢ El Anti-Enlace-Max elimina a cualquier miembro que mande un link.\nMientras tanto, el Anti-Enlace Normal, solo elimina a quien mande links de WhatsApp.')
					} else if (Number(args[0]) === 0) {
						if (!isAntiLinkMax) return reply('▢ El Anti-Enlace-Max se ah desactivado con éxito. ✔️')
						var ini = antilinkmax.indexOf(from)
						antilinkmax.splice(ini, 1)
						fs.writeFileSync('./src/antilinkmax.json', JSON.stringify(antilinkmax))
						reply('▢ El Anti-Enlace-Max se ah desactivado con éxito. ✔️')
					} else {
						reply(`≡ _¿Cómo activar el Anti-Enlace?_\n\n┌─⊷ *ANTI-ENLACE-MAX* ⊶\n├▢ 1 para activar\n├▢ 0 para desactivar\n└─────────────\n\n≡ Ejemplo :\n\n${prefix}antilinkmax 1`)
					}
					break

                 
					
					case 'antifake':
 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return sticNoAdm(from)
					if (args.length < 1) return reply(`≡ _¿Cómo activar el Anti-Fake?_\n\n┌─⊷ *ANTI-FAKE* ⊶\n├▢ 1 para activar\n├▢ 0 para desactivar\n└─────────────\n\n≡ Ejemplo :\n\n${prefix}antifake 1`) 
					if (Number(args[0]) === 1) {
						if (isAntiFake) return reply('Ya estaba activo 🙄')  
						antifake.push(from)
						fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
						reply('▢ El Anti-Fake se ah activado con éxito✔️')
						FxBot.sendMessage (from, '▢ El AntiFake elimina a los siguientes numeros\n\n+1\n+994\n+380\n+62\n+61\n+81\n+371...', MessageType.text, {quoted: txt1, "forwardingScore": 9999, "isForwarded": true})
						
						
						
						
						
					} else if (Number(args[0]) === 0) {
						antifake.splice(from, 1)
						fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
						reply('▢ El Anti-Fake se ah desactivado con éxito✔️')
					} else {
						reply(`≡ _¿Cómo activar el Anti-Fake?_\n\n┌─⊷ *ANTI-FAKE* ⊶\n├▢ 1 para activar\n├▢ 0 para desactivar\n└─────────────\n\n≡ Ejemplo :\n\n${prefix}antifake 1`) 
					}
					 
            break


          //descargar imgane 
          
          case 'ban':
if (!isGroup) return reply(mess.only.group)
if (!mek.key.fromMe) return reply('「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO POR MI')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./src/banned.json', JSON.stringify(ban))
susp = `🚫@${mentioned[0].split('@')[0]} ha sido prohibido y ya no podrá usar comandos de bot🚫`
mentions(`${susp}`, mentioned, true)   

            break

case 'unban':
if (!isGroup) return reply(mess.only.group)
if (!mek.key.fromMe) return reply('「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO POR MI')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./src/banned.json', JSON.stringify(ban))
susp = `❎@${mentioned[0].split('@')[0]} se ha desbloqueado y puede volver a utilizar los comandos del bot❎`
mentions(`${susp}`, mentioned, true)   
            break
   case 'image':
   case 'imagen':
   case 'img':
if (args.length < 1) return reply('¿Que deseas buscar')
            const gimg = args.join('');
            try {
            sticWait(from)
            
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            FxBot.sendMessage(from,{url:images},image,{quoted: mek, caption: `▢ Resultado relacionado con : *${gimg}*`})
            });
            
            } catch {
  	reply(mess.ferr)
  }
   break
			  
			  //********** SELF&PUBLIC **********//
			  case 'self':
			if (!mek.key.fromMe) return reply('▢ Lo siento, solamente yo puedo usar ese comando.')
			    public = false
			    FxBot.sendMessage(from, `\`\`\`Status : SELF\`\`\``, text,{quoted :froko})
			    break
			    
			  case 'public':
			if (!mek.key.fromMe) return reply('▢ Lo siento, solamente yo puedo usar ese comando.')
			    public = true
			    FxBot.sendMessage(from, `\`\`\`Status : PUBLIC\`\`\``, text,{quoted :ftoko})
			    break
			     
				
				case 'getpic':
				if (mek.message.extendedTextMessage != undefined){
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await FxBot.getProfilePicture(mentioned[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					thumb = await getBuffer(pic)
					FxBot.sendMessage(from, thumb, MessageType.image)
				{quoted : freply}}
				break
				
				  case 'entrar_al_grupo':
				case 'join':
                           if (!q) return reply('Ingrese al enlace de grupo.')
                           var codeInvite = body.slice(6).split('https://chat.whatsapp.com/')[1]
                           if (!codeInvite) return fakegroup ('¡Asegúrese de que el enlace sea correcto!')
                           var response = await FxBot.acceptInvite(codeInvite);
                           console.log(response);
                           break
  
                
                
                
                case 'creditos':
 FXX = {
 buttonText: '🇨 🇷 🇪 🇩 🇮 🇹 🇴 🇸 ',
 footerText: '*_© FxBot Team 🍡_*',
 description: `Creador, Y Colaboradores De FxBot.`,
 sections: [
                     {
                      "title": `X`,
 rows: [
                          {
                              "title": "Fᴇʟɪxᴄʀᴀᴄᴋ 409",
                              "description": '\nCreador de FxBot',
                              "rowId": "fxw2"
                           },
                           {
                              "title": "Kᴇᴠɪɴ",
                              "description": '\nAyuda en general',
                              "rowId": "Kv"
                           },
                           {
                              "title": "Aɪᴅᴇɴ",
                              "description": '\nHost = VPS',
                              "rowId": ""
                           },
                           {
                              "title": "Cʀɪsᴛʜɪᴀɴ | Dʀᴇᴀᴍs",
										"description": "Ayuda en general",
										               "rowId": ""
										},
										{
												"title": "MʜᴀɴᴋBᴀʀBAʀ | JS",
										"description": "Ejemplo de ayuda en el bot",
										"rowId": ""
                           },
         
                           {
                              "title": "Dʀᴀᴄᴋ",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
FxBot.sendMessage(from, FXX, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted: ftoko})
            break

case 'Dʀᴀᴄᴋ':
reply('a')
break

//--- ATTP
case 'attp':
if (args.length < 1) return reply('▢ Ejemplo de uso : /attp Hola')
attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(body.slice(5))}`)
FxBot.sendMessage(from, attp2, sticker, {quoted: mek})
break

              
				case 'i':
				reply ('a')
				break

				case 'blocklist':
				  case 'listblock':
					teks = 'This is list of blocked number :\n'
					for (let block of blocked) {
						teks += `┣❥  @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					FxBot.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
					 
 
					
					
                    
					
			           
			           case 'term': 
case 'exec':
const cmyd = body.slice(6)
var itsme = `0@s.whatsapp.net`
var split = `*EXECUTOR SELF BOT*`
const term = {
contextInfo: {
participant: itsme,
quotedMessage: {
extendedTextMessage: {
text: split,
}
}
}
}
exec(cmyd, (err, stdout) => {
if (err) return FxBot.sendMessage(from, ` ${err}`, text, { quoted: mek })
if (stdout) {
FxBot.sendMessage(from, stdout, text, term)
}
})
break
 

		
case 'test':
reshb = await FxBot.prepareMessageFromContent(from,{
"templateMessage": {
"hydratedFourRowTemplate": {
"hydratedContentText": "",
"hydratedFooterText": "",
"hydratedButtons": [
{
"urlButton": {
"displayText": "",
"url": ""
},
"index": 1
}
]
},
"hydratedTemplate": {
"hydratedContentText": `TEST #1`,
"hydratedFooterText": `TEST #2`,
"hydratedButtons": [
{
"urlButton": {
"displayText": `TEST #3 VIEW`,
"url": "#LINK"
},
"index": 0
}
]
}
}
}, {})
FxBot.relayWAMessage(reshb)
FxBot.sendMessage(from, { text: "Git Ofc del Creador:\nhttps://github.com/FxBot", matchedText: 'https://github.com/FxBot/NyanBot', description: "", title: "Click Aqui !!!", jpegThumbnail: fs.readFileSync('./media/reply.png') }, 'extendedTextMessage', { detectLinks: false, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek})
break
		
		

case 'nhentai':
try {
if (args.length === 0) return reply(`⬡ Descargar Hentai En Formato PDF\n\n¿Como usar?\n\nEjemplo : ${prefix}nhentai ID\n\nEjemplo : ${prefix}nhentai 2033`)
id =args.join(" ")
let anu = await fetchJson(`http://hadi-api.herokuapp.com/api/nhentai?id=2033`)
gt = anu.result
 
nh = `                「 *NHENTAI*  」
              

▢ Nombre : ${gt.name}     
▢ Tag's : ${gt.tag}
▢ Artista : ${gt.artist}
▢ Grupos : ${gt.groups}
▢ Paginas : ${gt.pages}
▢ Fecha de Carga : ${gt.uploaded}

▢ Información sobre el hentai : ${gt.name}.`

FxBot.sendMessage(from, {quoted: ftoko, caption: nh})
buffer = await getBuffer(`${gt.download_pdf}`)
FxBot.sendMessage(from, buffer, document, {quoted: mek, mimetype : 'application/pdf', filename: `ID Del Hentai PDF : ${id}`})
} catch {
reply(`*▢ No se encontró ningún resultado.`)
}
break

case 'nh':
try {
res = axios.get(`https://nekos.life/api/v2/img/blowjob`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
CryBaby.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break






    case 'igstalk':
case 'instagramstalk':
try {
			if (args.length === 0) return reply(`⬡ Búsqueda de Instagram\n\n¿Como usar?\n\nEjemplo : ${prefix + command} Nombre del usuario\n\nEjemplo : ${prefix + command} Fxmods`)
		busqueda = args.join(" ")
anu = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${busqueda}?apikey=DashBot`)
gt = anu.result
                if (anu.error) return reply(anu.error)
                github = `                「 *INSTAGRAM*  」
              

▢ Nombre Completo : ${gt.fullname}     
▢ Nombre De Usuario : ${gt.username}
▢ Siguiendo : ${gt.following}
▢ Seguidores : ${gt.followers}
▢ Posts : ${gt.posts}
▢ Bio : ${gt.bio}

▢ Información sobre el usuario ${gt.username}.`
buffer = await getBuffer(gt.photo_profile)
FxBot.sendMessage(from, buffer, image, {quoted: ftoko, caption: github})
} catch {
reply(`▢ Lo siento, no se encontró ningún usuario relacionado con ${busqueda}.`)
}
break 
         
         
         
		case 'githubstalk':
		try {
			if (args.length === 0) return reply(`⬡ Búsqueda de GitHub\n\n¿Como usar?\n\nEjemplo : ${prefix}githubstalk Nombre del usuario\n\nEjemplo : ${prefix}githubstalk Fxmods`)
		sh = args.join(" ")
		sticWait(from)
		 anu = await fetchJson(`http://hadi-api.herokuapp.com/api/githubstalk?username=${sh}`)

gt = anu.result
                if (anu.error) return reply(anu.error)
                github = `                「 *GITHUB*  」
              
▢ Bio : ${gt.bio}
▢ Compañía : ${gt.company}
▢ Correo : ${gt.email}
▢ Twitter : ${gt.twiter_username}
▢ Repositorios : ${gt.public_repo}     
▢ Siguiendo : ${gt.following}
▢ Seguidores : ${gt.follower} 
▢ Ubicación : ${gt.location} 
▢ Tipo : ${gt.Type} 

▢ Información sobre el usuario ${gt.company}.`
buffer = await getBuffer(gt.avatar)
FxBot.sendMessage(from, buffer, image, {quoted: ftoko, caption: github})
} catch {
reply(`▢ Lo siento, no se encontró ningún usuario relacionado con ${sh}.`)
}
break

case 'tts':
					if (args.length < 1) return FxBot.sendMessage(from, `¿Y el texto? Ejemplo : ${prefix}tts id Hola`, text, { quoted: mek })
				   const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return FxBot.sendMessage(from, `¿Y el texto? Ejemplo : ${prefix}tts id Hola`, text, { quoted: mek })
					var bby = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					bby.length > 1100
						? reply('No te voy a leer la biblia.')
						: gtts.save(ranm, bby, function () {
							exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
								fs.unlinkSync(ranm)
								buff = fs.readFileSync(rano)
								if (err) return reply(dla.stikga())
								FxBot.sendMessage(from, buff, audio, {duration: 999999, ptt: true, quoted: ftoko })
								fs.unlinkSync(rano)
							})
						})
					break



case 'gimage':
case 'googleimage':
if (args.length < 1) return reply('¿Que deseas buscar?')
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Error 404_')} 
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `*Imagen relacionada con :* ${teks}`})
}
}
break
case 'google':
case 'googlesearch':
case 'ggs':
if (args.length < 1) return reply('¿Qué deseas buscar?')
teks = args.join(' ')
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `*Título* : ${i.title}
*Enlace* : ${i.link}
*Descripción* : ${i.snippet}`
}
var fxgk = kant.trim()
reply(fxgk)
break


 



case 'gitclone':
if (!mek.key.fromMe) return reply('▢ Lo siento, solamente yo puedo usar ese comando.')
try {
if (args.length === 0) return reply(`⬡ Descargar Repositorios de GitHub\n\n¿Como usar?\n\nEjemplo : ${prefix}gitclone Usuario/Nombre del repositorio\n\nEjemplo : ${prefix}gitclone Fxmods/FX-SELF-BOT-v83.2`)
repo =args.join(" ")
if (!q.includes('/')) return reply('▢ ¡Formato incorrecto!')
let url = `https://api.github.com/repos/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
sticWait(from)         
 
buffer = await getBuffer(`${url}`)

FxBot.sendMessage(from, buffer, document, {quoted: mek, mimetype : 'application/zip', filename: `${filename}`})
 
} catch {
reply(`*▢ Ningún Repositorio Encontrado*

⬡ No se ah podido encontrar ningún repositorio con ese nombre.

⬡ Intenta escribir bien el nombre de usuario y el nombre del repositorio.

⬡ Recuerda que el repositorio tiene que estar en modo publico para poder descargarlo.

*Si crees que el nombre esta bien intentalo nuevamente :*
1. ${prefix + command} <Nombre De Usuario>/<Repositorio>
2. ${prefix + command} Fxmods/FX-SELF-BOT-v83.2`)
}
break      




 

case 'mediafire':
if (args.length < 1) return reply('¿Y el enlace?')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('▢ Enlace inválido.')
sticWait(from)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `
                     「 *MEDIAFIRE* 」

▢ Nombre : ${res[0].nama}
▢ Tamaño : ${res[0].size}
▢ Enlace : ${res[0].link}

▢ Espere un momento, enviando archivo.`
reply(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
break






                    
case 'replyimg':
                          if (!mek.key.fromMe) return reply('▢ Lo siento, solamente yo puedo usar ese comando.')
                          try {
            	if (args.length === 0) return reply(`⬡ reply Archivos Del Bot\n¿Como usar?\n\nEjemplo : ${prefix}replydoc Ruta del archivo\n\nEjemplo : ${prefix}replydoc lib/exif.js`)
            	name = args.join(" ")
                buffer = fs.readFileSync(`./${name}`)
                FxBot.sendMessage(from, buffer, document, {quoted: mek, mimetype : 'application/pdf', filename: `${name}`})
                } catch {
            	reply(`*▢ No se encontró ${name}\n\n▢ Comprueba si el nombre del archivo es correcto, o su ruta es la correcta.*`)
                }
                break
                          case 'replydoc':
                          if (!mek.key.fromMe) return reply('▢ Lo siento, solamente yo puedo usar ese comando.')
                          try {
            	if (args.length === 0) return reply(`⬡ reply Archivos Del Bot\n¿Como usar?\n\nEjemplo : ${prefix}replydoc Ruta del archivo\n\nEjemplo : ${prefix}replydoc lib/exif.js`)
            	name = args.join(" ")
                buffer = fs.readFileSync(`./${name}`)
                FxBot.sendMessage(from, buffer, document, {quoted: mek, mimetype : 'application/json', filename: `${name}`})
                } catch {
            	reply(`*▢ No se encontró ${name}\n\n▢ Comprueba si el nombre del archivo es correcto, o su ruta es la correcta.*`)
                }
                break
                        
			     case 'contag':
			if (!isGroup) return reply(mess.only.group)
        if (!isGroupAdmins) return sticNoAdm(from)
            var bv = body.slice(8)
					var jl = `${bv}`
					if (args[0] === '') {
					var jl = `*CONTACT TAG*`
					}
					var group = await FxBot.groupMetadata(from)
					   var member = group['participants']
					   var mem = []
					   member.map(async adm => {
					   mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					   })
					const vcardtag = 'BEGIN:VCARD\n'
					            + 'VERSION:3.0\n'
					            + `FN:${body.slice(8)}\n`
					            + 'ORG:Creator SELF BOT;\n'
					            + `TEL;type=CELL;type=VOICE;waid=${FxBot.user.jid.split('@')[0]}:${FxBot.user.jid.split('@')[0]}\n`
					            + 'END:VCARD'
            				FxBot.sendMessage(from, {displayname: mem, vcard: vcardtag}, MessageType.contact, { quoted: mek, contextInfo: {mentionedJid: mem}, quoted: {
					key: {
						participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
					},
					message: {
						"imageMessage": {
							"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
							"mimetype": "image/jpeg",
							"caption": jl,
							"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
							"fileLength": "28777",
							"height": 1080,
							"width": 1079,
							"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
							"fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
							"directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
							"mediaKeyTimestamp": "1610993486",
							"jpegThumbnail": fs.readFileSync('./media/FxBot.jpeg'),
							"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
							}
							}
							}
							})
        break
        
        
        
        case 'toimg':{
		if (!isQuotedSticker) return reply('▢ Responde a un sticker.')
					sticWait(from)
					encmediaa = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaa = await FxBot.downloadAndSaveMediaMessage(encmediaa)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${mediaa} ${ran}`, (err) => {
					fs.unlinkSync(mediaa)
					if (err) return reply('Eror')
					buffer = fs.readFileSync(ran)
					FxBot.sendMessage(from, buffer, image, {quoted: mek, thumbnail:Buffer.alloc(0), caption: '𝐿𝑖𝑠𝑡𝑜.'})
					fs.unlinkSync(ran)
					})
					}
					break   

case 'f':
case 'fig':
case 'gif':
case 'figura':
case 'figu':
case 'figurinha':
case 's':
case 'stiker':
case 'sticker':
case 'stickergif':
case 'stikergif':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
encmediat = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
mediat = await FxBot.downloadAndSaveMediaMessage(encmediat)
ron = getRandom('.webp')
exec(`ffmpeg -i ${mediat} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=15, crop=512:512" ${ron}`, (err) => {
fs.unlinkSync(mediat)
if (err) return reply(`${err}`)
exec(`webpmux -set exif ${addMetadata(`FX`)} ${ron} -o ${ron}`, async (error) => {
if (error) return reply(`${error}`)
FxBot.sendMessage(from, fs.readFileSync(ron), sticker, {quoted:mek})
fs.unlinkSync(ron)
})
})
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
mediat = await FxBot.downloadAndSaveMediaMessage(encmedia)
ron = getRandom('.webp')
exec(`ffmpeg -i ${mediat} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=15, crop=512:512" ${ron}`, (err) => {
fs.unlinkSync(mediat)
if (err) return reply(`${err}`)
exec(`webpmux -set exif ${addMetadata(`FX`)} ${ron} -o ${ron}`, async (error) => {
if (error) return reply(`${error}`)
FxBot.sendMessage(from, fs.readFileSync(ron), sticker, {quoted:mek})
fs.unlinkSync(ron)
})
})
} else {
reply(`¡Hola! *${pushname}* debes enviar una imagen o video con una duración inferior a 10 segundos.`)
}
break




case 'sinfondo':
if ((isMedia || isQuotedImage)) {
const encmedianb = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const median = await FxBot.downloadAndSaveMediaMessage(encmedianb)
sticWait(from)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
ranp = getRandom('.png')
await removeBackgroundFromImageFile({path: median, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
fs.unlinkSync(median)
let buffer = Buffer.from(res.base64img, 'base64')
FxBot.sendMessage(from, buffer, image, {quoted: txt1, caption: 'Fx Lol'})
fs.unlinkSync(buffer)
})
}
break



        case 'hidetag':
        if (!isGroup) return reply(mess.only.group)
        if (!isGroupAdmins) return sticNoAdm(from)
					if (!isGroup) return reply(mess.only.group)
					var value = body.slice(9)
					var group = await FxBot.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: freply
					}
					FxBot.sendMessage(from, options, text,{quoted : freply})
					break
					
					  
					
			           case 'sticktag':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return sticNoAdm(from)
                                        if (!isQuotedSticker) return reply('Ini sticker?')
                                        boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                                        delb = await FxBot.downloadMediaMessage(boij)
                                        await fs.writeFileSync(`stctagg.webp`, delb)
                                        var group = await FxBot.groupMetadata(from)
                                        var member = group['participants']
                                        var mem = []
                                        member.map(async adm => {
                                                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                                        })
					var itsme = `0@s.whatsapp.net`
					var split = `${body.slice(8)}`
					var selepbot = {
						contextInfo: {
							mentionedJid: mem,
                                                        participant: itsme,                                                                                                                          quotedMessage: {
                                                                extendedTextMessage: {
                                                                text: split,
							   }
					      	      }
					       }
					}
					result = fs.readFileSync(`stctagg.webp`)
                                        FxBot.sendMessage(from, result, sticker, selepbot)
					await fs.unlinkSync(`stctagg.webp`)
					break
					
					case 'imgtag':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return sticNoAdm(from)
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await FxBot.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await FxBot.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: freply
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        FxBot.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag image yang sudah dikirim`)
                    }
                    break
                    
                    case 'owner':
                 FxBot.sendMessage(from, {displayname: "jeff", vcard: vcard}, MessageType.contact, { quoted: freply})
                 FxBot.sendMessage(from, '▢ Este es el número de mi creador, no hagas spam.',text, { quoted: freply} )
                 break
 
        
    			  //********** ONLY GROUP **********//
        case 'linkgroup':
        case 'linkgrupo':
				case 'linkgrup':
				case 'linkgc':
				if (!isGroupAdmins) return sticNoAdm(from)
				    if (!isGroup) return reply(mess.only.group)
				    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				    linkgc = await FxBot.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink del grupo : *${groupName}*`
				    FxBot.sendMessage(from, yeh, text, {quoted: freply})
			        break
			        
        
					case 'hablen':
					if (!isGroupAdmins) return sticNoAdm(from)
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					 
						FxBot.groupsettingsChange(from, GroupsettingsChange.messageSend, false)
					
					break
case 'silencio':
if (!isGroupAdmins) return sticNoAdm(from)
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					 
						FxBot.groupsettingsChange(from, GroupsettingsChange.messageSend, true)
					
					break
 
					case 'demote':
			      case 'dm' : 
			if (!isGroupAdmins) return sticNoAdm(from)
			    if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Ordenes recibidas, ya no eres administrador :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						FxBot.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Demote : @${mentioned[0].split('@')[0]}`, mentioned, true)
						FxBot.groupDemoteAdmin(from, mentioned)
					}
					break
					
				case 'listadmins':
				case 'listadmin':
				case 'adminlist':
				case 'adminslist':
					if (!isGroup) return reply(mess.only.group)
					teks = `Admins del grupo : *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
					 
					case 'promote':
				case 'pm':
				if (!isGroupAdmins) return sticNoAdm(from)
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Ordenes recibidas, felicidades, ahora eres administrador :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						FxBot.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Promote : @${mentioned[0].split('@')[0]}`, mentioned, true)
						FxBot.groupMakeAdmin(from, mentioned)
					}
					break
					
					case 'welcome':

 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return sticNoAdm(from)
					if (args.length < 1) return reply(`≡ _¿Cómo activar la bienvenida?_\n\n┌─⊷ *BIENVENIDA* ⊶\n├▢ 1 para activar\n├▢ 0 para desactivar\n└─────────────\n\n≡ Ejemplo :\n\n${prefix}welcome 1`) 
					if (Number(args[0]) === 1) {
					if (isWelkom) return reply('Ya estaba activo 🙄')
				    welkom.push(from)
					fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
					reply('▢ La bienvenida se ah activado con éxito. ✔️')
					} else if (Number(args[0]) === 0) {
					welkom.splice(from, 1)
					fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
					reply('▢ La bienvenida se ah desactivado con éxito. ✔️')
					} else {
					reply(`≡ _¿Cómo activar la bienvenida?_\n\n┌─⊷ *BIENVENIDA* ⊶\n├▢ 1 para activar\n├▢ 0 para desactivar\n└─────────────\n\n≡ Ejemplo :\n\n${prefix}welcome 1`) 
					}
                     
            break
					 
					
			     
					
										case 'online':
										  case 'listonline':
										
                if (!isGroup) return reply(`▢ Comando solo disponible en grupos.`)
                let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                let online = [...Object.keys(FxBot.chats.get(ido).presences), FxBot.user.jid]
                FxBot.sendMessage(from, '▢ Usuarios en línea :\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
                    quoted: freply,
                    contextInfo: { mentionedJid: online }
                })
                break

 
 
 case 'takestick':
					case 'take':
						if (!isQuotedSticker) return reply(`▢ Menciona a un sticker con : *${prefix}takestick nombre|autor*`)
						ppp = `${args.join(' ')}`
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await FxBot.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
						const packname = ppp.split('|')[0]
						const author = ppp.split('|')[1]
						exif.create(packname, author, `takestick_${sender}`)
						exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
							if (error) return reply(mess.error.api)
							FxBot.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
							fs.unlinkSync(media)
							fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
						})
						break

      case 'leave': 
				    if (!mek.key.fromMe) return  
			    	anu = await FxBot.groupLeave(from, `Adios a todos los miembros de : *${groupMetadata.subject}*`, groupId)
	                break

 

				default:
           }
 
 if (budy.startsWith('$')){
                                        	if (!mek.key.fromMe) return
                            var konsol = budy.slice(2)
                        exec(konsol, (err, stdout) => {
                            if(err) return reply(`${err}`)
                                if (stdout) {
                                    reply(`${stdout}`)
                                    console.log('\x1b[1;37m>', '[', '\x1b[1;36mEVALL\x1b[1;37m', ']', time, color("$", "aqua"), 'from', color(senderme.split('@')[0]), 'args :', color(args.length))
                                }
                            })
                    } 
                    
                    
                    
                    
                    if (button == 'ABRIR GRUPO') {
console.log('ABRIR EL GRUPO')
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
FxBot.groupSettingChange (from, GroupSettingChange.messageSend, false)
}

	if (button == 'CERRAR GRUPO') {
console.log('CERRAR GRUPO')
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
FxBot.groupSettingChange (from, GroupSettingChange.messageSend, true)
}
                    
                    
                    
			if (mek.message.listResponseMessage){                                                                       
       test = mek.message.listResponseMessage.singleSelectReply.selectedRowId  
			if (test.includes(`𝐀𝐛𝐫𝐢𝐫 𝐞𝐥 𝐠𝐫𝐮𝐩𝐨`)){
				FxBot.groupSettingChange (from, GroupSettingChange.messageSend, false)
				}
			}
			
			if (mek.message.listResponseMessage){                                                                       
       test = mek.message.listResponseMessage.singleSelectReply.selectedRowId  
			if (test.includes(`𝐂𝐞𝐫𝐫𝐚𝐫 𝐞𝐥 𝐠𝐫𝐮𝐩𝐨`)){
				FxBot.groupSettingChange (from, GroupSettingChange.messageSend, true)
				}
			}
			
			
			
			
			
			
			
			
                    
                        if (budy.startsWith('>')){
                    	if (!mek.key.fromMe) return
                        
                            var konsol = budy.slice(2)
                            function _return(sul) {
                            var sat = JSON.stringify(sul, null, 2)
                            var bang = util.format(sat)
                            return reply(bang)
                        }
                        try {
                            reply(util.format(eval(`;(async () => { ${konsol} })()`)))
                            console.log('\x1b[1;37m>', '[', '\x1b[1;36mEVALL\x1b[1;37m', ']', time, color(">", "aqua"), 'from', color(senderme.split('@')[0]), 'args :', color(args.length))
                        } catch (e) {
                              err = String(e)
                                reply(err)
                            }
                        } else {
                            if (budy != undefined) {
                                //console.log('>', '[',color('INGFO','red'),']',`Message : ${budy} From`, color(senderme.split('@')[0]))
                            } 
                        }
                        
if (budy.startsWith('=>')){
if (!mek.key.fromMe) return
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
if (budy.startsWith('x')){
	if (!mek.key.fromMe) return
try {
return FxBot.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)

}  

if (isGroup && body != undefined) {
console.log(body)
}
}
} catch (e) {
const ee = String(e)
if (ee.includes('convert')){ 
return
}
if (ee.includes('this.isZero')){ 
return
}	
if (ee.includes('contextInfo')){ 
return
}	
if (ee.includes('owgi')){ 
return
}	
if (ee.includes('Cannot read property')){ 
return
}	
if (ee.includes('fileLength')){                           
return
}
if (ee.includes('jid')){                           
return
}
console.log('Error : %s', color(e, 'red'))
FxBot.sendMessage(`5219984646983@s.whatsapp.net`, `─────「 *ALERTA-ERROR* 」─────\n\n\`\`\`${e}\`\`\`\n\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Click aqui",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./media/FxBot.jpeg'),sourceUrl:"https://wa.me/5219984646983?text=Hola soy : \n\nTengo una duda/problema/error con el bot."}}})
}
})
}
starts()
