import React from 'react';

import swiper from '../../assets/images/swiper/2.jpg';
import './About.css'
import addline from '../../assets/images/addline.png';

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
                        <h1>LensLineUp</h1>
                        <h1>ติดต่อเรา</h1>
                    </div>
                </div>
            </div>
            <div className="container clear-bottommargin clearfix" style={{ marginTop: '30px' }}>
                <div className="row clearfix">
                    <div className="col-md-6" style={{ textAlign: "center" }}>
                        <h3>แผนที่ตั้งร้าน</h3>
                    </div>
                    <div className="col-md-6" style={{ textAlign: "center" }}>
                        <h3>รายละเอียด</h3>
                    </div>
                </div>
                <div className="row clearfix" style={{ marginTop: '30px' }}>
                    <div className="col-md-6">
                        <div style={{ marginBottom: "40px" }}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.4569636752017!2d100.52912231474906!3d13.75129420101033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ecb5f62dbef%3A0x5065c1ddaa6c5b85!2z4Lij4LmJ4Liy4LiZIGxlbnNsaW5ldXAg4LmD4Lir4LmJ4LmA4LiK4LmI4Liy4LiB4Lil4LmJ4Lit4LiH4LiW4LmI4Liy4Lii4Lij4Li54LibIOC5gOC4iuC5iOC4suC5gOC4peC4meC4quC5jCB8IERTTFIgTUlSUk9STEVTUyBHT1BSTw!5e0!3m2!1sth!2sth!4v1534498389371"
                                width="100%"
                                frameBorder="0"
                                style={{ border: "0", height: "450px" }}
                                title="Map"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                    <div className="col-md-6" style={{ whiteSpace: "pre-wrap", textAlign: "left" }}>
                        <p><strong>ร้าน Lenslineup</strong></p>
                        <p>ให้เช่ากล้อง เลนส์ DSLR กล้อง GoPro</p>
                        <p>ให้เช่ากล้อง Mirrorless และอุปกรณ์ถ่ายภาพ</p>
                        <p>ชั้น 2 ตึกฟรอนเทจ หน้าโรงแรมเอเชีย ติด BTS ราชเทวี</p>
                        <p>วันจันทร์-เสาร์ 11.30น.- 19.00น. หยุดวันอาทิตย์</p>
                        <p><strong>Tel : </strong>02-611-0695,080-818-8872,080-818-8873,080-818-8874</p>
                        <p><strong>Email : </strong>lenslineuprental@gmail.com</p>
                        <p><strong>Website : </strong><a href="https:www.lenslineup.com">www.lenslineup.com</a></p>
                        <p><strong>Facebook : </strong><a href="https:www.facebook.com/lenslineup">www.facebook.com/lenslineup</a></p>
                        <p>
                            <strong>Line ID : @lenslineup : </strong>
                            <a href="https://line.me/R/ti/p/%40zmb4858w"><img src={addline} alt="addline" style={{ width: "120px" }} /></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default about;