import { createContext } from 'react';

const CartContext = createContext({
    books: [],
    amount: 0,
    addBook: () => {},
    removeBook: () => {},
    clearCart: () => {}
})

export default CartContext;