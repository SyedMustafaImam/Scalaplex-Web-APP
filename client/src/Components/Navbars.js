import React, { useEffect, useState } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { useCookies } from 'react-cookie';
import NewsEvent from './newsEvent';

import { NavLink, Redirect } from 'react-router-dom'
import '../NavBar.css'

export default function Navbars() {
    const [cookies, setCookie, removeCookie] = useCookies(['JWTtoken']);
    const [isLogedOut, setisLogedOut] = useState(false)


    const checkLogIn = () => {
        if (!cookies.JWTtoken) {
            return (
                <>
                </>
            )
        }
        else {
            return (
                <>
                <NavLink className='NavBarOpt' to="/">Home</NavLink>
                <NavLink className='NavBarOpt' to="/Aboutus">About Us</NavLink>
                <NavLink className='NavBarOpt' to="/NewsEvent">News & Events</NavLink>
            <Button variant="warning" onClick={logout}>Log Out</Button>
           </>
            )
        }
    }

    const logout = () => {
        removeCookie("JWTtoken", { path: '/' })
        setisLogedOut(true)
        window.location.reload(false);
        return (<Redirect to='/LoginForm' />)

    }
    const IfLogedOut = () => {
        
            window.location.reload(false);
            setisLogedOut(true)
    }

    return (
        <div >
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <NavLink className='NavBarBrand' to="/">SCALAPLEX CINEMAS</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="mr-auto">
                       
              
                    </Nav>
                </Navbar.Collapse>
                {checkLogIn()}
            </Navbar>
            
        </div>
    )
}
