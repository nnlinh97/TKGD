import React, { Component } from 'react';

class ImageBanner extends Component {
    render() {
        return (
            <div className="image-banner pb-50 off-white-bg">
                <div className="container">
                    <div className="col-img">
                        <a href="#">
                            <img src="img/banner/h1-banner.jpg" alt="image banner" />
                        </a>
                    </div>
                </div>
                {/* Container End */}
            </div>

        );
    }
}

export default ImageBanner;