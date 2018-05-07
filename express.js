const express = require('express');
const axios = require('axios');

const { SPELLS } = require('./constants');
const spells = require('./spells');
// spells.getSpellIndex to grab the index

const app = express();
const port = process.env.PORT || 8080;

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
    return res.send('Welcome to Minerva');
});

app.post('/spells', async (req, res) => {
    // POST request for spells
    let spellIndex = spells.getSpellIndex(req.body.text);
    const response = await axios({
        method:'get',
        url: SPELLS+spellIndex,
        responseType:'json'
    });
    let spellData = response.data;
    console.log(spellData);
    let output = spellParser(spellData);
    return res.send(output);
});




app.listen(port, () => console.log('app.listen succeeded, Minevera is running'));