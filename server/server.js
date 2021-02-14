const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

// pls handle body parser stuff

const PORT = 3000;

const mongoURI = `${process.env.MONGO_URI}`;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => {
    app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
  })
  .catch((err) => console.log(err));

console.log('process.env.MONGO_URI', mongoURI);

// parse urlencoded body content from incoming requests and place it in req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the build folder on the route '/build'
  app.use('/build', express.static(path.join(__dirname, '../build')));
}

// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/src/index.html'));
});

// serve styles.css on the endpoint '/styles.css'
// app.get('/styles.css', (req, res) => {
//   // return res.status(200).sendFile(path.join(__dirname, '../client/styles.css'));
// });

// 404 error.
app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Internal Server Error');
});