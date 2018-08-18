import React from 'react';
// import { NavLink } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Footer.css';
const footer = (props) => (
    <div className="Footer">
        <div className="footers" style={{ marginBottom: '0' }}>
        <div className="row" style={{marginBottom: '0'}}>
            <div className="col-md-4">
                    <p><NavLink  exact to="/" className="white">กล้อง เลนส์ ทั้งหมด</NavLink></p>
                    <p><NavLink  exact to="/" className="white">กล้อง เลนส์ DSLR</NavLink></p>
                    <p><NavLink  exact to="/" className="white">กล้อง เลนส์ Mirrorless</NavLink></p>
                    <p><NavLink  exact to="/" className="white">กล้อง เลนส์ Cannon</NavLink></p>
                    <p><NavLink  exact to="/" className="white">กล้อง เลนส์ Nikon</NavLink></p>
                    <p><NavLink  exact to="/" className="white">กล้อง เลนส์ Sony</NavLink></p>
                    <p><NavLink  exact to="/" className="white">กล้อง เลนส์ Fujiflim</NavLink></p>
                    <p><NavLink  exact to="/" className="white">กล้อง เลนส์ Olympus</NavLink></p>
                    <p><NavLink  exact to="/" className="white">กล้อง GoPro</NavLink></p>
                    <p><NavLink  exact to="/" className="white">กล้อง Video</NavLink></p>
                    <p><NavLink  exact to="/About" className="white">กล้อง DJI</NavLink></p>
            </div>
            <div className="col-md-4">
            <p>โปรโมชั่นปัจจุบัน</p> 
            <p>โปรโมชั่น</p>    
            <p>- เช่า 7 วัน จ่าย 5 วัน</p>
            <p>- เช่า 4 วัน จ่าย 3 วัน</p>
            <p>เช่าเกิน 7 วันลดราคาพิเศษคำนวนได้จากในระบบ</p>
            </div>
            <div className="col-md-4">
            <div className="fb-page" data-href="https://www.facebook.com/lenslineup/" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/lenslineup/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/lenslineup/">ให้เช่ากล้องเลนส์ DSLR Mirrorless GoPro - ร้าน Lenslineup.com</a></blockquote></div>
            </div>
            </div>
        </div>
        <div className="dark">
        <i className="fa fa-copyright"></i> Copyright 2014-2018 lenslineup.com | All Rights Reserved | Powered by LensHost System           
            </div>
    </div>
);

export default footer;