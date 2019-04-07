import React, { Component } from 'react';
import NavBar  from './NavBar';
import ContentContainer from './ContentContainer';
import SideBar from './SideBar';

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <h1>My first React Portfolio!</h1>
        <p>Welcome!</p>
        <div className="navbar-top">
          <NavBar />
        </div>        
        <div className="content-container">
          <ContentContainer />
        </div>
        <div className="sidebar">
          <SideBar />
        </div>        
      </div>
    );
  }
}

export default Portfolio;
