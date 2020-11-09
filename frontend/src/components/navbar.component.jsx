import React, { Component } from 'react'
import { Navbar,Button,Nav,Form,FormControl } from 'react-bootstrap';

class Navbarclass extends Component{
    render(){
        return(
            <div className="container">
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>
          </div>
    
        );
    }

}

export default Navbarclass