// required statement
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// invocation of dot env to access API keys
require('dotenv').config();

// creation of express instance 
const app = express();
const PORT = 3000;
const mongoURI = `${process.env.MONGO_URI}`;

// connect to instance of mongodb atlas
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => {
    app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
  })
  .catch((err) => console.log(err));

// parse urlencoded body content from incoming requests and place it in req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the dist folder on the route '/dist'
  app.use('/dist', express.static(path.join(__dirname, '../dist')));
}

// instantiate router(s) for data calls 
const cardRouter = require('./routes/cardRoutes.js');
app.use('/card', cardRouter);

// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/src/index.html'));
});

// 404 error
app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

// global error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Internal Server Error');
});