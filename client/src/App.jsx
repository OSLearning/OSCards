/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import AddCard from "./pages/AddCard";
import Decks from "./pages/Decks";
import Deck from "./pages/Deck";
import Auth from "./pages/Auth";


// Utilize react router to render component based on path
class App extends Component {
  render() {
    return (
        <Router>
          <div>
          <Route path='/home' component={Header}/>  
            <Route path='/decks' component={Header}/>  
            <Route path='/deck' component={Header}/>  
          <Switch>
            <Route exact path='/' component={Auth}/>  
            <Route exact path='/home' component={AddCard}/>
            <Route exact path='/decks' component={Decks}/>
            <Route exact path='/deck' component={Deck}/>
            <Route exact path='/auth' component={Auth}/>
          </Switch>
          </div>
        </Router>
    )}
}

export default App;
