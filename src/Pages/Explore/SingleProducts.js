import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleProducts = ({product}) => {
    const { _id, name, image, description, price } = product
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <h5>Price: ${price} </h5>
                    <Link to={`/details/${_id}`}>
                        <Button variant="outline-dark">Buy Now!</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleProducts;