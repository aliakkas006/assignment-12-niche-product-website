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
                                        <h3>Manage AllOrder</h3>
                                    </Link>
                                    <Link to={`${url}/addProduct`}>
                                        <h3>Add Product</h3>
                                    </Link>
                                    <Link to={`${url}/makeAdmin`}>
                                        <h3>Make Admin</h3>
                                    </Link>
                                    <Link to={`${url}/manageProducts`}>
                                        <h3>Manage Products</h3>
                                    </Link>
                                </>
                            ) : (
                                    <>
                                        <Link to={`${url}/pay`}>
                                            <h3>Pay</h3>
                                        </Link>
                                        <Link to={`${url}/myOrder`}>
                                            <h3>My Order</h3>
                                        </Link>
                                        <Link to={`${url}/review`}>
                                            <h3>Review</h3>
                                        </Link>
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