import React, { Component } from 'react';

import Children from '../Children/Children';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Navigation/Footer/Footer';
import ScrollToTop from '../../../src/components/ScrolltoTop/ScrolltoTop';
// import classes from './Layout.css';

class Layout extends Component {
    render() {
        return (
            <Children>
                <Toolbar />
                <div className="container-fluid" style={{ marginTop: '0rem' }}>
                    <main>
                    <ScrollToTop>
                        {this.props.children}
                        </ScrollToTop>
                    </main>
                </div>
                <Footer />
            </Children>
        );
    }
}

export default Layout;