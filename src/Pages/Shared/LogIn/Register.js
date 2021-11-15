import React, { useState } from 'react';
import { Button, Container, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [logInData, setLogInData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...logInData };
        newLoginData[field] = value;
        setLogInData(newLoginData);
    }

    const handleLogInSubmit = e => {
        if (logInData.password !== logInData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(logInData.email, logInData.password);
        e.preventDefault();
    }

    return (
        <Container className="mt-5">
            <h4>Please Log in</h4>
            <div>
                {!isLoading && <form onSubmit={handleLogInSubmit}>
                    <input onChange={handleOnChange} name="email" type="email" placeholder="Enter your email" />
                    <br />
                    <input onChange={handleOnChange} name="password" type="password" placeholder="Password" />
                    <br />
                    <input onChange={handleOnChange} name="password2" type="password" placeholder="Re-type your password" />
                    <br />
                    <Button className="me-3" type="submit" variant="info">Register</Button>
                    <NavLink to="/login">
                        Already registered? Please Login
                    </NavLink>
                </form>}
                {isLoading && <Spinner animation="border" variant="warning" />}
                {user?.email && <div text="success">User Created successfully!</div>}
                {authError && <div text="warning">{authError}</div>}
            </div>
        </Container>
    );
};

export default Register;