import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as Actions from './../../actions/index';


class ProductSidebar extends Component {
    addToCart = (product, e) => {
        e.preventDefault();
        this.props.addToCart(product);
    }
    getProduct = (id, e) => {
        e.preventDefault();
        this.props.history.push(`/products/${id}`)
    }
    render() {
        const { product } = this.props;
        console.log(this.props.cart);
        return (
            <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                <div className="single-product">
                    {/* Product Image Start */}
                    <div className="pro-img">
                        <a onClick={(e) => this.getProduct(product.id, e)} href="product.html">
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
                            <p><span className="price">{product.salePrice} vnđ</span><del className="prev-price">{product.price} vnđ</del></p>
                            <div className="label-product l_sale">{product.sale}<span className="symbol-percent">%</span></div>
                        </div>
                        <div className="pro-actions">
                            <div className="actions-primary">
                                <a onClick={(e) => this.addToCart(product, e)} href="" data-original-title="Add to Cart">+ Add To Cart</a>
                            </div>
                            <div className="actions-secondary">
                                <a href="compare.html" data-original-title="Compare"><i className="lnr lnr-sync" /> <span>Add To Compare</span></a>
                            </div>
                        </div>
                    </div>
                    {/* Product Content End */}
                </div>
            </div>

        );
    }
}

// export default ProductSidebar;

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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductSidebar));