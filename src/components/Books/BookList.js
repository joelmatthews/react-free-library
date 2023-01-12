import BookItem from "./BookItem";

import classes from "./BookList.module.css";
import useHttp from "../../hooks/useHttp";
import { useEffect, useState } from "react";


const BookList = () => {
  const { isLoading, error, getData: getBooks } = useHttp();
  const [books, setBooks] = useState([]);

  const transformData = (data) => {
    let books = [];

    for (let bookKey in data) {
      books.push({
        id: bookKey,
        name: data[bookKey].name,
        isbn: data[bookKey].ISBN,
      });
    }

    setBooks(books);
  };

  useEffect(() => {
    getBooks(
      {
        url: "https://react-practice-free-library-default-rtdb.firebaseio.com/books.json",
      },
      transformData
    );
  }, [getBooks]);

  let content;

  content = books.map((book) => (
    <BookItem name={book.name} isbn={book.isbn} key={book.id} />
  ));

  if (error) {
    content = <li className={classes.error}>{error}</li>
  }

  if (isLoading) {
    content = <li className={classes.loading}>Loading...</li>
  }

  

  return <ul className={classes["book-list"]}>{content}</ul>;
};

export default BookList;
