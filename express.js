const express = require('express');
const axios = require('axios');

const { SPELLS } = require('./constants');

const app = express();

app.get('/', async (req, res) => {
    // GET request for spells
    let output;
    const response = await axios({
        method:'get',
        url: SPELLS,
        responseType:'json'
    });
    output = response.data;
    return res.send(output);
});


app.listen('https://minerva-dnd.herokuapp.com/', () => console.log('Example app listening on port 3000!'));