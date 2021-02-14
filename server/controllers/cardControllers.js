const Card = require('../models/card.js');

const cardController = {};

cardController.addCard = ((req, res, next) => {
  // receive request access request.body and destructure model
  const { term, definition, deck } = req.body;
  // instantiate a new card document via the mongoose model
  // create ?
  Card.create({ term, definition, deck })
    .then((results) => {
      res.locals.newCard = results;
      return next();
    })
    .catch((err) => {
      
    })

});

module.exports = cardController;