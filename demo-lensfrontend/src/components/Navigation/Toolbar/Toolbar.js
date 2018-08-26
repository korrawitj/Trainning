import React from 'react';
import { NavLink } from 'react-router-dom';

import HomeLogo from '../../../assets/images/logo-final-2x.png';
import './Toolbar.css';
const toolbar = (props) => (
    <header>
        <nav className="navbar navbar-expand-sm navbar-light fixed-top main">
            <NavLink className="navbar-brand" exact to="/">
                <img src={HomeLogo} alt="Logo" className="logo" />
            </NavLink>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item"><NavLink className="nav-link textcolor" exact to="/" >หน้าหลัก</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link textcolor" to="/AllProduct">รายการทั้งหมด</NavLink></li>
                <li className="nav-item"><a className="nav-link" disabled>DSLR</a></li>
                <li className="nav-item"><a className="nav-link" disabled>Mirrorless</a></li>
                <li className="nav-item"><a className="nav-link textcolor" href="https://www.goprolineup.com/">GoPro</a></li>
                <li className="nav-item"><a className="nav-link" disabled>วีดีโอ</a></li>
                <li className="nav-item"><NavLink className="nav-link textcolor" to="/Howtorent">ขั้นตอนการเช่า/เงื่อนไข</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link textcolor" to="/About">ติดต่อเรา</NavLink></li>
                <li className="nav-item"><NavLink to="/Login" className="btn btn-outline-primary">เข้าสู่ระบบ</NavLink></li>
                <div className="vl"></div>
                <li className="nav-item">
                    <i className="fa fa-cart-arrow-down nav-link" style={{ fontSize: '25px', cursor: 'pointer' }}></i>
                </li>
            </ul>
        </nav>
        <nav className="navbar navbar-light burger"style={{padding:".5rem 2rem 1rem"}}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <NavLink className="navbar-brand mx-auto" exact to="/">
                <img src={HomeLogo} alt="Logo" style={{ width: "100px",backgroundColor: "black"}}  />
            </NavLink>
            <ul className="navbar-nav">
                <div className="vl"></div>
                <li className="nav-item">
                    <i className="fa fa-cart-arrow-down nav-link" style={{ fontSize: '25px', cursor: 'pointer' }}></i>
                </li>
            </ul>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
                <li className="nav-item"><NavLink className="nav-link textcolor" exact to="/">หน้าหลัก</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link textcolor" to="/AllProduct">รายการทั้งหมด</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link textcolor" to="/">DSLR</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link textcolor" to="/">Mirrorless</NavLink></li>
                <li className="nav-item"><a className="nav-link textcolor" href="https://www.goprolineup.com/">GoPro</a></li>
                <li className="nav-item"><NavLink className="nav-link textcolor" to="/">วีดีโอ</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link textcolor" to="/Howtorent">ขั้นตอนการเช่า/เงื่อนไข</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link textcolor" to="/About">ติดต่อเรา</NavLink></li>
            </ul>
  </div>

        </nav>
    </header>  
);

export default toolbar;