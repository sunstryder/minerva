require('newrelic');
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const { SPELLS, SKILLS, spellMapping, skillMapping, spellNotFound, skillNotFound } = require('./constants');
const { spellParser } = require('./spells');
const { skillParser } = require('./skills');
const { getQueryIndex, errorFormatter } = require('./utils')

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
    return res.send('Welcome to Minerva');
});

/*
        SPELLS YEEHAW

 */

app.post('/spells', async (req, res) => {
    // POST request for spells
    console.log("POST - /spells");
    console.log(`req: ${req.body.text}`);
    let spellIndex = getQueryIndex(req.body.text, spellMapping);
    if (spellIndex !== -1) {
        try {
            const response = await axios({
                method: 'get',
                url: SPELLS + spellIndex,
                responseEncoding: 'utf8',
                responseType: 'json'
            });
            let output = spellParser(response.data);
            return res.send(output);
        } catch (err) {
            console.log(`Error: failed to get spell response ${err}`);
        }
    }else {
        return res.send(errorFormatter(req.body.text, spellNotFound))
    }
});

/*
        SKILLS YOOO

 */
app.post('/skills', async (req, res) => {
    // POST request for skills
    console.log("POST - /skills");
    console.log(`req: ${req.body.text}`);
    let skillIndex = getQueryIndex(req.body.text, skillMapping);
    if (skillIndex !== -1) {
        try {
            const response = await axios({
                method: 'get',
                url: SKILLS + skillIndex,
                responseEncoding: 'utf8',
                responseType: 'json'
            });
            let output = skillParser(response.data);
            return res.send(output);
        } catch (err){
            console.log(`Error: failed to get skill response ${err}`);
        }
    } else {
        return res.send(errorFormatter(req.body.text, skillNotFound))
    }
});




app.listen(port, () => console.log('Minevera is running!'));