import React, { Component } from 'react';
import {Link} from 'react-router-dom' ;
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import Routes from './Routes'
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/" >Home</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem componentClass={Link} to="/signup" href="/signup">Sign up</NavItem>
              <NavItem componentClass={Link} to="/login" href="/login">Login</NavItem>
              <NavItem componentClass={Link} to="/tutorial" href="/tutorial">Tutorial</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default App;
