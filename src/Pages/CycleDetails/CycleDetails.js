import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const CycleDetails = () => {
    const { id } = useParams();
    const { user } = useAuth();
    console.log(user);

    return (
        <Container>
            <div className="text-center">
                <h3>About this Cycle:</h3>
                <h6>Name:  </h6>
                <p>Product ID: {id} </p>
                <h6>Price: </h6>
            </div>
            <hr />
            <div>
                <h3>About this User:</h3>
            </div>
        </Container>
    );
};

export default CycleDetails;