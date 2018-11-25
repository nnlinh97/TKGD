import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as Actions from './../../actions/index';

class HotDeals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        const products = JSON.parse(localStorage.getItem('products'));
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
                    <div key={index} className="owl-item active" style={{ width: 226, marginRight: 10 }}>
                        <div className="single-product">
                            <div className="pro-img">
                                <a  onClick={(e) => this.getProduct(product.id, e)} href="">
                                    <img className="primary-img" src={product.image} alt="single-product" />
                                    <img className="secondary-img" src={product.image} alt="single-product" />
                                </a>
                                <a href="#" className="quick_view" data-toggle="modal" data-target="#myModal" data-original-title="Quick View"><i className="lnr lnr-magnifier" /></a>
                            </div>
                            <div className="pro-content">
                                <div className="pro-info">
                                    <h4><a href="product.html">{product.name}</a></h4>
                                    <p><span className="price">{product.salePrice} vnđ</span><del className="prev-price">{product.price} vnđ</del></p>
                                    <div className="label-product l_sale">{product.sale}<span className="symbol-percent">%</span></div>
                                </div>
                                <div className="pro-actions">
                                    <div className="actions-primary">
                                        <a  onClick={(e) => this.addToCart(product, e)} href="" title data-original-title="Add to Cart">+ Add To Cart</a>
                                    </div>
                                    <div className="actions-secondary">
                                        <a  href="" title data-original-title="Compare">
                                            <i className="lnr lnr-sync" />
                                            <span>Add To Compare</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }

        return (
            <div className="hot-deal-products off-white-bg pb-90 pb-sm-50">
                <div className="container">
                    <div className="post-title pb-30">
                        <h2>hot deals</h2>
                    </div>
                    <div className="hot-deal-active owl-carousel owl-loaded owl-drag">
                        <div className="owl-stage-outer">
                            <div className="owl-stage" style={{ transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: 1416 }}>
                                {list}
                            </div>
                        </div>
                        <div className="owl-nav"><div className="owl-prev disabled">
                            <i className="lnr lnr-arrow-left" />
                        </div>
                            <div className="owl-next"><i className="lnr lnr-arrow-right" />
                            </div>
                        </div>
                        <div className="owl-dots disabled" />
                    </div>
                </div>
            </div>
        );
    }
}

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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HotDeals));