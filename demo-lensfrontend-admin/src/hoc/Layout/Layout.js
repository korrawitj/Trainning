import React, { Component } from 'react';

import Children from '../Children/Children';

class Layout extends Component {
    render() {
        return (
            <Children>
                {this.props.children}
            </Children>
        );
    }
}

export default Layout;