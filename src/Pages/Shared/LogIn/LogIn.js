import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';

const LogIn = () => {
    const [logInData, setLogInData] = useState({});
    // const { user, logInUser, isLoading } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...logInData };
        newLoginData[field] = value;
        setLogInData(newLoginData);
    }

    const handleLogInSubmit = e => {
        e.preventDefault();
    }

    return (
        <Container className="mt-5">
            <h4>Please Log in</h4>
            <div>
                <form onSubmit={handleLogInSubmit}>
                    <input onChange={handleOnChange} name="email" type="text" placeholder="Enter your email" />
                    <br />
                    <input onChange={handleOnChange} name="password" type="password" placeholder="Password" />
                    <br />
                    <Button className="me-3" type="submit" variant="info">Login</Button>
                    <NavLink to="/register">New user? Please Register</NavLink>
                </form>
            </div>
        </Container>
    );
};

export default LogIn;