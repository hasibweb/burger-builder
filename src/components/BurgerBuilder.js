import React, { Component } from 'react'
import Burger from './Burger';
import BuildControl from './BuildControl';

class BurgerBuilder extends Component {

    render() {
        return (
            <div className="row burger-builder">
                <div className="col-md-6 order-2 order-md-1">
                    <BuildControl />
                </div>
                <div className="col-md-6 order-1 order-md-2">
                    <Burger />
                </div>

            </div>
        )
    }
}

export default BurgerBuilder;