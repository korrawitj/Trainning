import React, { Component } from 'react';

import Children from '../Children/Children';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
// import classes from './Layout.css';

class Layout extends Component {
    render() {
        return (
            <Children>
                <Toolbar />
                <div className="container" style={{ marginTop: '100px', paddingBottom: '100px' }}>
                    <main>
                        {this.props.children}
                    </main>
                </div>
                <footer className="fixed-bottom">
                    <nav className="navbar navbar-expand-sm bg-info navbar-dark ml-auto">
                        <p>Demo App</p>
                    </nav>
                </footer>
            </Children>
        );
    }
}

export default Layout;