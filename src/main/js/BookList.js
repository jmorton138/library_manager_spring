const React = require('react');
const ReactDOM = require('react-dom');
import Book from './Book';

export default function BookList(props) {
    const books = props.books.map(book => {
          console.log(book);
          return <Book book={book}/>
       });

        return (
            <table>
                <tbody>
                    <tr>
                        <th>Title</th>
                        <th>Category</th>
                    </tr>
                    {books}
                </tbody>
            </table>
        )


}
