import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import {Container} from 'react-bootstrap';

const LogIn = () => {
    const [logInData, setLogInData] = useState({});

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        setLogInData(data);

        reset();
    }
    console.log(logInData);

    return (
        <Container className="mt-5">
            <h4>Please Log in</h4>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="mb-2" {...register("email")} placeholder="Enter your email" />
                    <br />
                    <input className="mb-1"{...register("password")} placeholder="Password" />
                    <br />
                    <input className="btn-info" type="submit" />
                </form>
            </div>
        </Container>
    );
};

export default LogIn;