import { useContext } from "react";

import CartContext from "../../store/cart-context";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);


    
    const showCart = () => {
    props.onShowCart();
  };
  return (
    <button onClick={showCart} className={classes["cart-button"]}>
      <span>Books: {`${cartCtx.books.length}`}</span>
    </button>
  );
};

export default HeaderCartButton;
