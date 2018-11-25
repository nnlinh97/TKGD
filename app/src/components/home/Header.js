import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import * as Actions from './../../actions/index';
var numeral = require('numeral');


class Header extends Component {

    deleteProduct = (product, e) => {
        e.preventDefault();
        this.props.deleteProduct(product)
    }

    getProduct = (id, e) => {
        e.preventDefault();
        this.props.history.push(`/products/${id}`)
    }
    render() {
        const { cart } = this.props;
        let count = 0;
        let totalMoney = 0;
        cart.forEach(item => {
            count += item.quantity;
            totalMoney += numeral(item.product.salePrice)._value * item.quantity;
        });
        let listItem = '';
        const ship = 15000;
        let temp = '1,100,000';

        if (cart.length > 0) {
            listItem = cart.map((item, index) => {
                return (
                    <div key={index} className="single-cart-box">
                        <div className="cart-img">
                            <a onClick={(e) => this.getProduct(item.product.id, e)} href="" title={item.product.name}>
                                <img src={item.product.image} alt="cart-image" />
                            </a>
                            <span className="pro-quantity">{item.quantity}X</span>
                        </div>
                        <div className="cart-content">
                            <h6><a onClick={(e) => this.getProduct(item.product.id, e)} href="" title={item.product.name}>{item.product.name}</a></h6>
                            <span className="cart-price">{item.product.salePrice} vnđ</span>
                        </div>
                        <a onClick={(e) => this.deleteProduct(item, e)} className="del-icone" href=""><i className="fa fa-times" /></a>
                    </div>
                )
            })
        }
        return (
            <header>
                {/* Header Middle Start Here */}
                <div className="header-middle ptb-15">
                    <div className="container">
                        <div className="row align-items-center no-gutters">
                            <div className="col-lg-3 col-md-12">
                                <div className="logo mb-all-30">
                                    {/* <a href="index.html"><img src="img/logo/logo.png" alt="logo-image"></a> */}
                                    <Link to="/">
                                        <a href=""><img src="http://img0cf.b8cdn.com/images/logo/93/1701193_23028_20171212125852.gif" alt="logo-image" /></a>
                                    </Link>
                                </div>
                            </div>
                            {/* Categorie Search Box Start Here */}
                            <div className="col-lg-5 col-md-8 ml-auto mr-auto col-10">
                                <div className="categorie-search-box">
                                    <form action="#">
                                        <div className="form-group">
                                            <select className="bootstrap-select" name="poscats" style={{ display: 'none' }}>
                                                <option value={0}>Tất cả</option>
                                                <option value={2}>Sữa</option>
                                                <option value={3}>Quần áo bé trai</option>
                                                <option value={4}>Quần áo bé gái</option>
                                                <option value={5}>Bỉm và Tã giấy</option>
                                                <option value={6}>Đồ chơi</option>
                                            </select><div className="nice-select bootstrap-select" tabIndex={0}><span className="current">Tất cả</span><ul className="list"><li data-value={0} className="option selected focus">Tất cả</li><li data-value={2} className="option">Sữa</li><li data-value={3} className="option">Quần áo bé trai</li><li data-value={4} className="option">Quần áo bé gái</li><li data-value={5} className="option">Bỉm và Tã giấy</li><li data-value={6} className="option">Đồ chơi</li></ul></div>
                                        </div>
                                        <input type="text" name="search" placeholder="Mua gì có đó..." />
                                        <button><i className="fa fa-search" /></button>
                                    </form>
                                </div>
                            </div>
                            {/* Categorie Search Box End Here */}
                            {/* Cart Box Start Here */}
                            <div className="col-lg-4 col-md-12">
                                <div className="cart-box mt-all-30">
                                    <ul className="d-flex justify-content-lg-end justify-content-center align-items-center">
                                        <li>
                                            <a href="#">
                                                <i className="lnr lnr-cart" />
                                                <span className="my-cart">
                                                    <span className="total-pro">{count}</span>
                                                    <span>Giỏ hàng</span>
                                                </span>
                                            </a>
                                            <ul className="ht-dropdown cart-box-width">
                                                {cart.length > 0 ?
                                                    <li>
                                                        {listItem}
                                                        <div className="cart-footer">
                                                            <ul className="price-content">
                                                                <li>Tổng cộng <span>{numeral(totalMoney).format('0,0')} vnđ</span></li>
                                                                <li>Phí Ship <span>{numeral(ship).format('0,0')} vnđ</span></li>
                                                                <li>Thành tiền <span>{numeral(totalMoney + ship).format('0,0')} vnđ</span></li>
                                                            </ul>
                                                            <div className="cart-actions text-center">
                                                                <a className="cart-checkout" href="checkout.html">Thanh toán</a>
                                                            </div>
                                                        </div>
                                                        {/* Cart Footer Inner End */}
                                                    </li>
                                                    :
                                                    <li>Giỏ hàng rỗng</li>}
                                            </ul>
                                        </li>
                                        <li><a href="#"><i className="lnr lnr-user" /><span className="my-cart"><span> <strong>Đăng
                        nhập</strong> hoặc</span><strong>Đăng kí</strong></span></a></li>
                                        <li><a href="#"><i className="lnr lnr-phone-handset" /><span className="my-cart"><span><strong>Hotline</strong></span></span></a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* Cart Box End Here */}
                        </div>
                        {/* Row End */}
                    </div>
                    {/* Container End */}
                </div>
                {/* Header Middle End Here */}
                {/* Header Bottom Start Here */}
                <div className="header-bottom header-sticky">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-4 col-md-6 vertical-menu d-none d-lg-block">
                                <span className="categorie-title">Danh Mục</span>
                            </div>
                            <div className="col-xl-9 col-lg-8 col-md-12 ">
                                <nav className="d-none d-lg-block">
                                    <ul className="header-bottom-list d-flex">
                                        <li className="active"><a href="index.html">Trang chủ</a></li>
                                        <li><a href="shop.html">Mua sắm<i className="fa fa-angle-down" /></a>
                                            {/* Home Version Dropdown Start */}
                                            <ul className="ht-dropdown dropdown-style-two">
                                                <li><a href="product.html">Chi tiết sản phẩm</a></li>
                                                <li><a href="compare.html">So sánh</a></li>
                                                <li><a href="cart.html">Giỏ hàng</a></li>
                                                <li><a href="checkout.html">Thanh toán</a></li>
                                            </ul>
                                            {/* Home Version Dropdown End */}
                                        </li>
                                        <li><a href="#">Tài khoản<i className="fa fa-angle-down" /></a>
                                            {/* Home Version Dropdown Start */}
                                            <ul className="ht-dropdown dropdown-style-two">
                                                <li><a href="register.html">Đăng kí</a></li>
                                                <li><a href="login.html">Đăng nhập</a></li>
                                                <li><a href="forgot-password.html">Quên mật khẩu</a></li>
                                            </ul>
                                            {/* Home Version Dropdown End */}
                                        </li>
                                        <li><a href="about.html">Về chúng tôi</a></li>
                                        <li><a href="contact.html">Liên hệ</a></li>
                                    </ul>
                                </nav>
                                <div className="mobile-menu d-block d-lg-none">
                                    <nav style={{ display: 'block' }}>
                                        <ul>
                                            <li><a href="index.html">Trang chủ</a></li>
                                            <li><a href="shop.html">Mua sắm</a>
                                                {/* Mobile Menu Dropdown Start */}
                                                <ul>
                                                    <li><a href="product.html">Chi tiết sản phẩm</a></li>
                                                    <li><a href="compare.html">So sánh</a></li>
                                                    <li><a href="cart.html">Giỏ hàng</a></li>
                                                    <li><a href="checkout.html">Thanh toán</a></li>
                                                </ul>
                                                {/* Mobile Menu Dropdown End */}
                                            </li>
                                            <li><a href="#">Tài khoản</a>
                                                {/* Mobile Menu Dropdown Start */}
                                                <ul>
                                                    <li><a href="register.html">Đăng kí</a></li>
                                                    <li><a href="login.html">Đăng nhập</a></li>
                                                    <li><a href="forgot-password.html">Quên mật khẩu</a></li>
                                                </ul>
                                                {/* Mobile Menu Dropdown End */}
                                            </li>
                                            <li><a href="about.html">Về chúng tôi</a></li>
                                            <li><a href="contact.html">Liên hệ</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        {/* Row End */}
                    </div>
                    {/* Container End */}
                </div>
                {/* Header Bottom End Here */}
                {/* Mobile Vertical Menu Start Here */}
                <div className="container d-block d-lg-none">
                    <div className="vertical-menu mt-30">
                        <span className="categorie-title mobile-categorei-menu">Danh Mục</span>
                        <nav>
                            <div id="cate-mobile-toggle" className="category-menu sidebar-menu sidbar-style mobile-categorei-menu-list menu-hidden ">
                                <div className="row">
                                    <ul>
                                        <li className="has-sub"><a href="#">Sữa</a>
                                            <ul className="category-sub">
                                                <li className="has-sub"><a href="shop.html">Nhãn hiệu</a>
                                                    <ul className="category-sub">
                                                        <li><a href="shop.html">Meiji</a></li>
                                                        <li><a href="shop.html">Friso</a></li>
                                                        <li><a href="shop.html">Similac</a></li>
                                                        <li><a href="shop.html">PediaSure</a></li>
                                                        <li><a href="shop.html">Morinaga</a></li>
                                                        <li><a href="shop.html">Aptamils</a></li>
                                                        <li><a href="shop.html">Enfa</a></li>
                                                        <li><a href="shop.html">Nan</a></li>
                                                        <li><a href="shop.html">Physiolac</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-sub"><a href="shop.html">Độ tuổi</a>
                                                    <ul className="category-sub">
                                                        <li><a href="shop.html">0 - 3 tháng</a></li>
                                                        <li><a href="shop.html">3 - 6 tháng</a></li>
                                                        <li><a href="shop.html">6 - 9 tháng</a></li>
                                                        <li><a href="shop.html">9 - 12 tháng</a></li>
                                                        <li><a href="shop.html">12 - 18 tháng</a></li>
                                                        <li><a href="shop.html">18 - 24 tháng</a></li>
                                                        <li><a href="shop.html">2 - 4 tuổi</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="shop.html">Đánh giá</a></li>
                                            </ul>
                                            {/* category submenu end*/}
                                        </li>
                                        <li className="has-sub"><a href="#">Bỉm và Tã giấy</a>
                                            <ul className="category-sub">
                                                <li className="menu-tile">Nhãn hiệu</li>
                                                <li><a href="shop.html">Merries</a></li>
                                                <li><a href="shop.html">Goon</a></li>
                                                <li><a href="shop.html">Huggies</a></li>
                                                <li><a href="shop.html">Bobby</a></li>
                                                <li><a href="shop.html">Pamper</a></li>
                                                <li><a href="shop.html">Bosomi</a></li>
                                            </ul>
                                            {/* category submenu end*/}
                                        </li>
                                        <li className="has-sub"><a href="#">Quần áo</a>
                                            <ul className="category-sub">
                                                <li><a href="shop.html">kithen one</a></li>
                                                <li><a href="shop.html">kithen two</a></li>
                                                <li><a href="shop.html">kithen three</a></li>
                                                <li><a href="shop.html">kithen four</a></li>
                                            </ul>
                                            {/* category submenu end*/}
                                        </li>
                                        <li className="has-sub"><a href="#">Phones &amp; Tablets</a>
                                            <ul className="category-sub">
                                                <li><a href="shop.html">phone one</a></li>
                                                <li><a href="shop.html">Tablet two</a></li>
                                                <li><a href="shop.html">Tablet three</a></li>
                                                <li><a href="shop.html">phone four</a></li>
                                            </ul>
                                            {/* category submenu end*/}
                                        </li>
                                        <li className="has-sub"><a href="#">TV &amp; Video</a>
                                            <ul className="category-sub">
                                                <li><a href="shop.html">smart tv</a></li>
                                                <li><a href="shop.html">real video</a></li>
                                                <li><a href="shop.html">Microphones</a></li>
                                                <li><a href="shop.html">Wireless Transmitters</a></li>
                                            </ul>
                                            {/* category submenu end*/}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* category-menu-end */}
                        </nav>
                    </div>
                </div>
                {/* Mobile Vertical Menu Start End */}
            </header>

        );
    }
}

// export default Header;
const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        deleteProduct: (product) => dispatch(Actions.deleteProductFromCart(product))
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));