import React from 'react';
import Carousel from "../Carousel";
import './index.css'; 
import ProductList from '../ProductList';

const Home = () => {

    return (
        <div>
            <Carousel/>
            <ProductList/>
        </div>
    )
}

export default Home;