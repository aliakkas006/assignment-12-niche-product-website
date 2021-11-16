import React, { useState } from 'react';
import { Container, Button, Spinner } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const LogIn = () => {
    const [logInData, setLogInData] = useState({});
    const { user, logInUser, isLoading, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...logInData };
        newLoginData[field] = value;
        setLogInData(newLoginData);
    }

    const handleLogInSubmit = e => {
        logInUser(logInData.email, logInData.password, location, history);
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

                    {isLoading && <Spinner animation="border" variant="warning" />}
                    {user?.email && <h4 text="success">Login successfully!</h4>}
                    {authError && <h5 text="danger">{authError}</h5>}
                </form>
            </div>
        </Container>
    );
};

export default LogIn;