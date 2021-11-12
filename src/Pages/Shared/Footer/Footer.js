import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-dark text-white p-2">
            <Row>
                <Col>
                    <h5>Our Product:</h5>
                    <p>Zeus</p>
                    <p>Raven</p>
                    <p>Pegasus</p>
                </Col>
                <Col>
                    <h5>Contact Us:</h5>
                </Col>
                <Col>
                    <h5>Follow us on:</h5>
                </Col>
            </Row>
            <p className="text-center"><small>Copyright 2021</small></p>
        </div>
    );
};

export default Footer;