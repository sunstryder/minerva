const { WebClient } = require('@slack/client');

const token = 'xoxp-347208590853-347072588194-348027506368-71b3fc388ea337ca18ff94e54c320ddb';

const web = new WebClient(token);

const channelId= 'GAAF5DP3R';

web.chat.postMessage({
    channel: channelId,
    text: 'Hey there stranger'
}).then((res)=> {
    console.log('Message Sent: ', res.ts);
}).catch(console.error);