const CardModel = require('../models/card');

const cardController = {};

cardController.addCard = ((req, res, next) => {
  // receive request access request.body and destructure model
  const { term, definition, deck } = req.body;
  // instantiate a new card document via the mongoose model
  // console.log('LOOKHERE', CardModel)
  // console.log('LOOK AT REQ', term, definition, deck)
  CardModel
    .create({ term, definition, deck })
    .then((results) => {
      res.locals.newCard = results;
      return next();
    })
    .catch((err) => {
    })
});

module.exports = cardController;