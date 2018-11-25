import React, { Component } from 'react';

class ProductDesc extends Component {
    render() {
        return (
            <div className="thumnail-desc pb-100 pb-sm-60">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <ul className="main-thumb-desc nav tabs-area" role="tablist">
                                <li><a className="active" data-toggle="tab" href="#dtail">Product Details</a></li>
                                <li><a data-toggle="tab" href="#review">Reviews 1</a></li>
                            </ul>
                            {/* Product Thumbnail Tab Content Start */}
                            <div className="tab-content thumb-content border-default">
                                <div id="dtail" className="tab-pane fade show active">
                                    <p>Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into a full ready-to-wear collection in which every item is a vital part of a woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more!</p>
                                </div>
                                <div id="review" className="tab-pane fade">
                                    {/* Reviews Start */}
                                    <div className="review border-default universal-padding">
                                        <div className="group-title">
                                            <h2>customer review</h2>
                                        </div>
                                        <h4 className="review-mini-title">Truemart</h4>
                                        <ul className="review-list">
                                            {/* Single Review List Start */}
                                            <li>
                                                <span>Quality</span>
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <label>Truemart</label>
                                            </li>
                                            {/* Single Review List End */}
                                            {/* Single Review List Start */}
                                            <li>
                                                <span>price</span>
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <label>Review by <a href="https://themeforest.net/user/hastech">Truemart</a></label>
                                            </li>
                                            {/* Single Review List End */}
                                            {/* Single Review List Start */}
                                            <li>
                                                <span>value</span>
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star-o" />
                                                <label>Posted on 7/20/18</label>
                                            </li>
                                            {/* Single Review List End */}
                                        </ul>
                                    </div>
                                    {/* Reviews End */}
                                    {/* Reviews Start */}
                                    <div className="review border-default universal-padding mt-30">
                                        <h2 className="review-title mb-30">You're reviewing: <br /><span>Faded Short Sleeves T-shirt</span></h2>
                                        <p className="review-mini-title">your rating</p>
                                        <ul className="review-list">
                                            {/* Single Review List Start */}
                                            <li>
                                                <span>Quality</span>
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                            </li>
                                            {/* Single Review List End */}
                                            {/* Single Review List Start */}
                                            <li>
                                                <span>price</span>
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                            </li>
                                            {/* Single Review List End */}
                                            {/* Single Review List Start */}
                                            <li>
                                                <span>value</span>
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star-o" />
                                            </li>
                                            {/* Single Review List End */}
                                        </ul>
                                        {/* Reviews Field Start */}
                                        <div className="riview-field mt-40">
                                            <form autoComplete="off" action="#">
                                                <div className="form-group">
                                                    <label className="req" htmlFor="sure-name">Nickname</label>
                                                    <input type="text" className="form-control" id="sure-name" required="required" />
                                                </div>
                                                <div className="form-group">
                                                    <label className="req" htmlFor="subject">Summary</label>
                                                    <input type="text" className="form-control" id="subject" required="required" />
                                                </div>
                                                <div className="form-group">
                                                    <label className="req" htmlFor="comments">Review</label>
                                                    <textarea className="form-control" rows={5} id="comments" required="required" defaultValue={""} />
                                                </div>
                                                <button type="submit" className="customer-btn">Submit Review</button>
                                            </form>
                                        </div>
                                        {/* Reviews Field Start */}
                                    </div>
                                    {/* Reviews End */}
                                </div>
                            </div>
                            {/* Product Thumbnail Tab Content End */}
                        </div>
                    </div>
                    {/* Row End */}
                </div>
                {/* Container End */}
            </div>

        );
    }
}

export default ProductDesc;