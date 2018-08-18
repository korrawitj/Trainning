import React from 'react';
import { NavLink } from 'react-router-dom';

import HomeLogo from '../../../assets/images/logo-final-2x.png';
import './Toolbar.css';
const toolbar = (props) => (
    <header>
        <nav className="navbar navbar-expand-sm bg-light navbar-light fixed-top">
            <div className="container">

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <NavLink className="navbar-brand" exact to="/">
                        <img src={HomeLogo} alt="Logo" className="logo" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-item nav-link" exact to="/">หน้าหลัก</NavLink>
                            <NavLink className="nav-item nav-link" to="/">รายการทั้งหมด</NavLink>
                            <NavLink className="nav-item nav-link" to="/">DSLR</NavLink>
                            <NavLink className="nav-item nav-link" to="/">Mirrorless</NavLink>
                            <NavLink className="nav-item nav-link" to="/">GoPro</NavLink>
                            <NavLink className="nav-item nav-link" to="/">วีดีโอ</NavLink>
                            <NavLink className="nav-item nav-link" to="/">ขั้นตอนการเช่า/เงื่อนไข</NavLink>
                            <NavLink className="nav-item nav-link" to="/About">ติดต่อเรา</NavLink>
                        </div>
                    </div>
                </nav>
            </div>
        </nav>
    </header>
);

export default toolbar;