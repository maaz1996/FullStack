import React, { Component } from 'react'
import { Navbar,Button,Nav,Form,FormControl } from 'react-bootstrap';

class Navbarclass extends Component{
    render(){
        return(
            <div className="container">
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/ ">Covid Tracker</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/country">Countries Stats</Nav.Link>
              <Nav.Link href="/state">States Stats</Nav.Link>
            </Nav>
            
          </Navbar>
          </div>
    
        );
    }

}

export default Navbarclass