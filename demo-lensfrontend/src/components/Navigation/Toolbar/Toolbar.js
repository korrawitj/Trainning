import React from 'react';
import { NavLink } from 'react-router-dom';

import HomeLogo from '../../../assets/images/LogoHere.jpg';

const toolbar = (props) => (
    <header>
        <nav className="navbar navbar-expand-sm bg-light navbar-light fixed-top">
            <div className="container">
                <NavLink className="navbar-brand" exact to="/">
                    <img src={HomeLogo} alt="Logo" style={{ width: '80px' }} />
                </NavLink>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink exact to="/" className="nav-link">หน้าหลัก</NavLink>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="">บริการหลังการขาย</a>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/About" className="nav-link">เกี่ยวกับเรา</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/Login" className="btn btn-outline-primary">เข้าสู่ระบบ</NavLink>
                    </li>
                    <li className="nav-item">
                        <i className="fa fa-cart-arrow-down nav-link" style={{fontSize: '25px', cursor: 'pointer'}}></i>
                    </li>

                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;