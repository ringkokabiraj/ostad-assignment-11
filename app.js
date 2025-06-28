// app.js
const express = require('express');
const app = express();
const version = process.env.VERSION || 'v2';

app.get('/', (req, res) => {
  res.send(`<h1>Web App - Version ${version}</h1>`);
});

app.listen(3000, () => console.log('App running on port 3000'));
