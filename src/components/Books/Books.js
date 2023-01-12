
import BookList from './BookList';

import classes from './Books.module.css';

const Books = () => {
    return (
        <section className={classes.books}>
            <h2>Available Books</h2>
            <div>
                <BookList />
            </div>
        </section>
    )
};

export default Books;