import React from 'react';
import './Header.css';
import {Navbar, Container,NavDropdown,Form,Nav,FormControl,Button} from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar sticky="top" bg="light" variant="light" expand="lg" className="px-5">
        <Container className="px-0 py-3">
            
           
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#">Projects</Nav.Link>
                    <Nav.Link href="#">Contact</Nav.Link>
                   
                </Nav>
            </Navbar.Collapse>
        </Container>
       
    </Navbar>
    )
}

export default Header
