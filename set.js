
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VUTY+jRhD9K1FfjXbANrZBGmkx2Bgbe7CxDTjKAUMDbT7d3WDjlX9AlEu0ySFR7lGUU5RLbnvIf0myueUnRMzs7Owh2Uw4FdWtqlfvvepXIMsRgTNYA/EVKDCqXAqbkNYFBCIYlkEAMWCA71IXiOA4LbkqM3Vnkw5m9k7SV7wmWxYrcMIwUtrjRFqMZzrxVdu7BVcGFOU+Qd5HChZSsMwmY1yMJN9t2fEQjozDlnenyBvjs3om4/PImR/UUba5BdemooswysJREcEUYjeZwdpwEX4e/HrIOepmiVrjpT2J9hd/T3snKMxvpHbFqnEVdJy2MzKmQaw9D34dkiG00gk7wcrUNueDXbKWidnyUFGN76I0ZweXbBXpvn16gE9QmEFf82FGEa2fzbujVYVuIdVCQ9OGtRpxs6BPK2OzD4pkldtcNm1tq44yYZ3nAUfjSMl280F12sy3sbdUUG91wLNDe0PUTqBoZpxDLujPupf5h8AN/OiV+P/wnuumsz22TUkPjW2rv9srwfHQXpW4t/VMYX/GxLC0jcV27Wfyvg1rne+ycVfwTbYzXvjWLHQcz+ShU+opiT3UU1SvP2ml5Am+S0v8MZSLtG15wiHIsa/FKxnJ7E47JMtVpwra+pjQ40iuzcVJd9x931rq6GyxHJJoq1rk6SRfnof7CaUzXkJLQ9htD5lpuXZ0ur2fKIa15gORuzIAwxARil2K8qzJ9TsMcP3KhB6G9J5d4GxpK5nqRhwPLvZ+eFLoMBtrB9wrETZKpb7kN7BzF+22RngLGFDg3IOEQH+CCM1xPYeEuCEkQPz0MwZk8EwfdGu6dTgGBAgTusnKIsld/1HUx0PX8/Iyo2adeXITQAxE9ikNKUVZSBoay8zFXoQqKEcuJUAM3ITA9wNCDH0gUlzC90sr537Du8LyY0PgVcCA9F4P5AMRcIOu0GX7gz7fFbmX5MWpKeoWxYsMUsCAzG3ugr9ef/Hz2zdv3r7+tok+efvlD7/99PUfX33/++ff/PndL01Ogb/+CBiQ3BcVOr0OO+h3231eEASRe9mkr++naZr7kLooIUAEsnZBRz5WRnM4aXtLVZVGoSSHEnia/tFFDzKtU22c2nNdSCulRcocw8mxdehvPbTQnNldNpNM07BaOc+xt/9QBIjACo8hXpy5SqJd/jgjKt/tRlNMNpeL7xztG2yfbRXRsYySkXCSFh0+DtZx3iPWQJXgDFmWfObPy6KVRfa6fYrUDPFSYzkG+LBCHvyw2QDuC7ooy7WQ2IdCgMF2yo/2c/YksW64LDcSyqJRVjq2zPW2hSKspDQt+6sN2+qiupJTtcB4iit7LbfT7igp8ro0H/19v1/Ju3cN3Vuv0bX5DRC8fybeKfgfOj/AbszIXpkPKrx7dv5ldYcbHg13yUW+2eHTDdaPs07Uq/IWZ2sHU5UPRR2O4gNXHe98H1yvnzGgSFwa5DgFIiDp3gUMwHnZWFvLgvwjnWRpo0nhw9CJS6j0tC5rlEJC3bQAItfnu73+oN3uPNwycF5MXBIBERhWzA8b69dSUZjUpY/LB6TmW5QEXP8GLRJgHJcHAAA=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "18494078754", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "false",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by prince-mdx", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "237677224245", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐓𝐄𝐂𝐇", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐃𝐗", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://raw.githubusercontent.com/Mayelprince/url/main/menun.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴍᴅx ",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Douala", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
