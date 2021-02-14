/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import AddCard from "./pages/AddCard";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <AddCard/>
      </div>
    )
  }
}

export default App;
