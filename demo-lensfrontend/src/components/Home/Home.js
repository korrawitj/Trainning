import React from 'react';
import pic1 from '../../assets/images/swiper/1.jpg';
import pic2 from '../../assets/images/swiper/3.jpg';
import pic3 from '../../assets/images/swiper/5.jpg';
import canon from '../../assets/images/Canon.png';
import nikon from '../../assets/images/Nikon.png';
import sony from '../../assets/images/Sony.png';
import fuji from '../../assets/images/Fujifilm.png';
import olym from '../../assets/images/Olympus.png';
import gopro from '../../assets/images/Gopro.png';
import osmo from '../../assets/images/Osmo.png';
import mirrorless from '../../assets/images/Mirrorless.png';
import access from '../../assets/images/Accessoriessss.png';
import './Home.css';
const Home = (props) =>
    (
        <div>
            <div id="demo" className="carousel slide" data-ride="carousel">

                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={pic1} alt="Los Angeles" width="100%" height="600" />
                        <div class="carousel-caption">
                            <h1>LensLineUp</h1>
                            <p>ร้านค้า LensLineUp</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={pic2} alt="Chicago" width="100%" height="600" />
                        <div class="carousel-caption">
                            <h1>LensLineUp</h1>
                            <p>ร้านค้า LensLineUp</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={pic3} alt="New York" width="100%" height="600" />
                        <div class="carousel-caption">
                            <h1>LensLineUp</h1>
                            <p>ร้านค้า LensLineUp</p>
                        </div>
                    </div>
                </div>

                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>
            <div className="container">
                <div className="row" style={{ margin: "0px", paddingTop: "20px" }}>

                    <div className="imgcard">
                        <div class="hovereffect">
                            <div className="portfolio-image">
                                <img src={canon} alt="pic" height="200px" />
                            </div>
                            <div class="overlay">
                                <h2>Canon</h2>
                                <a class="info" style={{ color: 'white' }}>ดูสินค้า</a>
                            </div>
                        </div>
                    </div>

                    <div className="imgcard">
                        <div class="hovereffect">
                            <div className="portfolio-image">
                                <img src={nikon} alt="pic" height="200px" />
                            </div>
                            <div class="overlay">
                                <h2>Nikon</h2>
                                <a class="info" style={{ color: 'white' }}>ดูสินค้า</a>
                            </div>
                        </div>
                    </div>
                    <div className="imgcard">
                        <div class="hovereffect">
                            <div className="portfolio-image">
                                <img src={sony} alt="pic" height="200px" />
                            </div>
                            <div class="overlay">
                                <h2>Sony</h2>
                                <a class="info" style={{ color: 'white' }}>ดูสินค้า</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ margin: "0px" }}>
                    <div className="imgcard">
                        <div class="hovereffect">
                            <div className="portfolio-image">
                                <img src={fuji} alt="pic" height="200px" />
                            </div>
                            <div class="overlay">
                                <h2>FujiFlim</h2>
                                <a class="info" style={{ color: 'white' }}>ดูสินค้า</a>
                            </div>
                        </div>
                    </div>
                    <div className="imgcard">
                        <div class="hovereffect">
                            <div className="portfolio-image">
                                <img src={olym} alt="pic" height="200px" />
                            </div>
                            <div class="overlay">
                                <h2>Olympus</h2>
                                <a class="info" style={{ color: 'white' }}>ดูสินค้า</a>
                            </div>
                        </div>
                    </div>
                    <div className="imgcard">
                        <div class="hovereffect">
                            <div className="portfolio-image">
                                <img src={gopro} alt="pic" height="200px" />
                            </div>
                            <div class="overlay">
                                <h2>GoPro</h2>
                                <a class="info" style={{ color: 'white' }}>ดูสินค้า</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ margin: "0px" }}>
                    <div className="imgcard">
                        <div class="hovereffect">
                            <div className="portfolio-image">
                                <img src={osmo} alt="pic" height="200px" />
                            </div>
                            <div class="overlay">
                                <h2>OSMO</h2>
                                <a class="info" style={{ color: 'white' }}>ดูสินค้า</a>
                            </div>
                        </div>
                    </div>
                    <div className="imgcard">
                        <div class="hovereffect">
                            <div className="portfolio-image">
                                <img src={mirrorless} alt="pic" height="200px" />
                            </div>
                            <div class="overlay">
                                <h2>Mirrorless</h2>
                                <a class="info" style={{ color: 'white' }}>ดูสินค้า</a>
                            </div>
                        </div>
                    </div>
                    <div className="imgcard">
                        <div class="hovereffect">
                            <div className="portfolio-image">
                                <img src={access} alt="pic" height="200px" />
                            </div>
                            <div class="overlay">
                                <h2>Accessories</h2>
                                <a class="info" style={{ color: 'white' }}>ดูสินค้า</a>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 style={{ textAlign: "center", paddingTop: "20px" }}>
                    <p>ร้าน LensLineup ให้เช่ากล้อง เช่าเลนส์ และ ให้เช่าอุปกรณ์ถ่ายภาพ DSLR Mirrorless ทุกระดับ</p>
                    <p>Canon · Nikon · Sony · Fujifilm · Olympus · GoPro · DJI OSMO / Ronin</p>
                    <p>ชั้น 2 ตึกฟรอนเทจ หน้าโรงแรมเอเชีย ติด BTS ราชเทวี กรุงเทพ</p></h4>
            </div>
        </div>
    );

export default Home;