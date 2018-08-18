import React, { Component } from 'react';
import CameraPicture from '../../assets/Canon-5d-Mark-IV-500x500.png'
import CameraPicture2 from '../../assets/rx0-500x500.png'
import CameraPicture3 from '../../assets/sony-a7riii-upper-500x500.png'
import './ProductItemDetail.css'
import '../../assets/canvas/style.css'
class ProductItemDetail extends Component {
    render() {
        return (
            <div>
                <section id="page-title">
                    <div className="container clearfix left">
                        <h1 className="product-price">Canon EOS 5D Mark IV Body</h1>
                    </div>
                </section>
                <section id="content">
                    <div className="content-wrap left">
                        <div className="container clearfix">
                            <div className="single-product">
                                <div className="product">
                                    <div className="col_two_fifth">
                                        <div className="product-image">
                                            <div className="fslider">
                                                <div className="flexslider">
                                                    <div className="flex-viewport">
                                                        <img src={CameraPicture} alt="Logo"  />
                                                    </div>
                                                </div>
                                                <ol className="flex-control-nav flex-control-thumbs">
                                                    <li>
                                                        <img src={CameraPicture3} alt="Logo" />
                                                    </li>
                                                    <li>
                                                        <img src={CameraPicture} alt="Logo" />
                                                    </li>
                                                    <li>
                                                        <img src={CameraPicture3} alt="Logo" />
                                                    </li>
                                                    <li>
                                                        <img src={CameraPicture} alt="Logo" />
                                                    </li>
                                                    <li>
                                                        <img src={CameraPicture3} alt="Logo" />
                                                    </li>
                                                    <li>
                                                        <img src={CameraPicture} alt="Logo" />
                                                    </li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col_two_fifth product-desc">
                                        <div className="product-price">Canon EOS 5D Mark IV Body</div>
                                        <div className="product-price">ราคาเช่าต้่อวัน <ins>$24.99</ins></div>
                                        <div className="clear"></div>
                                        <div className="line"></div>
                                        <h3>โปรโมชั่นแนะนำ</h3>
                                        <ul className="iconlist">
                                            <li>เช่า 7 วัน ราคา 4,550 - 3,250 บาท</li>
                                            <li><i className="icon-caret-right"></i>เช่า 4 วัน ราคา 2,600 - 1,950 บาท</li>
                                        </ul>

                                        <div className="clear"></div>
                                        <div className="line"></div>
                                        <form id="login-form" name="login-form" className="nobottommargin" action="#" method="post">
                                            <h3>จองสินค้า</h3>
                                            <div className="col_full">
                                                <label for="login-form-username">วันรับสินค้า:</label>
                                                <input type="date" className="form-control" />
                                            </div>

                                            <div className="col_full">
                                                <label for="login-form-password">วันคืนสินค้า:</label>
                                                <input type="date" className="form-control" />
                                            </div>
                                            <div className="col_full nobottommargin">
                                                <button className="button button-3d nomargin" id="login-form-submit" name="login-form-submit" value="login">ตรวจสอบ คิวจอง</button>
                                            </div>
                                        </form>

                                        <div className="clear"></div>
                                        <div className="line"></div>

                                    </div>
                                    <div className="col_full nobottommargin">
                                        <div className="tabs clearfix nobottommargin ui-tabs ui-corner-all ui-widget ui-widget-content">
                                            <ul className="tab-nav clearfix ui-tabs-nav ui-corner-all ui-helper-reset ui-helper-clearfix ui-widget-header">
                                                <li className="ui-tabs-tab ui-corner-top ui-state-default ui-tab ui-tabs-active ui-state-active">
                                                    <a href="#tabs-2" role="presentation" tabindex="-1" className="ui-tabs-anchor" id="ui-id-2"><i className="icon-info-sign"></i><span class="d-none d-md-block"> เกี่ยวกับกล้อง และอุปกร์เสริม</span></a>
                                                </li>
                                            </ul>
                                            <div className="tab-container">
                                                <div className="tab-content clearfix ui-tabs-panel ui-corner-bottom ui-widget-content">
                                                    <h3>Specifications</h3>
                                                    <ul >
                                                        <li><i ><h6>ขนาดเซ็นเซอร์ : Full-Frame CMOS 30.4 ล้านพิกเซล DUAL-PIXEL</h6></i></li>
                                                        <li><i ></i><h6>Video : 4K 30fps , 1080p 60fps , 720p 120fps</h6></li>
                                                        <li><i ></i><h6>ถ่ายภาพต่อเนื่อง : 7 ภาพต่อวินาที</h6></li>
                                                        <li><i ></i><h6>จอ Touch-Screen 3.2″ 1.62 ล้าน DOT</h6></li>
                                                        <li><i ></i><h6>ISO : 100 – 32,000 (Extended Mode 50 – 102,400)</h6></li>
                                                    </ul>
                                                    <h3>อุปกรณ์ที่ให้ไปด้วย</h3>
                                                    <ul >
                                                        <li><i ><h6>แบตเตอรี่ LP-E6N 2 ก้อน</h6></i></li>
                                                        <li><i ></i><h6>กระเป๋ากล้อง</h6></li>
                                                        <li><i ></i><h6>แท่นชาร์ตแบตเตอรี่</h6></li>
                                                        <li><i ></i><h6>SD Card Sandisk Extreme PRO 64GB 95Mb/s</h6></li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clear"></div>
                            <div className="line"></div>
                            <div className="col_full nobottommargin">
                                <h4>สินค้าอื่นๆ</h4>
                                <div id="oc-product" className="owl-carousel product-carousel carousel-widget owl-loaded owl-drag">
                                    <div className="owl-stage-outer">
                                        <div className="owl-stage">
                                            <div className="owl-item active">
                                                <div className="oc-item">
                                                    <div className="product iproduct clearfix">
                                                        <div className="product-image">
                                                            <a ><img src={CameraPicture3} alt="Light Blue Denim Dress" /></a>
                                                            <div className="product-overlay">
                                                                <a  class="add-to-cart"><i className="icon-shopping-cart"></i><span> Add to Cart</span></a>
                                                                <a href="include/ajax/shop-item.html" className="item-quick-view" data-lightbox="ajax"><i className="icon-zoom-in2"></i><span> Quick View</span></a>
                                                            </div>
                                                        </div>
                                                        <div className="product-desc center">
                                                            <div className="product-title"><h3><a >Light Blue Denim Dress</a></h3></div>
                                                            <div className="product-price">$19.95</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="owl-item">
                                                <div className="oc-item">
                                                    <div className="product iproduct clearfix">
                                                        <div className="product-image">
                                                            <a ><img src={CameraPicture3} alt="Light Blue Denim Dress" /></a>
                                                            <div className="product-overlay">
                                                                <a  class="add-to-cart"><i className="icon-shopping-cart"></i><span> Add to Cart</span></a>
                                                                <a href="include/ajax/shop-item.html" className="item-quick-view" data-lightbox="ajax"><i className="icon-zoom-in2"></i><span> Quick View</span></a>
                                                            </div>
                                                        </div>
                                                        <div className="product-desc center">
                                                            <div className="product-title"><h3><a >Light Blue Denim Dress</a></h3></div>
                                                            <div className="product-price">$19.95</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-nav">
                                        <button type="button" role="presentation" className="owl-prev">
                                            <i class="icon-angle-left"></i></button>
                                        <button type="button" role="presentation" className="owl-next disabled">
                                            <i className="icon-angle-right"></i></button>
                                    </div>
                                    <div className="owl-dots disabled"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

            </div>
        );
    }
}
export default ProductItemDetail