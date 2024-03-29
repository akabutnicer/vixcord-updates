const express = require('express');
const path = require('path');
const app = express();
const options = [
  cors({
    origin: '*',
    methods: '*',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
];

app.use(options);

app.get('/updates', (req, res) => {
    res.json(JSON.parse(require('fs').readFileSync((path.join(process.cwd(), 'assets') + '/updates.json'), 'utf-8')));
});

app.listen(4000);

