import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

const Reviews = () => {
    const [reviews, setReview] = useState([]);

    useEffect(() => {
        fetch('http://safe-mesa-82734.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReview(data));
    }, []);

    return (
        <Container>
            <h4 className='text-info'>Our valuable customer's product review: </h4>

                {
                    reviews.map(rv => <p key={rv._id}># {rv.review}</p>)
                }
            
        </Container>
    );
};

export default Reviews;