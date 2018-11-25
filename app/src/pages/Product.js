import React, { Component } from 'react';
import Header from '../components/home/Header';
import Footer from '../components/home/Footer';
import ProductDetail from '../components/product/ProductDetail';

class Product extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header />
                <ProductDetail />
                <Footer />
            </div>
        );
    }
}

export default Product;