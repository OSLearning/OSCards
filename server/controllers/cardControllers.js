/**
 * This controller handles routes to localhost:3000/card
 */

const CardModel = require('../models/card');

const cardController = {};

cardController.addCard = ((req, res, next) => {
  // receive request access request.body and destructure model
  const { term, definition, deck } = req.body;
  // instantiate a new card document via the mongoose model
  CardModel
    .create({ term, definition, deck })
    .then((results) => {
      res.locals.newCard = results;
      return next();
    })
    .catch((err) => {
      return next(err);
    })
});

module.exports = cardController;