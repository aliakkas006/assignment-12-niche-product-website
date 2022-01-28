import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../hooks/useAuth';
import AddProducts from '../AddProducts/AddProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrder from '../MyOrder/MyOrder';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();
    
    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col className='col-md-3 border-end border-2'>
                        {
                            admin ? (
                                <>
                                    <Link to={`${url}/manageAllOrder`}>
                                        Manage AllOrder 
                                    </Link>
                                    <br />
                                    <Link to={`${url}/addProduct`}>
                                        Add Product    
                                    </Link>
                                    <br />
                                    <Link to={`${url}/makeAdmin`}>
                                        Make Admin     
                                    </Link>
                                    <br />
                                    <Link to={`${url}/manageProducts`}>
                                        Manage Products     
                                    </Link>
                                </>
                            ) : (
                                    <>
                                        <Link to={`${url}/pay`}>
                                            Pay
                                        </Link>
                                        <br />
                                        <Link to={`${url}/myOrder`}>
                                            My Order
                                        </Link>
                                        <br />
                                        <Link to={`${url}/review`}>
                                            Review
                                        </Link>
                                        <br />
                                    </>
                            )
                        }
                        

                        
                        

                    </Col>

                    <Col className='col-md-9'>
                        <Switch>
                            <Route path={`${path}/pay`}>
                                <Pay />
                            </Route>
                            <Route path={`${path}/myOrder`}>
                                <MyOrder />
                            </Route>
                            <Route path={`${path}/review`}>
                                <Review />
                            </Route>

                            <Route path={`${path}/manageAllOrder`}>
                                <ManageAllOrder />
                            </Route>
                            <Route path={`${path}/addProduct`}>
                                <AddProducts />
                            </Route>
                            <Route path={`${path}/makeAdmin`}>
                                <MakeAdmin />
                            </Route>
                            <Route path={`${path}/manageProducts`}>
                                <ManageProducts />
                            </Route>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Dashboard;