import React, { useReducer } from "react";

import CartContext from "./cart-context";

const defaultReducerState = {
  books: [],
  amount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      return {
        books: state.books.concat(action.value),
        amount: state.amount + 1
      };
    }
    case 'REMOVE': {
      return {
        books: state.books.filter(book => book.isbn !== action.value),
        amount: state.amount - 1
      }
    }
    case 'CLEAR': {
      return defaultReducerState;
    }
    default: return state
  }
};

const CartCtxProvider = (props) => {
  const [cartState, cartDispatch] = useReducer(
    cartReducer,
    defaultReducerState
  );

  const addBookHandler = (book) => {
    cartDispatch({ type: "ADD", value: book });
  };

  const removeBookHandler = (bookISBN) => {
    cartDispatch({type: 'REMOVE', value: bookISBN})
    console.log(bookISBN)
  }

  const clearCartHandler = () => {
    cartDispatch({type: 'CLEAR'})
  }

  const cartContext = {
      books: cartState.books,
      amount: cartState.amount,
      addBook: addBookHandler,
      removeBook: removeBookHandler,
      clearCart: clearCartHandler
  }

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartCtxProvider;
