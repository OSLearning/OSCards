import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import "./Header.css";


class Header extends Component {
  render () {
    return (
      <div className='mainheader'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/home"><img  id='logo-OS' src="https://i.ibb.co/r3Sp3Ks/ADBD46-A8-C78-F-472-A-A0-B9-097065-E7-A34-D.png" alt="" width="20" height="27"/>OScards</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <Link className="nav-item" to='/home'>Home</Link>
                <div id='decks'>
                <Link className="nav-item" to='/decks'>Decks</Link>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )  
  }
}

export default Header;
