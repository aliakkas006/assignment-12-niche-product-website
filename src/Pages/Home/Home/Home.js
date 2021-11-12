import React from 'react';
import Banner from '../Banner/Banner';
import CycleDiscount from '../CycleDiscount/CycleDiscount';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <>
            <Banner />
            <Products />
            <CycleDiscount />
            <Reviews />
        </>
    );
};

export default Home;