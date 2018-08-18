import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './ProductItem.css'
class ProductItem extends Component {
    render() {
        return (
            <div className="product clearfix">
                <div className="feature-box center media-box fbox-bg">
                    <div className="fbox-media image-box">
                        <div className="product-image">     
                            <a href="#"><img src={this.props.Picture} alt="Light Blue Denim Dress" /></a>
                            <div className="product-overlay">
                                <a href="#" class="add-to-cart"><i className="icon-shopping-cart"></i><span> Add to Cart</span></a>
                                <a href="include/ajax/shop-item.html" className="item-quick-view" data-lightbox="ajax"><i className="icon-zoom-in2"></i><span> Quick View</span></a>
                            </div>
                        </div>                                             
                    </div>
                    <div className="fbox-desc">
                        <h3><NavLink to="ProductDetail"> {this.props.Name}</NavLink><span class="subtitle">{this.props.PricePerDay}</span></h3>
                        <p><NavLink to="ProductDetail" className="add-to-cart button nomargin">รายละเอียดสินค้า</NavLink></p>
                    </div>
                </div>
            </div>

        );
    }
}

export default ProductItem;
