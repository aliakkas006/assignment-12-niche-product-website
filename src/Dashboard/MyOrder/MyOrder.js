import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
    const [myOrder, setMyOrder] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);
    const { user } = useAuth();

    useEffect(() => {
        fetch('http://safe-mesa-82734.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setMyOrder(data));
    }, [isDeleted]);

    const filteredItem = myOrder.filter(od => od.email === user.email);

    // delete any order:
    const handleDeleteOrder = (id) => {
        fetch(`http://safe-mesa-82734.herokuapp.com/orders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data?.deletedCount) {
                    alert('Are you sure you want to Delete your order!');
                    setIsDeleted(true);
                }
            });
    }

    return (
        <Container className='mb-5'>
            <h2 className='text-success text-center mb-5'>Your Orders are: </h2>

            {
                filteredItem.map(order => <div key={order._id} className='border-bottom border-2 mb-5'>
                    <img className='w-25' src={order.image} alt="" />
                    <p>Cycle Name: <span className='text-info'>{order.cycleName}</span> </p>
                    <h4>Price: <span className='text-warning'>${order.price}</span></h4>
                    <Button
                        onClick={() => handleDeleteOrder(order._id)}
                        className="p-0" variant="danger">Delete Order!</Button>
                </div>)
            }
        </Container>
    );
};

export default MyOrder;