const express = require('express');
const app = express();

app.get('/updates', (req, res) => {
    res.json(JSON.parse(require('fs').readFileSync('./updates.json', 'utf-8')));
});


app.listen(4000);

