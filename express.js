const express = require('express');
const axios = require('axios');

const { SPELLS } = require('./constants');

const app = express();
const port = process.env.PORT || 8080;

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
    return res.send('Wassup');
});

app.post('/spells', async (req, res) => {
    // POST request for spells
    console.log(req.body);
    let output;
    const response = await axios({
        method:'get',
        url: SPELLS,
        responseType:'json'
    });
    output = response.data;
    return res.send(output);
});


app.listen(port, () => console.log('Example app listening on port 3000!'));