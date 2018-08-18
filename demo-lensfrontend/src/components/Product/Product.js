import React, { Component } from 'react';
import ProductItem from '../ProductItem/ProductItem'
import CameraPicture from '../../assets/Canon-5d-Mark-IV-500x500.png'
import './Product.css'
import '../../assets/canvas/style.css'

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ProductList: [
                {
                    Name: "Nikon AF-S 24-70mm f/2.8E ED VR Nano ",
                    Picture: CameraPicture,
                    PricePerDay: "1500 บาท/วัน",
                    Description: "Desc 1"
                },
                {
                    Name: "Nikon AF-S 24-70mm f/2.8E ED VR Nano",
                    Picture: CameraPicture,
                    PricePerDay: "1000 บาท/วัน",
                    Description: "Desc 2"
                },
                {
                    Name: "Nikon AF-S 24-70mm f/2.8E ED VR Nano",
                    Picture: CameraPicture,
                    PricePerDay: "1000 บาท/วัน",
                    Description: "Desc 3"
                },
                {
                    Name: "Nikon AF-S 24-70mm f/2.8E ED VR Nano",
                    Picture: CameraPicture,
                    PricePerDay: "1000 บาท/วัน",
                    Description: "Desc 3"
                },
                {
                    Name: "Nikon AF-S 24-70mm f/2.8E ED VR Nano",
                    Picture: CameraPicture,
                    PricePerDay: "1000 บาท/วัน",
                    Description: "Desc 3"
                },
                {
                    Name: "Nikon AF-S 24-70mm f/2.8E ED VR Nano",
                    Picture: CameraPicture,
                    PricePerDay: "1000 บาท/วัน",
                    Description: "Desc 3"
                },
                {
                    Name: "Nikon AF-S 24-70mm f/2.8E ED VR Nano",
                    Picture: CameraPicture,
                    PricePerDay: "1000 บาท/วัน",
                    Description: "Desc 3"
                }
            ]
        }
    }
    render() {
        return (
            <div className="clearfix ">
                <section id="page-title">
                    <div className="container clearfix">
                        <h1>รายการสินค้าทั้งหมด</h1>
                        <span>ค้นหาสินค้าที่ต้องการ</span>
                    </div>
                    <div className="container">
                        <form class="form-inline">
                            <label className="sr-only" for="inlineFormInput">Name</label>
                            <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Jane Doe" />
                            <select className="custom-select mb-2 mr-sm-2 mb-sm-0" id="inlineFormCustomSelect">
                                <option value="">-- Select One --</option>
                                <option value="Wordpress">Canon</option>
                                <option value="PHP / MySQL">FUJI / MySQL</option>
                                <option value="HTML5 / CSS3">Nikon</option>
                                <option value="Graphic Design">Olimpus</option>
                            </select>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>

                    {/* <div className="container">
                        <div className="col-sm-10 form-group-lg">
                        <form className="form-group">
                            <input className="form-control mr-sm-2 " type="search" placeholder="ค้นหาสินค้า" aria-label="Search" />

                            <select id="template-contactform-service" name="template-contactform-service" className="form-control mr-sm-2 ">
                                <option value="">-- Select One --</option>
                                <option value="Wordpress">Canon</option>
                                <option value="PHP / MySQL">FUJI / MySQL</option>
                                <option value="HTML5 / CSS3">Nikon</option>
                                <option value="Graphic Design">Olimpus</option>
                            </select>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                        </div>                       
                    </div> */}

                </section>
                <section id="content">
                    <div className="content-wrap b">
                        <div className="container clearfix">
                            <div className="shop grid-container clearfix topic-center">
                                <h1 className="product-price topic-left">รายการกล้องเลนส์ ให้เช่าทั้งหมด</h1>
                                <div className="line"></div>
                                {this.state.ProductList.map(t =>
                                    <ProductItem Name={t.Name} Description={t.Description} PricePerDay={t.PricePerDay} Picture={t.Picture}></ProductItem>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="#">«</a></li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">4</a></li>
                        <li className="page-item"><a className="page-link" href="#">5</a></li>
                        <li className="page-item"><a className="page-link" href="#">»</a></li>
                    </ul>

                </section>

            </div>
        );
    }
}

export default Product;
