import BookForm from "./BookForm";

import classes from "./BookItem.module.css";

const BookItem = (props) => {
  return (
    <li className={classes['book-item']}>
      <div>
        <h3>{props.name}</h3>
        <p>{props.isbn}</p>
      </div>
      <BookForm book={{name: props.name, isbn: props.isbn}}/>
    </li>
  );
};

export default BookItem;
