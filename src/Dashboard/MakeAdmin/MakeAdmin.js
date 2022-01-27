import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => setEmail(e.target.value);

    const handleAdminSubmit = e => {
        const user = { email };

        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setEmail('');
                    setSuccess(true);
                }
            })
        
        e.preventDefault();
    }
        
        

    return (
        <div className='ms-5'>
            <h2>Make an Admin</h2>

            <form onSubmit={handleAdminSubmit }>
                <input
                    type="email"
                    name="email"
                    placeholder='Enter your email'
                    onBlur={handleOnBlur}
                />
                <br />
                <Button className="m-1" type="submit" variant="info">Make Admin</Button>
            </form>
            {
                success && <p className='text-warning'>Made Admin Successfully!</p>
            }
        </div>
    );
};

export default MakeAdmin;