const express = require('express');
const path = require('path')
const db = require('../SQLdb/index.js');
const app = express();

app.use(express.static(path.join(__dirname, '..', 'client', 'public')));

() => db.initializeDb();

app.get('/fetchRequest', (req, res) => {
  res.send('This react-express-mysql app is up and running!');
})

app.listen(3000, console.log('Server listening to localhost:3000...'))
