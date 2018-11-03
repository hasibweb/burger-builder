import React from 'react';
import { Consumer } from '../context/context';
import uuid from 'uuid'


// Build Control
function BuildControl() {
    return (
        <div>
            <Consumer>
                {context => {
                    const { state: { burger, prices } } = context;
                    const controls = Object.keys(burger).map(igKey => (
                        <Control key={uuid()} name={igKey} />
                    ))
                    return (
                        <div>
                            <div className="price text-center bg-dark mt-3 p-2 text-white ">Prices: <span className="badge badge-primary font-weight-bold">{prices.basePrice.toFixed(2)}$</span></div>
                            {controls}
                            <button className="btn btn-success my-3 btn-block">Order Now</button>
                        </div>
                    )
                }}
            </Consumer>
        </div>
    )
}



// Single Pice of Control
const Control = (props) => {
    const { name } = props;
    return (
        <Consumer>
            {context => {
                const { increment, decrement, state: { prices: { basePrice, pices } } } = context;

                console.log()
                return (
                    <div className="build-control">
                        <ul className="list-group mt-3">
                            <li className="list-group-item">{name.charAt(0).toLocaleUpperCase() + name.substr(1)}
                                <span className="float-right">
                                    <button onClick={() => increment(name)} className="btn btn-info mr-2">+</button>
                                    <button onClick={() => decrement(name)} className="btn btn-warning">-</button>
                                </span>
                                <span className="base-price float-right mx-4">{pices[name]}</span>
                            </li>
                        </ul>

                    </div>
                )
            }}
        </Consumer>

    )
}


// Final Order
const finalOrder = (props) => {
    return;
}

export default BuildControl;