import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { useCookies } from 'react-cookie';

import { NavLink } from 'react-router-dom'
import '../NavBar.css'
import {useHistory}from 'react-router-dom'

export default function Navbars() {
    // const [cookies, setCookie, removeCookie] = useCookies(['JWTtoken']);
    const history = useHistory();
    const logout=() =>{
        // removeCookie("JWTtoken", { path: '/' })
        // <Redirect to='LoginForm'
    }
    return (
        <div >
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <NavLink className='NavBarBrand' to="/">SCALAPLEX CINEMAS</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Nav>
                        <NavLink className='NavBarOpt' to="/loginForm">Log In</NavLink>
                        <NavLink className='NavBarOpt' eventKey={2} to="/UserForm">
                            Sign Up
                        </NavLink>
                        <Button variant="warning" onClick={logout()}>Log Out</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
