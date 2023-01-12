import React, { useContext, useRef, useState } from "react";

import CartContext from "../../store/cart-context";

const BookForm = (props) => {
  const [isNotChecked, setIsNotChecked] = useState(false);
  const [duplicateBook, setDuplicateBook] = useState(false);

  const cartCtx = useContext(CartContext);
  const checkedInputRef = useRef();


  let errorMessage;

  if (isNotChecked) {
    errorMessage = <p>You must check the box to add a book!</p>
  }

  if (duplicateBook) {
    errorMessage = <p>You can only have one of each book!</p>
  }

  const isError = duplicateBook || isNotChecked; 

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      checkedInputRef.current.checked &&
      !cartCtx.books.includes(props.book)
    ) {
      cartCtx.addBook(props.book);
      setDuplicateBook(false);
      setIsNotChecked(false);
      checkedInputRef.current.checked = false;
    } else if (!checkedInputRef.current.checked) {
      setIsNotChecked(true);
      return;
    } else if (cartCtx.books.includes(props.book)) {
      setDuplicateBook(true);
      return;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="checked">Add Book to Cart</label>
          <input ref={checkedInputRef} type="checkbox" id="checked"></input>
        </div>
        <button>Add to Cart</button>
      </form>
      {isError && errorMessage}
    </div>
  );
};

export default BookForm;
