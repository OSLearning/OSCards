import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import "./Header.css";

class Header extends Component {
  render () {
    return (
<div className='mainheader'>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">OScards</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id='button-padding'>
                    <button className="btn btn-outline-success" type="submit">Login</button>
                    <button className="btn btn-outline-success" type="submit">Sign-Up</button>
                </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Decks</a></li>
                </ul>

        </div>
    </div>
</nav>
</div>
    )  
  }
}

export default Header;
