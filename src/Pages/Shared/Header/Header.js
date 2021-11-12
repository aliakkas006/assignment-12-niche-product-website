import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
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

                    <Link to="/login">
                        <Button variant="warning">Log in</Button>
                    </Link>
                        
                </Container>
            </Navbar>
        </>
    );
};

export default Header;