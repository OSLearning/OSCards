const express = require('express');
const cardRouter = express.Router();
const cardController = require('../controllers/cardControllers');

// [] xyz_review_flag: group devcision: do we want to keep in commented out console logs when we deploy to main branch?
// EVERYTHING HERE IS localhost:3000/card

// /card/ routes post requests to '/' to cardController
cardRouter.post('/', cardController.addCard, (req, res) => {
  res.status(200).send(res.locals.newCard);
});

module.exports = cardRouter;