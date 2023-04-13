import React, { useState, useEffect } from 'react'
const ReactDOM = require('react-dom');
import Book from './Book';
import {Table, Container} from 'reactstrap';

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
            <Container className='mt-5'>
                <Table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookComponents}
                    </tbody>
                </Table>
            </Container>
        )


}
