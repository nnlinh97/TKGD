import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as Actions from './../../actions/index';

class SecondArrivalsProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        const products = JSON.parse(localStorage.getItem('products')).reverse();
        let list = [];
        for (let i = 0; i < 5; i++) {
            list.push(products[i]);
        }
        this.setState({
            products: list
        })
    }
    addToCart = (product, e) => {
        e.preventDefault();
        this.props.addToCart(product);
    }
    getProduct = (id, e) => {
        e.preventDefault();
        this.props.history.push(`/products/${id}`)
    }
    render() {
        let { products } = this.state;
        let list = '';
        if (products.length > 0) {
            list = products.map((product, index) => {
                return (
                    <div className="owl-item active" style={{ width: 226, marginRight: 10 }}>
                        <div className="single-product">
                            {/* Product Image Start */}
                            <div className="pro-img">
                                <a  onClick={(e) => this.getProduct(product.id, e)} href="">
                                    <img className="primary-img" src={product.image} alt="single-product" />
                                    <img className="secondary-img" src={product.image} alt="single-product" />
                                </a>
                                <a href="#" className="quick_view" data-toggle="modal" data-target="#myModal" data-original-title="Quick View"><i className="lnr lnr-magnifier" /></a>
                            </div>
                            {/* Product Image End */}
                            {/* Product Content Start */}
                            <div className="pro-content">
                                <div className="pro-info">
                                    <h4><a href="product.html">{product.name}</a></h4>
                                    <p><span className="price">{product.salePrice} vnđ</span></p>
                                </div>
                                <div className="pro-actions">
                                    <div className="actions-primary">
                                        <a   onClick={(e) => this.addToCart(product, e)} href="" data-original-title="Add to Cart">+ Add To Cart</a>
                                    </div>
                                    <div className="actions-secondary">
                                        <a href="compare.html" data-original-title="Compare">
                                            <i className="lnr lnr-sync" />
                                            <span>Add To Compare</span></a>
                                    </div>
                                </div>
                            </div>
                            {/* Product Content End */}
                        </div>
                    </div>
                )
            })
        }
        return (
            <div className="second-arrivals-product pb-45 pb-sm-5">
                <div className="container">
                    <div className="main-product-tab-area">
                        <div className="tab-menu mb-25">
                            <div className="section-ttitle">
                                <h2>Best Seller</h2>
                            </div>
                            {/* Nav tabs */}
                            <ul className="nav tabs-area" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#electronics2">Electronics </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#beauty2">Beauty</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#electronics2">Sport/Outdoor</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#kids2">Living</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#beauty2">Food</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#kids2">Baby/Kids</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#fshion2">Fashion</a>
                                </li>
                            </ul>
                        </div>
                        {/* Tab Contetn Start */}
                        <div className="tab-content">
                            <div id="electronics2" className="tab-pane fade show active">
                                {/* Arrivals Product Activation Start Here */}
                                <div className="best-seller-pro-active owl-carousel owl-loaded owl-drag">
                                    <div className="owl-stage-outer">
                                        <div className="owl-stage" style={{ transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: 1888 }}>
                                            {list}
                                        </div>
                                    </div>
                                    <div className="owl-nav">
                                        <div className="owl-prev disabled">
                                            <i className="lnr lnr-arrow-left" />
                                        </div><div className="owl-next">
                                            <i className="lnr lnr-arrow-right" />
                                        </div>
                                    </div>
                                    <div className="owl-dots disabled" />
                                </div>
                                {/* Arrivals Product Activation End Here */}
                            </div>
                            {/* #electronics End Here */}
                        </div>
                        {/* Tab Content End */}
                    </div>
                    {/* main-product-tab-area*/}
                </div>
                {/* Container End */}
            </div>


        );
    }
}

// export default SecondArrivalsProduct;
const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        addToCart: (product) => dispatch(Actions.addToCart(product))
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SecondArrivalsProduct));