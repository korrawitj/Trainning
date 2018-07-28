import React from 'react';
import { NavLink } from 'react-router-dom';

import HomeLogo from '../../../assets/images/logo.png';

const toolbar = (props) => (
    <header>
        <nav className="navbar navbar-expand-sm bg-light navbar-light fixed-top">
            <div className="container">
                <NavLink className="navbar-brand" exact to="/">
                    <img src={HomeLogo} alt="Logo" style={{ width: '150px' }} />
                </NavLink>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink exact to="/" className="nav-link">หน้าหลัก</NavLink>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">บริการหลังการขาย</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">เกี่ยวกับเรา</a>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/Login" className="btn btn-outline-primary">เข้าสู่ระบบ</NavLink>
                    </li>
                    <li className="nav-item">
                        <i className="fa fa-cart-arrow-down nav-link" style={{fontSize: '25px'}}></i>
                    </li>

                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;