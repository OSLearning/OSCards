/*
 * This controller handles routes to localhost:3000/card
 * 
 * "Queries are Not Promises," from mongo docs: https://mongoosejs.com/docs/queries.html
 */

const CardModel = require('../models/card');

const cardController = {};

cardController.addCard = (req, res, next) => {
  // receive request access request.body and destructure model
  const { term, definition, deckId } = req.body;
  // instantiate a new card document via the mongoose model
  CardModel.create({ term, definition, deckId })
    .then((results) => {
      res.locals.newCard = results;
      return next();
    })
    .catch(() => next(new Error('Error in addCard create method')));
};

cardController.readDeckOfCards = (req, res, next) => {
  // const { deckId } = req.params; // deckId = '1' (string type)
  /*
    req.params = {
      deckId: 1
    }
  */
  const { deckId } = req.params; // deckId = '1' (string type)
  console.log(deckId); // 1
  // declare constant using mongo db query
  const query = CardModel.find({deckId});

  // create functional promise out of mongodb query
  const promise = query.exec();

  promise
    .then((data) => {
      res.locals.data = data;
      console.log(res.locals.data);
      next();
    })
    .catch(() => next(new Error('Error in readCard read method')));
};

// cardController.readCard = (req, res, next) => {
//   // receive request access request.params and deconstruct model
//   const { cardId } = req.params;

//   // declare constant using mongo db query
//   const query = CardModel.findById(cardId);

//   // create functional promise out of mongodb query
//   const promise = query.exec();

//   promise
//     .then((data) => {
//       res.locals.data = data;
//       console.log(res.locals.data);
//       next();
//     })
//     .catch(() => next(new Error('Error in readCard read method')));
// };

module.exports = cardController;
