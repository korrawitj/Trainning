import React from 'react';
import { NavLink } from 'react-router-dom';

import HomeLogo from '../../../assets/images/LogoHere.jpg';
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
                            <a className="nav-item nav-link active">Home <span className="sr-only">(current)</span></a>
                            <a className="nav-item nav-link">Features</a>
                            <a className="nav-item nav-link"> Pricing</a>
                            <a className="nav-item nav-link disabled" >Disabled</a>
                        </div>
                    </div>
                </nav>
            </div>
        </nav>
    </header>
);

export default toolbar;