const express = require('express');
const cardRouter = express.Router();
const cardController = require('../controllers/cardControllers');

// EVERYTHING HERE IS localhost:3000/card

// /card/ routes post requests to '/' to cardController
cardRouter.post('/', cardController.addCard, (req, res) => {
  res.status(200).send(res.locals.newCard);
});

module.exports = cardRouter;