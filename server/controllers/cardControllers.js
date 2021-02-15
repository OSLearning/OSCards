/*
 * This controller handles routes to localhost:3000/card
 */

const CardModel = require('../models/card');

const cardController = {};

cardController.addCard = (req, res, next) => {
  // receive request access request.body and destructure model
  const { term, definition, deck } = req.body;
  // instantiate a new card document via the mongoose model
  CardModel.create({ term, definition, deck })
    // []xyz! --> .do we need / want an exec method || mongo returns "fake promosies  "
    /* from mongo docs: https://mongoosejs.com/docs/queries.html
    "Queries are Not Promises, 
    Mongoose queries are not promises. They have a .then() function for co and async/await as a convenience. However, unlike promises, calling a query's .then() can execute the query multiple times."
    */
    .then((results) => {
      res.locals.newCard = results;
      return next();
    })
    .catch((err) =>
      // []xyz! --> .catch((err) => new Error('Error in addCard create method'));
      next(err)
    );
};

// []xyz! --> b.e.t. review reqyuired
cardController.readCard = (req, res, next) => {
  // receive request access request.body and deconstruct model
  // []xyz! --> font end would need to create additional porperty of 'cardId' and/or backend would need to send to front in create method
  const { cardId } = req.body;

  // declare constant using mongo db query
  const query = CardModel.findById(cardId);

  // create functional promise out of mongodb query
  const promise = query.exec();

  promise
    .then((data) => {
      res.locals.data = data;
      console.log(res.locals.data);
      next();
    })
    .catch((err) =>
      // []xyz! --> .catch((err) => new Error('Error in addCard create method'));
      next(err)
    );
};

module.exports = cardController;
