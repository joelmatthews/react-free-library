import { useContext, useState } from "react";
import CartList from "./CartList";
import Modal from "../UI/Modal";

import CartContext from "../../store/cart-context";
import useHttp from "../../hooks/useHttp";

const Cart = (props) => {
  const [reservationId, setReservationId] = useState('')
  const [didReserve, setDidReserve] = useState(false);
  const cartCtx = useContext(CartContext);
  const { isLoading, error, getData: postCart } = useHttp();

  const clearCartHandler = () => {
    cartCtx.clearCart();
  };

  const applyData = (data) => {
    setReservationId(data.name)
  };

  const reserveSubmitHandler = (event) => {
    event.preventDefault();

    if (cartCtx.books.length > 0) {
    
      postCart({
        url: "https://react-practice-free-library-default-rtdb.firebaseio.com/reservations.json",
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          reservedBooks: cartCtx.books,
          reservationNumber: Math.floor(Math.random() * 1000 + 1),
        }),
      }, applyData);
      setDidReserve(true);
    }
  };


  let reservationFormContent = (
    <form onSubmit={reserveSubmitHandler}>
      <button>Reserve</button>
    </form>
  );

  if (isLoading) {
    reservationFormContent = <p>Submitting your reservation...</p>;
  }

  if (didReserve) {
      reservationFormContent = <p>Successfully reserved your books! Your reservation id# is {`${reservationId}`}</p>
  }

  if (error) {
    console.log(error);
    reservationFormContent = <p>Error submitting your reservation!</p>;
  }


  return (
    <Modal onHideCart={props.onHideCart} onDidReserve={didReserve} onClearCart={clearCartHandler}>
      <CartList />
      {reservationFormContent}
    </Modal>
  );
};

export default Cart;
