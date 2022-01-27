import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className="text-info">Bi Cycle Shop</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink
                            className="text-2xl ms-5"
                            to="/home"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                        >
                            Home
                        </NavLink>

                        <NavLink
                            className="text-2xl ms-3"
                            to="/explore"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                        >
                            Explore
                        </NavLink>
                    </Nav>

                    {
                        user?.email ? (
                            <>
                                <Button onClick={logout} variant="warning" className='me-3'>Logout</Button>
                                <Link to="/dashboard">
                                    <Button variant="info">Dashboard</Button>
                                </Link>
                            </>
                        ) : (
                                <Link to="/login">
                                    <Button variant="warning">Login</Button>
                                </Link>
                        )
                    }
                        
                </Container>
            </Navbar>
        </>
    );
};

export default Header;