import React, { Component } from 'react';
import Header from '../components/home/Header';
import Sidebar from '../components/home/Sidebar';
import ProductSidebar from '../components/home/ProductSidebar';
import HotDeals from '../components/home/HotDeals';
import Footer from '../components/home/Footer';
import Banner from '../components/home/Banner';
import ImageBanner from '../components/home/ImageBanner';
import ArrivalsProduct from '../components/home/ArrivalsProduct';
import SecondArrivalsProduct from '../components/home/SecondArrivalsProduct';
import LikeProduct from '../components/home/LikeProduct';

var listProductBanner = [
    {
        id: 1,
        name: 'Bộ 5 sinh vật biển phun nước Munchkin 31205',
        image: 'https://media.shoptretho.com.vn/upload/image/product/20160919/bo-sinh-vat-bien-nho-munchkin-mk31205-1.jpg?mode=max&width=153&height=153',
        price: '199,000',
        sale: 20,
        salePrice: '159,000'
    },
    {
        id: 2,
        name: 'Hộp xúc xích 5 chiếc',
        image: 'https://media.shoptretho.com.vn/upload/image/product/20141006/hop-xuc-xac-5-chiec.jpg?mode=max&width=153&height=153',
        price: '115,000',
        sale: 25,
        salePrice: '86,000'
    },
    {
        id: 3,
        name: 'Xe 3 bánh Peppa Pig',
        image: 'https://media.shoptretho.com.vn/upload/image/product/20180917/xe-dap-3-banh-peppa-pig-7.jpg?mode=max&width=153&height=153',
        price: '350,000',
        sale: 30,
        salePrice: '245,000'
    },
    {
        id: 4,
        name: 'Cầu trượt thú mini có bóng rổ',
        image: 'https://media.shoptretho.com.vn/upload/image/product/20180924/cau-truot-tre-em-mang-dai-kem-bong-ro-2.JPG?mode=max&width=153&height=153',
        price: '1,050,000',
        sale: 10,
        salePrice: '945,000'
    },
    {
        id: 5,
        name: 'Đồ chơi đàn Piano 3341',
        image: 'https://media.shoptretho.com.vn/upload/image/product/20180920/do-choi-dan-piano-3341.jpg?mode=max&width=153&height=153',
        price: '159,000',
        sale: 27,
        salePrice: '116,000'
    },
    {
        id: 6,
        name: 'Thảm xốp 2 mặt in hình ngộ nghĩnh',
        image: 'https://media.shoptretho.com.vn/upload/image/product/20180828/tham-xop-2-mat-nhieu-hinh-3.jpg?mode=max&width=153&height=153',
        price: '360,000',
        sale: 15,
        salePrice: '306,000'
    },
    {
        id: 7,
        name: 'Quần cộc Miomio in hình',
        image: 'https://media.shoptretho.com.vn/upload/image/product/20140530/img-0075.jpg?mode=max&width=153&height=153',
        price: '30,000',
        sale: 10,
        salePrice: '27,000'
    },
    {
        id: 8,
        name: 'Bộ bao tay sơ sinh kuku',
        image: 'https://media.shoptretho.com.vn/upload/image/product/20140105/1236911-set-2-c-p-ku2346-03.jpg?mode=max&width=153&height=153',
        price: '75,000',
        sale: 15,
        salePrice: '63,000'
    },
    {
        id: 9,
        name: 'Gối cao su chống ngạt',
        image: 'https://media.shoptretho.com.vn/upload/image/product/20140903/goi-chong-ngat-kuku-2047-cho-be-2.jpg?mode=max&width=153&height=153',
        price: '459,000',
        sale: 25,
        salePrice: '344,000'
    },
    {
        id: 10,
        name: 'Chăn xô cotton Aden Anais',
        image: 'https://media.shoptretho.com.vn/upload/image/product/20180828/chan-xo-cotton-aden-anais-2.jpg?mode=max&width=153&height=153',
        price: '229,000',
        sale: 19,
        salePrice: '185,000'
    },
]
class Home extends Component {
    render() {
        localStorage.setItem('products', JSON.stringify(listProductBanner))
        return (
            <div className="wrapper">
                <Header />
                <Banner />
                <HotDeals />
                <ImageBanner/>
                {/* <ArrivalsProduct/> */}
                <SecondArrivalsProduct/>
                <LikeProduct/>
                <Footer />
            </div>
        );
    }
}

export default Home;