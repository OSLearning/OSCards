import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import "./AddCard.css";
import axios from 'axios';

class AddCard extends Component {
  constructor(props) {
    super(props);
  // set our state to empty value to be updated in the forms rendered below
    this.state = {
        term: '',
        definition: '',
        deck: 0
    }
  // binding our functionality to 'this' to allow it to function within our component.
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleTerm = this.handleTerm.bind(this);
  this.handleDefinition = this.handleDefinition.bind(this);
  this.handleDeck = this.handleDeck.bind(this);
  }
  // handles updating our term state value with any input it receives. 
  handleTerm(event) {
    event.preventDefault();
    this.setState({term: event.target.value})
  // console.log(this.state.cardForm)
  }
  // handles updating our definition state value with any input it receives.
  handleDefinition(event) {
    event.preventDefault();
    this.setState({definition: event.target.value})
  }
  // handles updating our deck state value with any input it receives. 
  handleDeck(event) {
    console.log(event.target.value)
    event.preventDefault();
    this.setState({deck: event.target.value})
  }
  // handles our post request to our database taking the values currently saved in state
  handleSubmit() {
    let term = this.state.term
    let definition = this.state.definition
    let deckId = this.state.deck
    let obj = {
      deckId,
      definition,
      term
    }
    axios.post("/card", obj)
    .then((res) => {
      console.log("res: ", res);
    })
    .catch((err) => {
      console.log("err: ", err);
    })
  }

  // The render below deals with creating a form with a dropdown menu that has numbers associated to the decks available to the user.

  render () {
    let context = this;
    return (
      <div className='addcard'>
        {/* // card form h2 "CARD FORM" */}
        <h2 className="addcard">Create A New Flash Card</h2>
        <form className="cardform">
          <div  className="mb-3">
            <label htmlFor="formGroupExampleInput"  className="form-label">Term</label>
            <input type="text"  className="form-control" id="formGroupExampleInput" placeholder="YetiCrab" onChange={(e) => context.handleTerm(event)}/>
          </div>      
          <div  className="mb-3">
            <label htmlFor="formGroupExampleInput2"  className="form-label">Definition</label>
            <input type="text"  className="form-control" id="formGroupExampleInput2" placeholder="Kiwa hirsuta is a crustacean discovered in 2005 in the South Pacific Ocean. This decapod, which is approximately 15 cm long, is notable for the quantity of silky blond setae covering its pereiopods." onChange={(e) => context.handleDefinition(event)}/>
          </div>
          <select className="form-select" onChange={(e) => context.handleDeck(event)}>
            <option>Select Your Deck</option>
            <option defaultValue={1}>{1}</option>
            <option defaultValue={2}>{2}</option>
            <option defaultValue={3}>{3}</option>
            <option defaultValue={4}>{4}</option>
            <option defaultValue={4}>{5}</option>
          </select>
        </form>
        <div className="d-flex flex-row justify-content-center align-content-center mt-3">
          <button class="btn btn-primary" type="submit" onClick={context.handleSubmit}>+</button>
        </div>
      </div>
    )
  }
}

export default AddCard;
