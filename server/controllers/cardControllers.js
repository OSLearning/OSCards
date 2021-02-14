const CardModel = require('../models/card');

const cardController = {};

cardController.addCard = ((req, res, next) => {
  // receive request access request.body and destructure model
  const { term, definition, deck } = req.body;
  // instantiate a new card document via the mongoose model
  // [] xyz_review_flag: group devcision: do we want to keep in commented out console logs when we deploy to main branch?
  // console.log('LOOKHERE', CardModel)
  // console.log('LOOK AT REQ', term, definition, deck)
  CardModel
    .create({ term, definition, deck })
    .then((results) => {
      res.locals.newCard = results;
      return next();
    })
    // [] xyz!_review_flag: group decision: do we want to do anything with the error
    .catch((err) => {
    })
});

module.exports = cardController;