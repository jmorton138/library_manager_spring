import React, { useState, useEffect } from 'react'
const ReactDOM = require('react-dom');
import Book from './Book';

export default function BookList() {
    const [error, setError] = useState('');
    const [books, setBooks] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("books")
          .then(res => res.json())
          .then(
            (result) => {
              setBooks(result);
              setIsLoaded(true);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
          )
        }, []);

       const bookComponents = books.map(book => {
          return <Book book={book} handleDelete={() => deleteBook(book.title)} />
       });

      const deleteBook = (title) => {
           fetch(`/books/${title}`, {
             method: 'delete',
             headers: { 'Content-Type': 'application/json' },
            })
           .then(() => {
             console.log(`${title} deleted`);
           })
           .catch((error) => {
             console.error(error);
           });
            setBooks(books => books.filter((book) => book.title !== title));
       }

        return (
            <table>
                <tbody>
                    <tr>
                        <th>Title</th>
                        <th>Category</th>
                    </tr>
                    {bookComponents}
                </tbody>
            </table>
        )


}
