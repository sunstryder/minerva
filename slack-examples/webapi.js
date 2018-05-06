const { WebClient } = require('@slack/client');

require('dotenv').config();
const web = new WebClient(process.env.SLACK_TOKEN);


web.chat.postMessage({
    channel: process.env.DEV_CHANNEL,
    text: 'Hey there stranger'
}).then((res)=> {
    console.log('Message Sent: ', res.ts);
}).catch(console.error);