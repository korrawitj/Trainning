import React, { Component } from 'react';

import Children from '../../hoc/Children';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {

    //     }
    // }
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render() {
        return (
            <Children>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls />
            </Children>
        );
    }
}

export default BurgerBuilder;