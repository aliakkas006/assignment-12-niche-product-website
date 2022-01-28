import React, { useState } from 'react';
import { Button, Container, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [logInData, setLogInData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
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
        registerUser(logInData.email, logInData.password, logInData.name);
        e.preventDefault();
    }

    return (
        <Container className="mt-5">
            <h4>Please Register</h4>
            <div>
                {
                    !isLoading && <form onSubmit={handleLogInSubmit}>
                    <input onBlur={handleOnBlur} name="name" placeholder="Enter your name" className='mt-2 w-50' />
                    <br />
                    <input onBlur={handleOnBlur} name="email" type="email" placeholder="Enter your email" className='mt-2 w-50' />
                    <br />
                    <input onBlur={handleOnBlur} name="password" type="password" placeholder="Password" className='mt-2 w-50' />
                    <br />
                    <input onBlur={handleOnBlur} name="password2" type="password" placeholder="Re-type your password" className='mt-2 w-50' />
                    <br />
                    <Button className="me-3 mt-3" type="submit" variant="info">Register</Button>
                    <NavLink to="/login">
                        Already registered? Please Login
                    </NavLink>
                    </form>
                }
                {isLoading && <Spinner animation="border" variant="warning" />}
                {user?.email && <div text="success">User Created successfully!</div>}
                {authError && <div text="warning">{authError}</div>}
            </div>
        </Container>
    );
};

export default Register;