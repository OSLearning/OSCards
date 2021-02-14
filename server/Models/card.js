// require mongoose and desctructure Schema 
const mongoose = require('mongoose');
const { Schema } = mongoose; 

// create a constant card cardModel, which will be object
const cardSchema = new Schema ({
  // term -> options numbers or strings, object add type key and required key ... REQUIRED
  term: {
    type: [String, Number], 
    required: true
  }, 
  // definition -> options numbers or strings ... REQUIRED
  definition: {
    type: [String, Number], 
    required: true
  },
  // deck -> options numbers or strings ... REQUIRED
  deck: {
    type: [String, Number], 
    required: true
  }
});

// export the model that we make
module.export = mongoose.model('Card', cardSchema);