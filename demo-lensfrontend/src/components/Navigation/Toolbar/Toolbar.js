import React from 'react';
import { NavLink } from 'react-router-dom';

import HomeLogo from '../../../assets/images/logo-final-2x.png';
import './Toolbar.css';
const toolbar = (props) => (
    <header>
        <nav className="navbar navbar-expand-sm navbar-light fixed-top">
            <NavLink className="navbar-brand" exact to="/">
                <img src={HomeLogo} alt="Logo" className="logo" />
            </NavLink>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item"><NavLink className="nav-link textcolor" exact to="/">หน้าหลัก</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link textcolor" to="/">รายการทั้งหมด</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link textcolor" to="/">DSLR</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link textcolor" to="/">Mirrorless</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link textcolor" to="/">GoPro</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link textcolor" to="/">วีดีโอ</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link textcolor" to="/">ขั้นตอนการเช่า/เงื่อนไข</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link textcolor" to="/About">ติดต่อเรา</NavLink></li>
                <li className="nav-item"><NavLink to="/Login" className="btn btn-outline-primary">เข้าสู่ระบบ</NavLink></li>
                <div className="vl"></div>
                <li className="nav-item">
                    <i className="fa fa-cart-arrow-down nav-link" style={{ fontSize: '25px', cursor: 'pointer' }}></i>
                </li>
            </ul>
        </nav>
    </header>
);

export default toolbar;