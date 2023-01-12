import { useContext } from 'react';

import CartContext from '../../store/cart-context';
import CartItem from './CartItem';




const CartList = () => {
    const cartCtx = useContext(CartContext);

    let content = <p>No Books Found!</p>

    if (cartCtx.books.length > 0) {
        content = cartCtx.books.map(book => <CartItem name={book.name} isbn={book.isbn} key={cartCtx.books.indexOf(book)}/>)
    }
    
    return (
        <ul>
            {content}
        </ul>
    )
};

export default CartList;