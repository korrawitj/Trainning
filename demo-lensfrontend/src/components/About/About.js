import React from 'react';

import swiper from '../../assets/images/swiper/2.jpg';
import './About.css'

const about = (props) => (
    <div style={{ marginTop: '80px' }}>
        <div className="content-wrap">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                </ol>
            </div>
            <div className="carousel-inner">
                <div className="item active">
                    <img src={swiper} alt="LensLineUp" style={{ width: '100%' }} />
                    <div className="carousel-caption">
                        <h3>LensLineUp</h3>
                        <p>ติดต่อเรา</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default about;