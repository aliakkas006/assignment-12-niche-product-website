import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-dark text-white p-2">
            <Container>
                <Row>
                    <Col className='text-info'>
                        <h5>Our Product:</h5>
                        <p>Zeus</p>
                        <p>Raven</p>
                        <p>Pegasus</p>
                    </Col>

                    <Col className='text-warning'>
                        <h5>Contact Us:</h5>
                        <p>By email: ali@gmail.com</p>
                        <p>Number: +880172734652</p>
                    </Col>
                    <Col>
                        <h5 className='text-secondary'>Follow us on:</h5>
                        <h5 className="text-danger">
                            <i className="fab fa-facebook me-3"></i>
                            <i className="fab fa-instagram me-3"></i>
                            <i className="fab fa-twitter me-3"></i>
                            <i className="fab fa-youtube me-3"></i>
                        </h5>
                    </Col>
                </Row>
                <p className="text-center"><small>Copyright <span><i class="far fa-copyright"></i></span> 2021</small></p>
            </Container>
        </div>
    );
};

export default Footer;