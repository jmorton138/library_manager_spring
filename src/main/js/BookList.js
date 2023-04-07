const React = require('react');
const ReactDOM = require('react-dom');
import Book from './Book';

class BookList extends React.Component {
//    componentDidMount() {
//        console.log("test");
//    }
    render() {
        const books = this.props.books.map(book => {
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

}

export default BookList;