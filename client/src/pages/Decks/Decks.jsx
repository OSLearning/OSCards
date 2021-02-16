import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import "./Decks.css";
import axios from 'axios';


  // create a page to view all deck options, and create a get request to our DB
class Decks extends Component {
    render() {
      const arr = [1, 2, 3, 4, 5];
      const componentArr = [];
  // the loop below deals with inserting our chosen deck number to the associated router link
  // this placed "deckNumber" into this.props.location.state and sends it over to decks.
      for (let i = 0; i < arr.length; i += 1) {
        componentArr.push(
          <div key={i} className="card-body">
            <h5 className="card-title">Deck {arr[i]}</h5>
            <p className="card-text"></p>
            <Link to={{
                pathname: `/deck`,
                state: {
                  deckNumber: `${arr[i]}`
                }
              }} 
              className="btn btn-primary">Enter Deck</Link>
          </div>
        )
      }
  // Below, we return our created array of each of the decks with a link associated to the number they are trying to request
        return (
              <div>
                {componentArr};
              </div>  
        )
    }
}

export default Decks;
