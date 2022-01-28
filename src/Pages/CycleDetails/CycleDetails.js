import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const CycleDetails = () => {
    const [details, setDetails] = useState([]);
    const { id } = useParams();
    const { user } = useAuth();

    useEffect(() => {
        fetch('http://safe-mesa-82734.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setDetails(data));
    }, []);

    const matchedItem = details.find(pd => pd._id === id);

    // react hook form validation and save necessary information for placing order:
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        fetch('http://safe-mesa-82734.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Order placed successfully!')
                }
            });

        reset();
    }

    return (
        <Container>
            <div className="text-center">
                <h3>About this Bi Cycle: </h3>
                <img src={matchedItem?.image} alt="" />
                <h5>Name: <span className='text-info'>{matchedItem?.name}</span> </h5>
                <p>Product ID: {id} </p>
                <h6>Price: <span className='text-warning'>${matchedItem?.price}</span> </h6>
            </div>
            <hr />
            <div>

                {/* Purchase Information */}
                <h3 className='text-center mb-3'>Necessary Information: </h3>
                <form
                    className="d-flex flex-column justify-content-center align-items-center"
                    onSubmit={handleSubmit(onSubmit)}>

                    <input className="w-50 mb-3 p-1" {...register("email")} defaultValue={user?.email} />

                    <input className="w-50 mb-3 p-1" type="number" {...register("phone", { required: true })} placeholder="Number" />

                    <textarea className="w-50 mb-3" {...register("address", { required: true })} placeholder="Address" />

                    <input className="w-50 mb-3 p-1" {...register("cycleName")} defaultValue={matchedItem?.name} />

                    <input className="w-50 mb-3 p-1" {...register("image")} defaultValue={matchedItem?.image} />

                    <input className="w-50 mb-3 p-1" type="number" {...register("price")} defaultValue={matchedItem?.price} />

                    <input className="w-50 btn btn-warning text-light mb-5" type="submit" />

                </form>
            </div>
        </Container>
    );
};

export default CycleDetails;