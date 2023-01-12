import React, { useState } from "react";

import Header from "./components/Header/Header";
import Books from "./components/Books/Books";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./store/CartContextProvider";

function App() {
  const [cartShown, setIsCartShown] = useState(false);

  const showCartHandler = () => {
    setIsCartShown(true);
  };
  
  const hideCartHandler = (didReserve) => {
    setIsCartShown(false);
  };

  return (
    <CartContextProvider>
      {cartShown && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Books />
      </main>
    </CartContextProvider>
  );
}

export default App;
