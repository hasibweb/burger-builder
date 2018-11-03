import React, { Component } from 'react'

const Context = React.createContext();

export class Provider extends Component {
    state = {
        burger: {
            meat: 1,
            salad: 1,
            cheese: 1,
            bacon: 1
        },
        prices: {
            basePrice: 4,
            pices: {
                meat: 0.5,
                salad: 0.7,
                cheese: 0.8,
                bacon: 1
            }
        }
    }
    // Increment Ingredient
    increment = (igName) => {
        const burger = { ...this.state.burger };
        if (burger[igName] <= 2) {
            burger[igName]++;
            this.setState({ burger })

            this.pricesCount(igName, 'increment')
        }

    }
    // Decrement Ingredient
    decrement = (igName) => {
        const burger = { ...this.state.burger };
        if (burger[igName] >= 1) {
            burger[igName]--;
            this.setState({ burger })

            this.pricesCount(igName, 'decrement')
        }

    }
    // pricesCount
    pricesCount = (igName, countVal) => {
        const { prices } = { ...this.state };

        if (countVal === 'increment') {
            prices.basePrice += prices.pices[igName];
            this.setState({ prices })
        }
        else if (countVal === 'decrement') {
            prices.basePrice -= prices.pices[igName];
            this.setState({ prices })
        }
    }
    render() {
        return (
            <Context.Provider value={{
                state: this.state,
                increment: this.increment,
                decrement: this.decrement
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;