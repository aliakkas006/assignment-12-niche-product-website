import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const Review = () => {
    const [review, setReview] = useState('');

    const handleOnBlur = e => setReview(e.target.value);

    const handleReviewSubmit = e => {
        const productReview = { review };

        fetch('http://safe-mesa-82734.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Thanks for your valuable review!');
                    setReview('');
                }
            });
        e.preventDefault();
    }
    
    return (
        <div className='text-center'>
            <h2 className='text-info mb-5'>Please provide your review here:</h2>

            <form onSubmit={handleReviewSubmit}>
                <textarea onBlur={handleOnBlur} name="review" placeholder='Enter your review' className='w-50' />
                <br />
                <Button className="me-3 mt-3" type="submit" variant="info">Review Now!</Button>
            </form>
        </div>
    );
};

export default Review;