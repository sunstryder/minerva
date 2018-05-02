const { RTMClient } = require('@slack/client');
require('dotenv').config();
const CONST = require('./constants');

const token = process.env.SLACK_BOT_TOKEN;
const rtm = new RTMClient(token);
const channel = process.env.DEV_CHANNEL;

rtm.start();

//Send a simple string message
rtm.sendMessage('This message is sent through the rtm starter.', channel)
    .then((res) => {
        console.log('message sent: ', res.ts)
    })
    .catch(console.error);
