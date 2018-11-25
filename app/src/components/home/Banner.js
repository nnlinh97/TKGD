import React, { Component } from 'react';
import ProductSidebar from './ProductSidebar';

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    
    componentDidMount() {
        const products = JSON.parse(localStorage.getItem('products'));
        let list = [];
        for (let i = 0; i < 8; i++) {
            list.push(products[i]);
        }
        this.setState({
            products: list
        })
    }
    
    render() {
        let {products} = this.state;
        let list = '';
        if(products.length > 0){
            list = products.map((product, index) => {
                return (
                    <ProductSidebar
                        key={index}
                        product={product}
                    />
                );
            })
        }
        return (
            <div className="main-page-banner pb-50 off-white-bg">
                <div className="container">
                    <div className="row">
                        {/* Vertical Menu Start Here */}
                        <div className="col-xl-3 col-lg-4 d-none d-lg-block">
                            <div className="vertical-menu mb-all-30">
                                <nav>
                                    <ul className="vertical-menu-list" style={{}}>
                                        <li ><a href="shop.html"><span><img src="img/vertical-menu/1.png" alt="menu-icon" /></span>Sữa<i className="fa fa-angle-right" aria-hidden="true" /></a>
                                            <ul className="ht-dropdown mega-child">
                                                <li><a href="shop.html">Nhãn hiệu <i className="fa fa-angle-right" /></a>
                                                    {/* category submenu end*/}
                                                    <ul className="ht-dropdown mega-child">
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
                                                    {/* category submenu end*/}
                                                </li>
                                                <li><a href="shop.html">Độ tuổi <i className="fa fa-angle-right" /></a>
                                                    {/* category submenu end*/}
                                                    <ul className="ht-dropdown mega-child">
                                                        <li><a href="shop.html">0 - 3 tháng</a></li>
                                                        <li><a href="shop.html">3 - 6 tháng</a></li>
                                                        <li><a href="shop.html">6 - 9 tháng</a></li>
                                                        <li><a href="shop.html">9 - 12 tháng</a></li>
                                                        <li><a href="shop.html">12 - 18 tháng</a></li>
                                                        <li><a href="shop.html">18 - 24 tháng</a></li>
                                                        <li><a href="shop.html">2 - 4 tuổi</a></li>
                                                    </ul>
                                                    {/* category submenu end*/}
                                                </li>
                                                <li><a href="shop.html">Đánh giá</a></li>
                                            </ul>
                                            {/* category submenu end*/}
                                        </li>
                                        <li><a href="shop.html"><span><img src="img/vertical-menu/3.png" alt="menu-icon" /></span>Đồ
                  dùng vệ sinh<i className="fa fa-angle-right" aria-hidden="true" /></a>
                                            {/* Vertical Mega-Menu Start */}
                                            <ul className="ht-dropdown megamenu first-megamenu">
                                                {/* Single Column Start */}
                                                <li className="single-megamenu">
                                                    <ul>
                                                        <li className="menu-tile">Bỉm và Tã giấy</li>
                                                        <li><a href="shop.html">Merries</a></li>
                                                        <li><a href="shop.html">Goon</a></li>
                                                        <li><a href="shop.html">Huggies</a></li>
                                                        <li><a href="shop.html">Bobby</a></li>
                                                        <li><a href="shop.html">Pamper</a></li>
                                                        <li><a href="shop.html">Bosomi</a></li>
                                                    </ul>
                                                </li>
                                                {/* Single Column End */}
                                                {/* Single Column Start */}
                                                <li className="single-megamenu">
                                                    <ul>
                                                        <li className="menu-tile">Đồ dùng vệ sinh</li>
                                                        <li><a href="shop.html">Sữa tắm</a></li>
                                                        <li><a href="shop.html">Phấn rôm</a></li>
                                                        <li><a href="shop.html">Nước hoa</a></li>
                                                        <li><a href="shop.html">Kem trị hăm</a></li>
                                                        <li><a href="shop.html">Khăn giấy, khăn ướt</a></li>
                                                        <li><a href="shop.html">Các đồ dùng khác</a></li>
                                                    </ul>
                                                </li>
                                                {/* Single Column End */}
                                                {/* Single Megamenu Image Start */}
                                                <li className="megamenu-img">
                                                    <a href="shop.html"><img src="img/vertical-menu/sub-img1.jpg" alt="menu-image" /></a>
                                                    <a href="shop.html"><img src="img/vertical-menu/sub-img2.jpg" alt="menu-image" /></a>
                                                </li>
                                                {/* Single Megamenu Image End */}
                                            </ul>
                                            {/* Vertical Mega-Menu End */}
                                        </li>
                                        <li><a href="shop.html"><span><img src="img/vertical-menu/6.png" alt="menu-icon" /></span>Quần
                  áo &amp; Thời trang<i className="fa fa-angle-right" aria-hidden="true" /></a>
                                            {/* Vertical Mega-Menu Start */}
                                            <ul className="ht-dropdown megamenu megamenu-two">
                                                {/* Single Column Start */}
                                                <li className="single-megamenu">
                                                    <ul>
                                                        <li className="menu-tile">Đồ sơ sinh</li>
                                                        <li><a href="shop.html">Khăn mặt, khăn tắm</a></li>
                                                        <li><a href="shop.html">Quần áo sơ sinh</a></li>
                                                        <li><a href="shop.html">Yếm ăn</a></li>
                                                        <li><a href="shop.html">Mũ, Bao tay, Tất chân</a></li>
                                                        <li><a href="shop.html">Đồ dùng khác</a></li>
                                                    </ul>
                                                </li>
                                                {/* Single Column End */}
                                                {/* Single Column Start */}
                                                <li className="single-megamenu">
                                                    <ul>
                                                        <li className="menu-tile">Quần áo bé trai</li>
                                                        <li><a href="shop.html">Áo bé trai</a></li>
                                                        <li><a href="shop.html">Quần bé trai</a></li>
                                                        <li><a href="shop.html">Giày dép</a></li>
                                                        <li><a href="shop.html">Mũ nón</a></li>
                                                        <li><a href="shop.html">Phụ kiện</a></li>
                                                    </ul>
                                                </li>
                                                {/* Single Column End */}
                                                {/* Single Column Start */}
                                                <li className="single-megamenu">
                                                    <ul>
                                                        <li className="menu-tile">Quần áo bé gái</li>
                                                        <li><a href="shop.html">Áo bé gái</a></li>
                                                        <li><a href="shop.html">Quần bé gái</a></li>
                                                        <li><a href="shop.html">Váy</a></li>
                                                        <li><a href="shop.html">Giày dép</a></li>
                                                        <li><a href="shop.html">Mũ nón</a></li>
                                                        <li><a href="shop.html">Phụ kiện</a></li>
                                                    </ul>
                                                </li>
                                                <li className="megamenu-img">
                                                    <a href="shop.html"><img src="img/vertical-menu/sub-img1.jpg" alt="menu-image" /></a>
                                                </li>
                                                {/* Single Column End */}
                                            </ul>
                                            {/* Vertical Mega-Menu End */}
                                        </li>
                                        <li><a href="shop.html"><span><img src="img/vertical-menu/7.png" alt="menu-icon" /></span>Đồ
                  chơi<i className="fa fa-angle-right" aria-hidden="true" /></a>
                                            {/* Vertical Mega-Menu Start */}
                                            <ul className="ht-dropdown megamenu megamenu-three">
                                                {/* Single Column Start */}
                                                <li className="single-megamenu">
                                                    <ul>
                                                        <li><a href="shop.html">Đồ chơi sơ sinh</a></li>
                                                        <li><a href="shop.html">Đồ chơi xếp hình</a></li>
                                                        <li><a href="shop.html">Đồ chơi LEGO</a></li>
                                                        <li><a href="shop.html">Đồ chơi giáo dục</a></li>
                                                        <li><a href="shop.html">Đồ chơi điều khiển từ xa</a></li>
                                                        <li><a href="shop.html">Các loại đồ chơi khác</a></li>
                                                    </ul>
                                                </li>
                                                {/* Single Column End */}
                                                <li className="megamenu-img">
                                                    <a href="shop.html"><img src="img/vertical-menu/sub-img1.jpg" alt="menu-image" /></a>
                                                </li>
                                            </ul>
                                            {/* Vertical Mega-Menu End */}
                                        </li>
                                        <li><a href="shop.html"><span><img src="img/vertical-menu/4.png" alt="menu-icon" /></span>Mẹ
                  bầu và sau sinh<i className="fa fa-angle-right" aria-hidden="true" />
                                        </a>
                                            {/* Vertical Mega-Menu Start */}
                                            <ul className="ht-dropdown megamenu megamenu-three">
                                                {/* Single Column Start */}
                                                <li className="single-megamenu">
                                                    <ul>
                                                        <li className="menu-tile">Đồ dùng chung</li>
                                                        <li><a href="shop.html">Máy hút sữa</a></li>
                                                        <li><a href="shop.html">Mỹ phẩm và làm đẹp</a></li>
                                                        <li><a href="shop.html">Dầu gội, sữa tắm</a></li>
                                                    </ul>
                                                    <br />
                                                    <ul>
                                                        <li className="menu-tile">Thời trang cho mẹ bầu</li>
                                                        <li><a href="shop.html">Quần áo</a></li>
                                                        <li><a href="shop.html">Kem chống rạn da</a></li>
                                                        <li><a href="shop.html">Sữa cho mẹ bầu</a></li>
                                                    </ul>
                                                </li>
                                                {/* Single Column End */}
                                                {/* Single Column Start */}
                                                <li className="single-megamenu">
                                                    <ul>
                                                        <li className="menu-tile">Thời trang cho mẹ sau sinh</li>
                                                        <li><a href="shop.html">Gel bụng - Nịt bụng</a></li>
                                                        <li><a href="shop.html">Túi đựng đồ mẹ và bé</a></li>
                                                        <li><a href="shop.html">Áo cho con bú</a></li>
                                                    </ul>
                                                    <br /><br />
                                                    <ul>
                                                        <li className="megamenu-img">
                                                            <a href="shop.html"><img src="img/vertical-menu/sub-img1.jpg" alt="menu-image" /></a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                {/* Single Column End */}
                                            </ul>
                                            {/* Vertical Mega-Menu End */}
                                        </li>
                                        <li><a href="shop.html"><span><img src="img/vertical-menu/5.png" alt="menu-icon" /></span>Khuyến
                  mãi</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="highlight-searching">
                                <div className="highlight-searching-title">
                                    <span>Tìm kiếm nổi bật</span>
                                </div>
                                <br />
                                <div className="highlight-searching-btn">
                                    <button type="button" className="btn btn-outline-secondary">Bobby</button>
                                    <button type="button" className="btn btn-outline-secondary">Huggies</button>
                                    <button type="button" className="btn btn-outline-secondary">Quần áo sơ sinh</button>
                                    <button type="button" className="btn btn-outline-secondary">Similac</button>
                                    <button type="button" className="btn btn-outline-secondary">Bao tay</button>
                                    <button type="button" className="btn btn-outline-secondary">Kem chống rạn da</button>
                                    <button type="button" className="btn btn-outline-secondary">Sữa cho mẹ bầu</button>
                                    <button type="button" className="btn btn-outline-secondary">Sữa tắm</button>
                                    <button type="button" className="btn btn-outline-secondary">Phấn rôm</button>
                                    <button type="button" className="btn btn-outline-secondary">LEGO</button>
                                    <button type="button" className="btn btn-outline-secondary">Tã giấy</button>
                                    <button type="button" className="btn btn-outline-secondary">Friso</button>
                                    <button type="button" className="btn btn-outline-secondary">Merries</button>
                                </div>
                            </div>
                        </div>
                        {/* Vertical Menu End Here */}
                        {/* Slider Area Start Here */}
                        <div className="col-xl-9 col-lg-8 d-none d-lg-block">
                            <div className="row">
                                {/* <ProductSidebar/>
                                <ProductSidebar/>
                                <ProductSidebar/>
                                <ProductSidebar/>
                                <ProductSidebar/>
                                <ProductSidebar/>
                                <ProductSidebar/>
                                <ProductSidebar/> */}
                                {list}
                            </div>
                        </div>
                        {/* Slider Area End Here */}
                    </div>
                    {/* Row End */}
                </div>
                {/* Container End */}
            </div>


        );
    }
}

export default Banner;