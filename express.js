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
    if (spellIndex === -1) {
        return res.send("Spell Does not exist. Perhaps you've misspelt it, it's an Ability, or I haven't learnt it yet :( ")
    }else {
        const response = await axios({
            method: 'get',
            url: SPELLS + spellIndex,
            responseEncoding: 'utf8',
            responseType: 'json'
        });
        let output = spells.spellParser(response.data);
        return res.send(output);
    }
});




app.listen(port, () => console.log('Minevera is running!'));