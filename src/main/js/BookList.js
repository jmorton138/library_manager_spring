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
              console.log(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
          )
        }, []);

       const bookComponents = books.map(book => {
          const bookKey = 'book-' + book.id;
          return <Book book={book} key={bookKey} handleDelete={() => deleteBook(book.id)} />
       });

      const deleteBook = (id) => {
           fetch(`/books/${id}`, {
             method: 'delete',
             headers: { 'Content-Type': 'application/json' },
            })
           .then(() => {
             console.log(`${id} deleted`);
           })
           .catch((error) => {
             console.error(error);
           });
            setBooks(books => books.filter((book) => book.id !== id));
       }

        return (
            <Container className='mt-5'>
                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
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
