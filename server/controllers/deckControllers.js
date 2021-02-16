/*
 * This controller handles routes to localhost:3000/card
 * "Queries are Not Promises," from mongo docs: https://mongoosejs.com/docs/queries.html
 */

const CardModel = require('../models/card');

const deckController = {};

deckController.readDeckOfCards = (req, res, next) => {
  // deconstruct property required in mongoose/mongo model's find method from request.params
  const { deckId } = req.params;
  // declare constant using mongo db query
  const query = CardModel.find({ deckId });

  // create functional promise out of mongodb query
  const promise = query.exec();

  promise
    .then((data) => {
      res.locals.data = data;
      console.log(res.locals.data);
      next();
    })
    .catch(() => next(new Error('Error in readDeckOfCards read method')));
};

module.exports = deckController;
