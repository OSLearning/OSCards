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

// [] xyz!_review_flag: desired clarification: why are we using conditional logic to check of the production value of the process.env.NODE_ENV variable
if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the build folder on the route '/build'
  app.use('/build', express.static(path.join(__dirname, '../build')));
}

 // instantiate router(s) for data calls 
const cardRouter = require('./routes/cardRoutes.js');
// [] xyz_review_flag: group devcision: do we want to keep in commented out console logs when we deploy to main branch?
// console.log(cardRouter);
app.use('/card', cardRouter);

// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/src/index.html'));
});

// [] xyz_review_flag: group devcision: do we want to keep in commented out "other code"
// serve styles.css on the endpoint '/styles.css'
// app.get('/styles.css', (req, res) => {
//   // return res.status(200).sendFile(path.join(__dirname, '../client/styles.css'));
// });

// [] xyz_review_flag: group devcision: do we want to keep in style guide on on punction on comments
// 404 error.
app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

// [] xyz_review_flag: group devcision: should we try to have consistency between the use of single line and multi-line comments
/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Internal Server Error');
});