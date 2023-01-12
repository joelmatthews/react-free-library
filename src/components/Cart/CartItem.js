import React, { useContext } from 'react';

import CartContext from '../../store/cart-context';



const CartItem = (props) => {
    const cartCtx = useContext(CartContext);


    const cartItemFormSubmissionHandler = (event) => {   
        event.preventDefault();
        cartCtx.removeBook(props.isbn)

    };

    return (
        <li>
            <h3>{props.name}</h3>
            <p>{props.isbn}</p>
            <form onSubmit={cartItemFormSubmissionHandler}>
                <button>Remove From Cart</button>
            </form>
        </li>
    )
};

export default CartItem;