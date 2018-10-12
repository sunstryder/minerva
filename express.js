const express = require('express');
const axios = require('axios');

const { SPELLS, SKILLS } = require('./constants');
const spells = require('./spells');
const skills = require('./skills');

const app = express();
const port = process.env.PORT || 8080;

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
    return res.send('Welcome to Minerva');
});

// Keep the app awake on heroku by pinging it every 10 mins
setInterval(function() {
    axios.get("http://minerva5e.herokuapp.com");
}, 600000);

/*
        SPELLS YEEHAW

 */
app.post('/spells', async (req, res) => {
    // POST request for spells
    let spellIndex = spells.getSpellIndex(req.body.text);
    if (spellIndex === -1) {
        return res.send("Sorry child, I only know spells in the 5e SRD. ")
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

/*
        SKILLS YOOO

 */
app.post('/skills', async (req, res) => {
    // POST request for skills
    let skillIndex = skills.getSkillIndex(req.body.text);
    if (skillIndex === -1) {
        return res.send("Ohoho, I've never heard of this skill. Have you misspelt it? ")
    }else {
        const response = await axios({
            method: 'get',
            url: SKILLS + skillIndex,
            responseEncoding: 'utf8',
            responseType: 'json'
        });
        let output = skills.skillParser(response.data);
        return res.send(output);
    }
});




app.listen(port, () => console.log('Minevera is running!'));