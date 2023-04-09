const React = require('react');
const ReactDOM = require('react-dom');
import UpdateBook from './UpdateBook';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';

export default function Book(props) {

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

        }
        return (
        <tr>
            <td>{props.book.title}</td>
            <td>{props.book.category}</td>
            <td>
                <ButtonGroup>
                    <Button size="sm" color="primary" tag={Link} to={"/books/" + props.book.title}>Edit</Button>
                    <Button size="sm" color="danger" onClick={() => { deleteBook(props.book.title)}}>Delete</Button>

                </ButtonGroup>
            </td>
        </tr>
        )

}

