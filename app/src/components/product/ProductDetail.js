import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ProductDesc from './ProductDesc';
import ProductRelated from './ProductRelated';


class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        
    }
    
    
    render() {
        console.log(this.props.match.params.id);
        return (
            <div>
                <div className="breadcrumb-area mt-30">
                    <div className="container">
                        <div className="breadcrumb">
                            <ul className="d-flex align-items-center">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="shop.html">Shop</a></li>
                                <li className="active"><a href="product.html">Products</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* Container End */}
                </div>
                <div className="main-product-thumbnail ptb-100 ptb-sm-60">
                    <div className="container">
                        <div className="thumb-bg">
                            <div className="row">
                                {/* Main Thumbnail Image Start */}
                                <div className="col-lg-5 mb-all-40">
                                    {/* Thumbnail Large Image start */}
                                    <div className="tab-content">
                                        <div id="thumb1" className="tab-pane fade show active">
                                            <a data-fancybox="images" href="img/products/35.jpg"><img src="img/products/35.jpg" alt="product-view" /></a>
                                        </div>
                                        <div id="thumb2" className="tab-pane fade">
                                            <a data-fancybox="images" href="img/products/13.jpg"><img src="img/products/13.jpg" alt="product-view" /></a>
                                        </div>
                                        <div id="thumb3" className="tab-pane fade">
                                            <a data-fancybox="images" href="img/products/15.jpg"><img src="img/products/15.jpg" alt="product-view" /></a>
                                        </div>
                                        <div id="thumb4" className="tab-pane fade">
                                            <a data-fancybox="images" href="img/products/4.jpg"><img src="img/products/4.jpg" alt="product-view" /></a>
                                        </div>
                                        <div id="thumb5" className="tab-pane fade">
                                            <a data-fancybox="images" href="img/products/5.jpg"><img src="img/products/5.jpg" alt="product-view" /></a>
                                        </div>
                                    </div>
                                    {/* Thumbnail Large Image End */}
                                    {/* Thumbnail Image End */}
                                    <div className="product-thumbnail mt-15">
                                        <div className="thumb-menu owl-carousel nav tabs-area owl-loaded owl-drag" role="tablist">
                                            <div className="owl-stage-outer"><div className="owl-stage" style={{ transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: 780 }}><div className="owl-item active" style={{ width: '140.833px', marginRight: 15 }}><a className="active" data-toggle="tab" href="#thumb1"><img src="img/products/35.jpg" alt="product-thumbnail" /></a></div><div className="owl-item active" style={{ width: '140.833px', marginRight: 15 }}><a data-toggle="tab" href="#thumb2"><img src="img/products/13.jpg" alt="product-thumbnail" /></a></div><div className="owl-item active" style={{ width: '140.833px', marginRight: 15 }}><a data-toggle="tab" href="#thumb3"><img src="img/products/15.jpg" alt="product-thumbnail" /></a></div><div className="owl-item active" style={{ width: '140.833px', marginRight: 15 }}><a data-toggle="tab" href="#thumb4"><img src="img/products/4.jpg" alt="product-thumbnail" /></a></div><div className="owl-item" style={{ width: '140.833px', marginRight: 15 }}><a data-toggle="tab" href="#thumb5"><img src="img/products/5.jpg" alt="product-thumbnail" /></a></div></div></div><div className="owl-nav"><div className="owl-prev disabled"><i className="lnr lnr-arrow-left" /></div><div className="owl-next"><i className="lnr lnr-arrow-right" /></div></div><div className="owl-dots disabled" /></div>
                                    </div>
                                    {/* Thumbnail image end */}
                                </div>
                                {/* Main Thumbnail Image End */}
                                {/* Thumbnail Description Start */}
                                <div className="col-lg-7">
                                    <div className="thubnail-desc fix">
                                        <h3 className="product-header">Faded Short Sleeves T-shirt</h3>
                                        <div className="rating-summary fix mtb-10">
                                            <div className="rating">
                                                <i className="fa fa-star" style={{ fontSize: 37 }} />
                                                <i className="fa fa-star" style={{ fontSize: 37 }} />
                                                <i className="fa fa-star-o" style={{ fontSize: 37 }} />
                                                <i className="fa fa-star-o" style={{ fontSize: 37 }} />
                                                <i className="fa fa-star-o" style={{ fontSize: 37 }} />
                                            </div>
                                        </div>
                                        <div className="box-quantity d-flex hot-product2" style={{ clear: 'both' }}>
                                            <div className="pro-actions">
                                                <div className="actions-secondary">
                                                    <a href="compare.html" title data-original-title="Compare"><i className="lnr lnr-sync" /> <span>Add To Compare</span></a>
                                                    <a href="wishlist.html" title data-original-title="WishList"><i className="lnr lnr-heart" /> <span>Add to WishList</span></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pro-price mtb-30">
                                            <p className="d-flex align-items-center"><span className="prev-price">16.51</span><span className="price">$15.19</span><span className="saving-price">save 8%</span></p>
                                        </div>
                                        <p className="mb-20 pro-desc-details">Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!</p>
                                        <div className="product-size mb-20" style={{ float: 'left', width: 100 }}>
                                            <label>Size</label>
                                            <select className style={{ display: 'none' }}>
                                                <option>S</option>
                                                <option>M</option>
                                                <option>L</option>
                                            </select><div className="nice-select" tabIndex={0}><span className="current">S</span><ul className="list"><li data-value="S" className="option selected">S</li><li data-value="M" className="option">M</li><li data-value="L" className="option">L</li></ul></div>
                                        </div>
                                        <div className="color  mb-20" style={{ float: 'left', width: 150 }}>
                                            <label>color</label>
                                            <ul className="color-list">
                                                <li>
                                                    <a className="orange active" href="#" style={{ width: 45, height: 45 }} />
                                                </li>
                                                <li>
                                                    <a className="paste" href="#" style={{ width: 45, height: 45 }} />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="box-quantity d-flex hot-product2" style={{ clear: 'both' }}>
                                            <form action="#">
                                                <input className="quantity mr-15" type="number" min={1} defaultValue={1} />
                                            </form>
                                            <div className="pro-actions">
                                                <div className="actions-primary">
                                                    <a href="cart.html" title data-original-title="Add to Cart"> + Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pro-ref mt-20">
                                            <p><span className="in-stock"><i className="ion-checkmark-round" /> IN STOCK</span></p>
                                        </div>
                                    </div>
                                </div>
                                {/* Thumbnail Description End */}
                            </div>
                            {/* Row End */}
                        </div>
                    </div>
                    {/* Container End */}
                </div>
                <ProductDesc/>
                <ProductRelated/>
            </div>
        );
    }
}

export default withRouter(ProductDetail);