import React,{useEffect,useState} from 'react';
import './Header.css';
import {Navbar, Container,NavDropdown,Form,Nav,FormControl,Button} from 'react-bootstrap';
import {useSelector,useDispatch} from 'react-redux';
import {ADMIN_LOGOUT} from '../../constants/adminConstants';
import {Link} from 'react-router-dom';
import { logout } from '../../actions/adminActions';

const Header = () => {
    const dispatch = useDispatch();
    const adminLogin = useSelector(state=>state.adminLogin);
    const {adminInfo} = adminLogin;

    const logoutHandler = () =>{
        dispatch(logout());
    }
    return (
        <Navbar bg="light" variant="light" expand="lg" className="px-5">
        <Container className="px-0 py-3">
            
           
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    {adminInfo && adminInfo.isAdmin && (<NavDropdown title="Settings"      id="basic-nav-dropdown">
                        
                        <Link to="/admin">
                            <NavDropdown.Item href="#action/3.1">Admin Settings</NavDropdown.Item>
                        </Link>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="/" onClick={logoutHandler}>Log Out</NavDropdown.Item>
                    </NavDropdown>) }
                </Nav>
            </Navbar.Collapse>
        </Container>
       
    </Navbar>
    )
}

export default Header
