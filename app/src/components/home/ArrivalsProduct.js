import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from './../../actions/index';

class ArrivalsProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        const products = JSON.parse(localStorage.getItem('products'));
        let list = [];
        for (let i = 0; i < 6; i++) {
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


    render() {
        let { products } = this.state;
        let list = '';
        if (products.length > 0) {
            list = products.map((product, index) => {
                return (
                    <div key={index} className="single-product">
                        <div className="pro-img">
                            <a href="product.html">
                                <img className="primary-img" src={products.image} alt="single-product" />
                                <img className="secondary-img" src={products.image} alt="single-product" />
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
                                    <a  onClick={(e) => this.addToCart(product, e)} href="" data-original-title="Add to Cart"> + Add To Cart</a>
                                </div>
                                <div className="actions-secondary">
                                    <a href="compare.html" data-original-title="Compare"><i className="lnr lnr-sync" /> <span>Add To Compare</span></a>
                                    <a href="wishlist.html" data-original-title="WishList"><i className="lnr lnr-heart" /> <span>Add to WishList</span></a>
                                </div>
                            </div>
                        </div>
                        <span className="sticker-new">new</span>
                    </div>
                );
            })
        }
        return (
            <div className="arrivals-product pb-85 pb-sm-45">
                <div className="container">
                    <div className="main-product-tab-area">
                        <div className="tab-menu mb-25">
                            <div className="section-ttitle">
                                <h2>New Arrivals</h2>
                            </div>
                            <ul className="nav tabs-area" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#fshion">Fashion</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#beauty">Beauty</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#electronics">Sport/Outdoor</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#kids">Living</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#beauty">Food</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#kids">Baby/Kids</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#electronics">Electronics </a>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-content">
                            <div id="fshion" className="tab-pane fade">
                                <div className="electronics-pro-active owl-carousel owl-loaded owl-drag">
                                    <div className="owl-stage-outer">
                                        <div className="owl-stage" style={{ transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: 1574 }}>
                                            <div className="owl-item active" style={{ width: '383.333px', marginRight: 10 }}>
                                                <div className="double-product">

                                                </div>
                                            </div>
                                            <div className="owl-item last active" style={{ width: '383.333px', marginRight: 10 }}>
                                                
                                            </div>
                                            <div className="owl-item active" style={{ width: '383.333px', marginRight: 10 }}>
                                                <div className="double-product">
                                                    {/* Single Product Start */}
                                                    <div className="single-product">
                                                        {/* Product Image Start */}
                                                        <div className="pro-img">
                                                            <a href="product.html">
                                                                <img className="primary-img" src="img/products/13.jpg" alt="single-product" />
                                                                <img className="secondary-img" src="img/products/14.jpg" alt="single-product" />
                                                            </a>
                                                            <a href="#" className="quick_view" data-toggle="modal" data-target="#myModal" title data-original-title="Quick View"><i className="lnr lnr-magnifier" /></a>
                                                        </div>
                                                        {/* Product Image End */}
                                                        {/* Product Content Start */}
                                                        <div className="pro-content">
                                                            <div className="pro-info">
                                                                <h4><a href="product.html">Poly and Bark Vortex Side</a></h4>
                                                                <p><span className="price">$84.45</span><del className="prev-price">$105.50</del></p>
                                                                <div className="label-product l_sale">20<span className="symbol-percent">%</span></div>
                                                            </div>
                                                            <div className="pro-actions">
                                                                <div className="actions-primary">
                                                                    <a href="cart.html" title data-original-title="Add to Cart"> + Add To Cart</a>
                                                                </div>
                                                                <div className="actions-secondary">
                                                                    <a href="compare.html" title data-original-title="Compare"><i className="lnr lnr-sync" /> <span>Add To Compare</span></a>
                                                                    <a href="wishlist.html" title data-original-title="WishList"><i className="lnr lnr-heart" /> <span>Add to WishList</span></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* Product Content End */}
                                                        <span className="sticker-new">new</span>
                                                    </div>
                                                    {/* Single Product End */}
                                                    {/* Single Product Start */}
                                                    <div className="single-product">
                                                        {/* Product Image Start */}
                                                        <div className="pro-img">
                                                            <a href="product.html">
                                                                <img className="primary-img" src="img/products/1.jpg" alt="single-product" />
                                                                <img className="secondary-img" src="img/products/7.jpg" alt="single-product" />
                                                            </a>
                                                            <a href="#" className="quick_view" data-toggle="modal" data-target="#myModal" title data-original-title="Quick View"><i className="lnr lnr-magnifier" /></a>
                                                        </div>
                                                        {/* Product Image End */}
                                                        {/* Product Content Start */}
                                                        <div className="pro-content">
                                                            <div className="pro-info">
                                                                <h4><a href="product.html">Poly and Bark Vortex Side</a></h4>
                                                                <p><span className="price">$84.45</span><del className="prev-price">$105.50</del></p>
                                                                <div className="label-product l_sale">20<span className="symbol-percent">%</span></div>
                                                            </div>
                                                            <div className="pro-actions">
                                                                <div className="actions-primary">
                                                                    <a href="cart.html" title data-original-title="Add to Cart"> + Add To Cart</a>
                                                                </div>
                                                                <div className="actions-secondary">
                                                                    <a href="compare.html" title data-original-title="Compare"><i className="lnr lnr-sync" /> <span>Add To Compare</span></a>
                                                                    <a href="wishlist.html" title data-original-title="WishList"><i className="lnr lnr-heart" /> <span>Add to WishList</span></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* Product Content End */}
                                                        <span className="sticker-new">new</span>
                                                    </div>
                                                    {/* Single Product End */}
                                                </div></div></div></div><div className="owl-nav"><div className="owl-prev disabled"><i className="lnr lnr-arrow-left" /></div><div className="owl-next"><i className="lnr lnr-arrow-right" /></div></div><div className="owl-dots disabled" /></div>
                                {/* Arrivals Product Activation End Here */}
                            </div>
                            {/* #fshion End Here */}
                            <div id="kids" className="tab-pane fade show active">
                                {/* Arrivals Product Activation Start Here */}
                                <div className="electronics-pro-active owl-carousel owl-loaded owl-drag">
                                    {/* Double Product Start */}
                                    {/* Double Product End */}
                                    {/* Double Product Start */}
                                    {/* Double Product End */}
                                    {/* Double Product Start */}
                                    {/* Double Product End */}
                                    {/* Double Product Start */}
                                    {/* Double Product End */}
                                    <div className="owl-stage-outer"><div className="owl-stage" style={{ transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: 1574 }}><div className="owl-item active" style={{ width: '383.333px', marginRight: 10 }}><div className="double-product">
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img className="primary-img" src="img/products/42.jpg" alt="single-product" />
                                                    <img className="secondary-img" src="img/products/43.jpg" alt="single-product" />
                                                </a>
                                                <a href="#" className="quick_view" data-toggle="modal" data-target="#myModal" title data-original-title="Quick View"><i className="lnr lnr-magnifier" /></a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4><a href="product.html">Utensils and Knives Block</a></h4>
                                                    <p><span className="price">$84.45</span><del className="prev-price">$105.50</del></p>
                                                    <div className="label-product l_sale">20<span className="symbol-percent">%</span></div>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a href="cart.html" title data-original-title="Add to Cart"> + Add To Cart</a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a href="compare.html" title data-original-title="Compare"><i className="lnr lnr-sync" /> <span>Add To Compare</span></a>
                                                        <a href="wishlist.html" title data-original-title="WishList"><i className="lnr lnr-heart" /> <span>Add to WishList</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                            <span className="sticker-new">new</span>
                                        </div>
                                        {/* Single Product End */}
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img className="primary-img" src="img/products/40.jpg" alt="single-product" />
                                                    <img className="secondary-img" src="img/products/41.jpg" alt="single-product" />
                                                </a>
                                                <a href="#" className="quick_view" data-toggle="modal" data-target="#myModal" title data-original-title="Quick View"><i className="lnr lnr-magnifier" /></a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4><a href="product.html">Terra Xpress HE Cooking </a></h4>
                                                    <p><span className="price">$84.45</span><del className="prev-price">$300.50</del></p>
                                                    <div className="label-product l_sale">25<span className="symbol-percent">%</span></div>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a href="cart.html" title data-original-title="Add to Cart"> + Add To Cart</a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a href="compare.html" title data-original-title="Compare"><i className="lnr lnr-sync" /> <span>Add To Compare</span></a>
                                                        <a href="wishlist.html" title data-original-title="WishList"><i className="lnr lnr-heart" /> <span>Add to WishList</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                            <span className="sticker-new">new</span>
                                        </div>
                                        {/* Single Product End */}
                                    </div></div><div className="owl-item active" style={{ width: '383.333px', marginRight: 10 }}><div className="double-product">
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img className="primary-img" src="img/products/39.jpg" alt="single-product" />
                                                    <img className="secondary-img" src="img/products/38.jpg" alt="single-product" />
                                                </a>
                                                <a href="#" className="quick_view" data-toggle="modal" data-target="#myModal" title data-original-title="Quick View"><i className="lnr lnr-magnifier" /></a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4><a href="product.html">Robert Welch Knife Block</a></h4>
                                                    <p><span className="price">$100.45</span><del className="prev-price">$150.50</del></p>
                                                    <div className="label-product l_sale">30<span className="symbol-percent">%</span></div>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a href="cart.html" title data-original-title="Add to Cart"> + Add To Cart</a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a href="compare.html" title data-original-title="Compare"><i className="lnr lnr-sync" /> <span>Add To Compare</span></a>
                                                        <a href="wishlist.html" title data-original-title="WishList"><i className="lnr lnr-heart" /> <span>Add to WishList</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                            <span className="sticker-new">new</span>
                                        </div>
                                        {/* Single Product End */}
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img className="primary-img" src="img/products/36.jpg" alt="single-product" />
                                                    <img className="secondary-img" src="img/products/37.jpg" alt="single-product" />
                                                </a>
                                                <a href="#" className="quick_view" data-toggle="modal" data-target="#myModal" title data-original-title="Quick View"><i className="lnr lnr-magnifier" /></a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4><a href="product.html">Poly and Bark Vortex Side</a></h4>
                                                    <p><span className="price">$90.50</span><del className="prev-price">$120.50</del></p>
                                                    <div className="label-product l_sale">15<span className="symbol-percent">%</span></div>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a href="cart.html" title data-original-title="Add to Cart"> + Add To Cart</a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a href="compare.html" title data-original-title="Compare"><i className="lnr lnr-sync" /> <span>Add To Compare</span></a>
                                                        <a href="wishlist.html" title data-original-title="WishList"><i className="lnr lnr-heart" /> <span>Add to WishList</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                            <span className="sticker-new">new</span>
                                        </div>
                                        {/* Single Product End */}
                                    </div></div><div className="owl-item last active" style={{ width: '383.333px', marginRight: 10 }}><div className="double-product">
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img className="primary-img" src="img/products/35.jpg" alt="single-product" />
                                                    <img className="secondary-img" src="img/products/36.jpg" alt="single-product" />
                                                </a>
                                                <a href="#" className="quick_view" data-toggle="modal" data-target="#myModal" title data-original-title="Quick View"><i className="lnr lnr-magnifier" /></a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4><a href="product.html">Bark and  Vortex Side</a></h4>
                                                    <p><span className="price">$69.20</span><del className="prev-price">$145.50</del></p>
                                                    <div className="label-product l_sale">20<span className="symbol-percent">%</span></div>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a href="cart.html" title data-original-title="Add to Cart"> + Add To Cart</a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a href="compare.html" title data-original-title="Compare"><i className="lnr lnr-sync" /> <span>Add To Compare</span></a>
                                                        <a href="wishlist.html" title data-original-title="WishList"><i className="lnr lnr-heart" /> <span>Add to WishList</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                            <span className="sticker-new">new</span>
                                        </div>
                                        {/* Single Product End */}
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img className="primary-img" src="img/products/34.jpg" alt="single-product" />
                                                    <img className="secondary-img" src="img/products/35.jpg" alt="single-product" />
                                                </a>
                                                <a href="#" className="quick_view" data-toggle="modal" data-target="#myModal" title data-original-title="Quick View"><i className="lnr lnr-magnifier" /></a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4><a href="product.html">Compary and Bark Vortex Shewe</a></h4>
                                                    <p><span className="price">$84.45</span><del className="prev-price">$105.50</del></p>
                                                    <div className="label-product l_sale">20<span className="symbol-percent">%</span></div>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a href="cart.html" title data-original-title="Add to Cart"> + Add To Cart</a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a href="compare.html" title data-original-title="Compare"><i className="lnr lnr-sync" /> <span>Add To Compare</span></a>
                                                        <a href="wishlist.html" title data-original-title="WishList"><i className="lnr lnr-heart" /> <span>Add to WishList</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                            <span className="sticker-new">new</span>
                                        </div>
                                        {/* Single Product End */}
                                    </div></div><div className="owl-item active" style={{ width: '383.333px', marginRight: 10 }}><div className="double-product">
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img className="primary-img" src="img/products/32.jpg" alt="single-product" />
                                                    <img className="secondary-img" src="img/products/33.jpg" alt="single-product" />
                                                </a>
                                                <a href="#" className="quick_view" data-toggle="modal" data-target="#myModal" title data-original-title="Quick View"><i className="lnr lnr-magnifier" /></a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4><a href="product.html">kallery kids  weare</a></h4>
                                                    <p><span className="price">$84.45</span><del className="prev-price">$105.50</del></p>
                                                    <div className="label-product l_sale">20<span className="symbol-percent">%</span></div>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a href="cart.html" title data-original-title="Add to Cart"> + Add To Cart</a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a href="compare.html" title data-original-title="Compare"><i className="lnr lnr-sync" /> <span>Add To Compare</span></a>
                                                        <a href="wishlist.html" title data-original-title="WishList"><i className="lnr lnr-heart" /> <span>Add to WishList</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                            <span className="sticker-new">new</span>
                                        </div>
                                        {/* Single Product End */}
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img className="primary-img" src="img/products/1.jpg" alt="single-product" />
                                                    <img className="secondary-img" src="img/products/7.jpg" alt="single-product" />
                                                </a>
                                                <a href="#" className="quick_view" data-toggle="modal" data-target="#myModal" title data-original-title="Quick View"><i className="lnr lnr-magnifier" /></a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4><a href="product.html">Poly and Bark Vortex Side</a></h4>
                                                    <p><span className="price">$84.45</span><del className="prev-price">$105.50</del></p>
                                                    <div className="label-product l_sale">20<span className="symbol-percent">%</span></div>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a href="cart.html" title data-original-title="Add to Cart"> + Add To Cart</a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a href="compare.html" title data-original-title="Compare"><i className="lnr lnr-sync" /> <span>Add To Compare</span></a>
                                                        <a href="wishlist.html" title data-original-title="WishList"><i className="lnr lnr-heart" /> <span>Add to WishList</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                            <span className="sticker-new">new</span>
                                        </div>
                                        {/* Single Product End */}
                                    </div></div></div></div><div className="owl-nav"><div className="owl-prev disabled"><i className="lnr lnr-arrow-left" /></div><div className="owl-next"><i className="lnr lnr-arrow-right" /></div></div><div className="owl-dots disabled" /></div>
                                {/* Arrivals Product Activation End Here */}
                            </div>
                            {/* #fshion End Here */}
                            <div id="beauty" className="tab-pane fade">
                                {/* Arrivals Product Activation Start Here */}
                                <div className="electronics-pro-active owl-carousel owl-loaded owl-drag">
                                    {/* Double Product Start */}
                                    {/* Double Product End */}
                                    {/* Double Product Start */}
                                    {/* Double Product End */}
                                    {/* Double Product Start */}
                                    {/* Double Product End */}
                                    {/* Double Product Start */}
                                    {/* Double Product End */}
                                    <div className="owl-stage-outer"><div className="owl-stage" style={{ transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: 1574 }}><div className="owl-item active" style={{ width: '383.333px', marginRight: 10 }}><div className="double-product">
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img className="primary-img" src="img/products/43.jpg" alt="single-product" />
                                                    <img className="secondary-img" src="img/products/42.jpg" alt="single-product" />
                                                </a>
                                                <a href="#" className="quick_view" data-toggle="modal" data-target="#myModal" title data-original-title="Quick View"><i className="lnr lnr-magnifier" /></a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4><a href="product.html">Poly and Bark Vortex Side</a></h4>
                                                    <p><span className="price">$84.45</span><del className="prev-price">$105.50</del></p>
                                                    <div className="label-product l_sale">20<span className="symbol-percent">%</span></div>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a href="cart.html" title data-original-title="Add to Cart"> + Add To Cart</a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a href="compare.html" title data-original-title="Compare"><i className="lnr lnr-sync" /> <span>Add To Compare</span></a>
                                                        <a href="wishlist.html" title data-original-title="WishList"><i className="lnr lnr-heart" /> <span>Add to WishList</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                            <span className="sticker-new">new</span>
                                        </div>
                                        {/* Single Product End */}
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img className="primary-img" src="img/products/41.jpg" alt="single-product" />
                                                    <img className="secondary-img" src="img/products/39.jpg" alt="single-product" />
                                                </a>
                                                <a href="#" className="quick_view" data-toggle="modal" data-target="#myModal" title data-original-title="Quick View"><i className="lnr lnr-magnifier" /></a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4><a href="product.html">Poly and Bark Vortex Side</a></h4>
                                                    <p><span className="price">$84.45</span><del className="prev-price">$105.50</del></p>
                                                    <div className="label-product l_sale">20<span className="symbol-percent">%</span></div>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a href="cart.html" title data-original-title="Add to Cart"> + Add To Cart</a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a href="compare.html" title data-original-title="Compare"><i className="lnr lnr-sync" /> <span>Add To Compare</span></a>
                                                        <a href="wishlist.html" title data-original-title="WishList"><i className="lnr lnr-heart" /> <span>Add to WishList</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                            <span className="sticker-new">new</span>
                                        </div>
                                        {/* Single Product End */}
                                    </div></div><div className="owl-item active" style={{ width: '383.333px', marginRight: 10 }}><div className="double-product">
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img className="primary-img" src="img/products/5.jpg" alt="single-product" />
                                                    <img className="secondary-img" src="img/products/6.jpg" alt="single-product" />
                                                </a>
                                                <a href="#" className="quick_view" data-toggle="modal" data-target="#myModal" title data-original-title="Quick View"><i className="lnr lnr-magnifier" /></a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4><a href="product.html">Poly and Bark Vortex Side</a></h4>
                                                    <p><span className="price">$84.45</span><del className="prev-price">$105.50</del></p>
                                                    <div className="label-product l_sale">20<span className="symbol-percent">%</span></div>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a href="cart.html" title data-original-title="Add to Cart"> + Add To Cart</a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a href="compare.html" title data-original-title="Compare"><i className="lnr lnr-sync" /> <span>Add To Compare</span></a>
                                                        <a href="wishlist.html" title data-original-title="WishList"><i className="lnr lnr-heart" /> <span>Add to WishList</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                            <span className="sticker-new">new</span>
                                        </div>
                                        {/* Single Product End */}
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img className="primary-img" src="img/products/9.jpg" alt="single-product" />
                                                    <img className="secondary-img" src="img/products/10.jpg" alt="single-product" />
                                                </a>
                                                <a href="#" className="quick_view" data-toggle="modal" data-target="#myModal" title data-original-title="Quick View"><i className="lnr lnr-magnifier" /></a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4><a href="product.html">Poly and Bark Vortex Side</a></h4>
                                                    <p><span className="price">$84.45</span><del className="prev-price">$105.50</del></p>
                                                    <div className="label-product l_sale">20<span className="symbol-percent">%</span></div>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a href="cart.html" title data-original-title="Add to Cart"> + Add To Cart</a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a href="compare.html" title data-original-title="Compare"><i className="lnr lnr-sync" /> <span>Add To Compare</span></a>
                                                        <a href="wishlist.html" title data-original-title="WishList"><i className="lnr lnr-heart" /> <span>Add to WishList</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                            <span className="sticker-new">new</span>
                                        </div>
                                        {/* Single Product End */}
                                    </div></div><div className="owl-item last active" style={{ width: '383.333px', marginRight: 10 }}><div className="double-product">
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img className="primary-img" src="img/products/11.jpg" alt="single-product" />
                                                    <img className="secondary-img" src="img/products/12.jpg" alt="single-product" />
                                                </a>
                                                <a href="#" className="quick_view" data-toggle="modal" data-target="#myModal" title data-original-title="Quick View"><i className="lnr lnr-magnifier" /></a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4><a href="product.html">Poly and Bark Vortex Side</a></h4>
                                                    <p><span className="price">$84.45</span><del className="prev-price">$105.50</del></p>
                                                    <div className="label-product l_sale">20<span className="symbol-percent">%</span></div>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a href="cart.html" title data-original-title="Add to Cart"> + Add To Cart</a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a href="compare.html" title data-original-title="Compare"><i className="lnr lnr-sync" /> <span>Add To Compare</span></a>
                                                        <a href="wishlist.html" title data-original-title="WishList"><i className="lnr lnr-heart" /> <span>Add to WishList</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                            <span className="sticker-new">new</span>
                                        </div>
                                        {/* Single Product End */}
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img className="primary-img" src="img/products/3.jpg" alt="single-product" />
                                                    <img className="secondary-img" src="img/products/4.jpg" alt="single-product" />
                                                </a>
                                                <a href="#" className="quick_view" data-toggle="modal" data-target="#myModal" title data-original-title="Quick View"><i className="lnr lnr-magnifier" /></a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4><a href="product.html">Poly and Bark Vortex Side</a></h4>
                                                    <p><span className="price">$84.45</span><del className="prev-price">$105.50</del></p>
                                                    <div className="label-product l_sale">20<span className="symbol-percent">%</span></div>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a href="cart.html" title data-original-title="Add to Cart"> + Add To Cart</a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a href="compare.html" title data-original-title="Compare"><i className="lnr lnr-sync" /> <span>Add To Compare</span></a>
                                                        <a href="wishlist.html" title data-original-title="WishList"><i className="lnr lnr-heart" /> <span>Add to WishList</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                            <span className="sticker-new">new</span>
                                        </div>
                                        {/* Single Product End */}
                                    </div></div><div className="owl-item active" style={{ width: '383.333px', marginRight: 10 }}><div className="double-product">
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img className="primary-img" src="img/products/43.jpg" alt="single-product" />
                                                    <img className="secondary-img" src="img/products/42.jpg" alt="single-product" />
                                                </a>
                                                <a href="#" className="quick_view" data-toggle="modal" data-target="#myModal" title data-original-title="Quick View"><i className="lnr lnr-magnifier" /></a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4><a href="product.html">Poly and Bark Vortex Side</a></h4>
                                                    <p><span className="price">$84.45</span><del className="prev-price">$105.50</del></p>
                                                    <div className="label-product l_sale">20<span className="symbol-percent">%</span></div>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a href="cart.html" title data-original-title="Add to Cart"> + Add To Cart</a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a href="compare.html" title data-original-title="Compare"><i className="lnr lnr-sync" /> <span>Add To Compare</span></a>
                                                        <a href="wishlist.html" title data-original-title="WishList"><i className="lnr lnr-heart" /> <span>Add to WishList</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                            <span className="sticker-new">new</span>
                                        </div>
                                        {/* Single Product End */}
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img className="primary-img" src="img/products/1.jpg" alt="single-product" />
                                                    <img className="secondary-img" src="img/products/7.jpg" alt="single-product" />
                                                </a>
                                                <a href="#" className="quick_view" data-toggle="modal" data-target="#myModal" title data-original-title="Quick View"><i className="lnr lnr-magnifier" /></a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4><a href="product.html">Poly and Bark Vortex Side</a></h4>
                                                    <p><span className="price">$84.45</span><del className="prev-price">$105.50</del></p>
                                                    <div className="label-product l_sale">20<span className="symbol-percent">%</span></div>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a href="cart.html" title data-original-title="Add to Cart"> + Add To Cart</a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a href="compare.html" title data-original-title="Compare"><i className="lnr lnr-sync" /> <span>Add To Compare</span></a>
                                                        <a href="wishlist.html" title data-original-title="WishList"><i className="lnr lnr-heart" /> <span>Add to WishList</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                            <span className="sticker-new">new</span>
                                        </div>
                                        {/* Single Product End */}
                                    </div></div></div></div><div className="owl-nav"><div className="owl-prev disabled"><i className="lnr lnr-arrow-left" /></div><div className="owl-next"><i className="lnr lnr-arrow-right" /></div></div><div className="owl-dots disabled" /></div>
                                {/* Arrivals Product Activation End Here */}
                            </div>
                            {/* #beauty End Here */}
                            <div id="electronics" className="tab-pane fade">
                                {/* Arrivals Product Activation Start Here */}
                                <div className="electronics-pro-active owl-carousel owl-loaded owl-drag">
                                    {/* Double Product Start */}
                                    {/* Double Product End */}
                                    {/* Double Product Start */}
                                    {/* Double Product End */}
                                    {/* Double Product Start */}
                                    {/* Double Product End */}
                                    {/* Double Product Start */}
                                    {/* Double Product End */}
                                    <div className="owl-stage-outer"><div className="owl-stage" style={{ transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: 1574 }}><div className="owl-item active" style={{ width: '383.333px', marginRight: 10 }}><div className="double-product">
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img className="primary-img" src="img/products/17.jpg" alt="single-product" />
                                                    <img className="secondary-img" src="img/products/18.jpg" alt="single-product" />
                                                </a>
                                                <a href="#" className="quick_view" data-toggle="modal" data-target="#myModal" title data-original-title="Quick View"><i className="lnr lnr-magnifier" /></a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4><a href="product.html">Flos Chasen S2 Suspension</a></h4>
                                                    <p><span className="price">$84.45</span><del className="prev-price">$105.50</del></p>
                                                    <div className="label-product l_sale">20<span className="symbol-percent">%</span></div>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a href="cart.html" title data-original-title="Add to Cart"> + Add To Cart</a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a href="compare.html" title data-original-title="Compare"><i className="lnr lnr-sync" /> <span>Add To Compare</span></a>
                                                        <a href="wishlist.html" title data-original-title="WishList"><i className="lnr lnr-heart" /> <span>Add to WishList</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                            <span className="sticker-new">new</span>
                                        </div>
                                        {/* Single Product End */}
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img className="primary-img" src="img/products/19.jpg" alt="single-product" />
                                                    <img className="secondary-img" src="img/products/20.jpg" alt="single-product" />
                                                </a>
                                                <a href="#" className="quick_view" data-toggle="modal" data-target="#myModal" title data-original-title="Quick View"><i className="lnr lnr-magnifier" /></a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4><a href="product.html">Country Squire Florist</a></h4>
                                                    <p><span className="price">$84.45</span><del className="prev-price">$105.50</del></p>
                                                    <div className="label-product l_sale">20<span className="symbol-percent">%</span></div>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a href="cart.html" title data-original-title="Add to Cart"> + Add To Cart</a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a href="compare.html" title data-original-title="Compare"><i className="lnr lnr-sync" /> <span>Add To Compare</span></a>
                                                        <a href="wishlist.html" title data-original-title="WishList"><i className="lnr lnr-heart" /> <span>Add to WishList</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                            <span className="sticker-new">new</span>
                                        </div>
                                        {/* Single Product End */}
                                    </div></div><div className="owl-item active" style={{ width: '383.333px', marginRight: 10 }}><div className="double-product">
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img className="primary-img" src="img/products/20.jpg" alt="single-product" />
                                                    <img className="secondary-img" src="img/products/21.jpg" alt="single-product" />
                                                </a>
                                                <a href="#" className="quick_view" data-toggle="modal" data-target="#myModal" title data-original-title="Quick View"><i className="lnr lnr-magnifier" /></a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4><a href="product.html">Concord Fabric Single</a></h4>
                                                    <p><span className="price">$84.45</span><del className="prev-price">$105.50</del></p>
                                                    <div className="label-product l_sale">20<span className="symbol-percent">%</span></div>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a href="cart.html" title data-original-title="Add to Cart"> + Add To Cart</a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a href="compare.html" title data-original-title="Compare"><i className="lnr lnr-sync" /> <span>Add To Compare</span></a>
                                                        <a href="wishlist.html" title data-original-title="WishList"><i className="lnr lnr-heart" /> <span>Add to WishList</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                            <span className="sticker-new">new</span>
                                        </div>
                                        {/* Single Product End */}
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img className="primary-img" src="img/products/21.jpg" alt="single-product" />
                                                    <img className="secondary-img" src="img/products/22.jpg" alt="single-product" />
                                                </a>
                                                <a href="#" className="quick_view" data-toggle="modal" data-target="#myModal" title data-original-title="Quick View"><i className="lnr lnr-magnifier" /></a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4><a href="product.html">Poly and Bark Vortex Side</a></h4>
                                                    <p><span className="price">$84.45</span><del className="prev-price">$105.50</del></p>
                                                    <div className="label-product l_sale">20<span className="symbol-percent">%</span></div>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a href="cart.html" title data-original-title="Add to Cart"> + Add To Cart</a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a href="compare.html" title data-original-title="Compare"><i className="lnr lnr-sync" /> <span>Add To Compare</span></a>
                                                        <a href="wishlist.html" title data-original-title="WishList"><i className="lnr lnr-heart" /> <span>Add to WishList</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                            <span className="sticker-new">new</span>
                                        </div>
                                        {/* Single Product End */}
                                    </div></div><div className="owl-item last active" style={{ width: '383.333px', marginRight: 10 }}><div className="double-product">
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img className="primary-img" src="img/products/23.jpg" alt="single-product" />
                                                    <img className="secondary-img" src="img/products/24.jpg" alt="single-product" />
                                                </a>
                                                <a href="#" className="quick_view" data-toggle="modal" data-target="#myModal" title data-original-title="Quick View"><i className="lnr lnr-magnifier" /></a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4><a href="product.html">Gpoly and Bark Eames Style</a></h4>
                                                    <p><span className="price">$84.45</span><del className="prev-price">$105.50</del></p>
                                                    <div className="label-product l_sale">20<span className="symbol-percent">%</span></div>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a href="cart.html" title data-original-title="Add to Cart"> + Add To Cart</a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a href="compare.html" title data-original-title="Compare"><i className="lnr lnr-sync" /> <span>Add To Compare</span></a>
                                                        <a href="wishlist.html" title data-original-title="WishList"><i className="lnr lnr-heart" /> <span>Add to WishList</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                            <span className="sticker-new">new</span>
                                        </div>
                                        {/* Single Product End */}
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img className="primary-img" src="img/products/24.jpg" alt="single-product" />
                                                    <img className="secondary-img" src="img/products/25.jpg" alt="single-product" />
                                                </a>
                                                <a href="#" className="quick_view" data-toggle="modal" data-target="#myModal" title data-original-title="Quick View"><i className="lnr lnr-magnifier" /></a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4><a href="product.html">Vortex and Bark Vortex Side</a></h4>
                                                    <p><span className="price">$84.45</span><del className="prev-price">$105.50</del></p>
                                                    <div className="label-product l_sale">20<span className="symbol-percent">%</span></div>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a href="cart.html" title data-original-title="Add to Cart"> + Add To Cart</a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a href="compare.html" title data-original-title="Compare"><i className="lnr lnr-sync" /> <span>Add To Compare</span></a>
                                                        <a href="wishlist.html" title data-original-title="WishList"><i className="lnr lnr-heart" /> <span>Add to WishList</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                            <span className="sticker-new">new</span>
                                        </div>
                                        {/* Single Product End */}
                                    </div></div><div className="owl-item active" style={{ width: '383.333px', marginRight: 10 }}><div className="double-product">
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img className="primary-img" src="img/products/26.jpg" alt="single-product" />
                                                    <img className="secondary-img" src="img/products/27.jpg" alt="single-product" />
                                                </a>
                                                <a href="#" className="quick_view" data-toggle="modal" data-target="#myModal" title data-original-title="Quick View"><i className="lnr lnr-magnifier" /></a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4><a href="product.html">Bark and Vortex Side</a></h4>
                                                    <p><span className="price">$84.45</span><del className="prev-price">$105.50</del></p>
                                                    <div className="label-product l_sale">20<span className="symbol-percent">%</span></div>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a href="cart.html" title data-original-title="Add to Cart"> + Add To Cart</a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a href="compare.html" title data-original-title="Compare"><i className="lnr lnr-sync" /> <span>Add To Compare</span></a>
                                                        <a href="wishlist.html" title data-original-title="WishList"><i className="lnr lnr-heart" /> <span>Add to WishList</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                            <span className="sticker-new">new</span>
                                        </div>
                                        {/* Single Product End */}
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img className="primary-img" src="img/products/28.jpg" alt="single-product" />
                                                    <img className="secondary-img" src="img/products/29.jpg" alt="single-product" />
                                                </a>
                                                <a href="#" className="quick_view" data-toggle="modal" data-target="#myModal" title data-original-title="Quick View"><i className="lnr lnr-magnifier" /></a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4><a href="product.html">Electronic and Bark Vortex</a></h4>
                                                    <p><span className="price">$84.45</span><del className="prev-price">$105.50</del></p>
                                                    <div className="label-product l_sale">20<span className="symbol-percent">%</span></div>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a href="cart.html" title data-original-title="Add to Cart"> + Add To Cart</a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a href="compare.html" title data-original-title="Compare"><i className="lnr lnr-sync" /> <span>Add To Compare</span></a>
                                                        <a href="wishlist.html" title data-original-title="WishList"><i className="lnr lnr-heart" /> <span>Add to WishList</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                            <span className="sticker-new">new</span>
                                        </div>
                                        {/* Single Product End */}
                                    </div></div></div></div><div className="owl-nav"><div className="owl-prev disabled"><i className="lnr lnr-arrow-left" /></div><div className="owl-next"><i className="lnr lnr-arrow-right" /></div></div><div className="owl-dots disabled" /></div>
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

// export default ArrivalsProduct;

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
export default connect(mapStateToProps, mapDispatchToProps)(ArrivalsProduct);