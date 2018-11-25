import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as Actions from './../../actions/index';


class LikeProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        const products = JSON.parse(localStorage.getItem('products'));
        let temp = [];
        for (let i = 0; i < 10; i++) {
            if (i % 2 == 0) {
                let item = [products[i], products[i + 1]];
                temp.push(item);
            }
        }
        this.setState({
            products: temp
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
                        <div className="double-product">
                            {/* Single Product Start */}
                            <div className="single-product">
                                {/* Product Image Start */}
                                <div className="pro-img">
                                    <a  onClick={(e) => this.getProduct(product[0].id, e)} href="">
                                        <img className="primary-img" src={product[0].image} alt="single-product" />
                                        <img className="secondary-img" src={product[0].image} alt="single-product" />
                                    </a>
                                    <a href="#" className="quick_view" data-toggle="modal" data-target="#myModal" data-original-title="Quick View"><i className="lnr lnr-magnifier" /></a>
                                </div>
                                {/* Product Image End */}
                                {/* Product Content Start */}
                                <div className="pro-content">
                                    <div className="pro-info">
                                        <h4><a  href="">{product[0].name}</a></h4>
                                        <p><span className="price">{product[0].salePrice} vnđ</span><del className="prev-price">{product[0].price} vnđ</del></p>
                                        <div className="label-product l_sale">{product[0].sale}<span className="symbol-percent">%</span></div>
                                    </div>
                                    <div className="pro-actions">
                                        <div className="actions-primary">
                                            <a  onClick={(e) => this.addToCart(product[0], e)} href="" title data-original-title="Add to Cart">+ Add To Cart</a>
                                        </div>
                                        <div className="actions-secondary">
                                            <a href="compare.html" title data-original-title="Compare"><i className="lnr lnr-sync" /> <span>Add To
                                                            Compare</span></a>
                                        </div>
                                    </div>
                                </div>
                                {/* Product Content End */}
                            </div>
                            {/* Single Product End */}
                            {/* Single Product Start */}
                            <div className="single-product">
                                {/* Product Image Start */}
                                <div className="pro-img">
                                    <a  onClick={(e) => this.getProduct(product[1].id, e)} href="">
                                        <img className="primary-img" src={product[1].image} alt="single-product" />
                                        <img className="secondary-img" src={product[1].image} alt="single-product" />
                                    </a>
                                    <a href="#" className="quick_view" data-toggle="modal" data-target="#myModal" data-original-title="Quick View"><i className="lnr lnr-magnifier" /></a>
                                </div>
                                {/* Product Image End */}
                                {/* Product Content Start */}
                                <div className="pro-content">
                                    <div className="pro-info">
                                        <h4><a  href="">{product[1].name}</a></h4>
                                        <p><span className="price">{product[1].salePrice} vnđ</span><del className="prev-price">{product[1].price} vnđ</del></p>
                                        <div className="label-product l_sale">{product[1].sale}<span className="symbol-percent">%</span></div>
                                    </div>
                                    <div className="pro-actions">
                                        <div className="actions-primary">
                                            <a  onClick={(e) => this.addToCart(product[1], e)} href="" title data-original-title="Add to Cart">+ Add To Cart</a>
                                        </div>
                                        <div className="actions-secondary">
                                            <a href="compare.html" title data-original-title="Compare"><i className="lnr lnr-sync" /> <span>Add To
                                                            Compare</span></a>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Product End */}
                            </div>
                        </div>
                    </div>
                )
            })
        }
        return (
            <div className="like-product ptb-95 off-white-bg pt-sm-50 pb-sm-55 ">
                <div className="container">
                    <div className="like-product-area">
                        <h2 className="section-ttitle2 mb-30">You May Like </h2>
                        {/* Arrivals Product Activation Start Here */}
                        <div className="like-pro-active owl-carousel owl-loaded owl-drag">
                            {/* Double Product Start */}
                            {/* Double Product End */}
                            {/* Double Product Start */}
                            {/* Double Product End */}
                            {/* Double Product Start */}
                            {/* Double Product End */}
                            {/* Double Product Start */}
                            {/* Double Product End */}
                            {/* Double Product Start */}
                            {/* Double Product End */}
                            {/* Double Product Start */}
                            {/* Double Product End */}
                            {/* Double Product Start */}
                            {/* Double Product End */}
                            {/* Double Product Start */}
                            {/* Double Product End */}
                            <div className="owl-stage-outer">
                                <div className="owl-stage" style={{ transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: 1888 }}>
                                {list}
                                </div>
                            </div>
                            <div className="owl-nav disabled">
                                <div className="owl-prev">
                                    <i className="lnr lnr-arrow-left" />
                                </div><div className="owl-next">
                                    <i className="lnr lnr-arrow-right" />
                                </div></div><div className="owl-dots">
                                <div className="owl-dot active"><span />
                                </div><div className="owl-dot"><span />
                                </div>
                            </div>
                        </div>
                        {/* Arrivals Product Activation End Here */}
                    </div>
                    {/* main-product-tab-area*/}
                </div>
                {/* Container End */}
            </div>


        );
    }
}

// export default LikeProduct;
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LikeProduct));