const express = require('express');
const axios = require('axios');

const { SPELLS } = require('./constants');

const app = express();

app.get('/spells', async (req, res) => {
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


app.listen(3000, () => console.log('Example app listening on port 3000!'));