import React, { Component } from 'react';

import Children from '../Children/Children';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Navigation/Footer/Footer';
// import classes from './Layout.css';

class Layout extends Component {
    render() {
        return (
            <Children>
                <Toolbar />
                <div className="container-fluid" style={{ marginTop: '80px' }}>
                    <main>
                        {this.props.children}
                    </main>
                </div>
                <Footer />
            </Children>
        );
    }
}

export default Layout;