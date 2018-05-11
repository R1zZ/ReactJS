import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar, NavItem} from 'react-bootstrap';
import '../css/Tutorial.css';

class Tutorial extends Component{
    render(){
        return(
            <div className="Tutorial container">
                <Navbar.Collapse>
                    <NavItem componentClass={Link} to="/helloworld" href="/helloworld" >Hello World</NavItem>
                    <NavItem componentClass={Link} to="/crud" href="/crud" >CRUD Sederhana</NavItem>
                    <NavItem componentClass={Link} to="/api" href="/crud" >pengoprasian API</NavItem>
                </Navbar.Collapse>
            </div>
        );
    }
}

export default Tutorial;