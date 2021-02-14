const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardControllers');

// EVERYTHING HERE IS localhost:3000/card

// /card/ routes post requests to '/' to cardController
router.post('/', cardController.addCard, (req, res) => {
  res.status(200).send(res.locals.newCard);
});