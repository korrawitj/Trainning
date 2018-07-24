import React from 'react';

import Children from '../../hoc/Children';
import classes from './Layout.css';

const layout = (props) => (
    <Children>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Children>
); 

export default layout;