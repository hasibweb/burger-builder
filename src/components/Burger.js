import React from 'react';
import './BurgerIngredient.css';
import { Consumer } from '../context/context';

const BurgerIngredient = props => <div className={props.ingredient.charAt(0).toLocaleUpperCase() + props.ingredient.substr(1)}></div>;

const Burger = () => {
    return (
        <Consumer>
            {context => {
                const { burger } = context.state;
                const ingredients = Object.keys(burger)
                    .map(igKey => [...Array(burger[igKey])].map((_, i) => (
                        <BurgerIngredient
                            ingredient={igKey}
                            key={igKey + i} />
                    )))
                    .reduce((acc, ing) => {
                        ing.forEach(c => acc.push(c))
                        return acc;
                    }, [])

                return (
                    <div className="Burger">
                        <div className="BreadTop"></div>
                        {ingredients.length ? ingredients : <p className="text-center">Please add an Item</p>}
                        <div className="BreadBottom"></div>
                    </div>
                )
            }}
        </Consumer>

    )
}



export default Burger;