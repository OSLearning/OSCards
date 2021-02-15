/*
 * This router handles routes to localhost:3000/card
 */

const express = require('express');
const cardRouter = express.Router();
const cardController = require('../controllers/cardControllers');

// /card/ routes post requests to '/' to cardController
cardRouter.post('/', cardController.addCard, (req, res) => {
  res.status(200).send(res.locals.newCard);
});

// [ ] hypothesis ... don't need a colon with params ...
// /deck/[number]
cardRouter.get('/deck/:deckId', cardController.readDeckOfCards, (req, res) => {
  /*
    from axios: https://oscards/deck/1
    processed in express: req.params = {
      deckId: 1
    }
  */
  res.status(200).send(res.locals.data);
});

// cardRouter.get('/', cardController.readCard, (req, res) => {
//   res.status(200).send(res.locals.data);
// });

module.exports = cardRouter;