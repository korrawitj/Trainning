import React, { Component } from 'react';

import Children from '../Children/Children';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
// import classes from './Layout.css';

class Layout extends Component {
    render() {
        return (
            <Children>
                <Toolbar />
                <div className="container" style={{ marginTop: '100px' }}>
                    <main>
                        {this.props.children}
                    </main>
                </div>
                <div className="jumbotron text-center" style={{marginBottom: 0, marginTop: '10%'}}>
                    <p>Footer</p>
                </div>
            </Children>
        );
    }
}

export default Layout;