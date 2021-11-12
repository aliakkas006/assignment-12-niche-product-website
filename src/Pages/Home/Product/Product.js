
import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const {id, name, img, description, price} = product
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <h5>Price: ${price} </h5>
                    <Link to={`/details/${id}`}>
                        <Button variant="outline-dark">Buy Now!</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;