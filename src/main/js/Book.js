const React = require('react');
const ReactDOM = require('react-dom');
import UpdateBook from './UpdateBook';
import { Link, useHistory } from 'react-router-dom';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';

export default function Book(props) {
        let history = useHistory();
        console.log(props);

        return (
        <tr>
            <td>{props.book.title}</td>
            <td>{props.book.category}</td>
            <td>
                <ButtonGroup>
                    <Button size="sm" color="primary" tag={Link} to={"/books/" + props.book.title}>Edit</Button>
                    <Button size="sm" color="danger" onClick={props.handleDelete}>Delete</Button>

                </ButtonGroup>
            </td>
        </tr>
        )

}

