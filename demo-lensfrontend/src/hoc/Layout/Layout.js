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
            </Children>
        );
    }
}

export default Layout;