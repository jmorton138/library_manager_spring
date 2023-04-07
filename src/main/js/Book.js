const React = require('react');
const ReactDOM = require('react-dom');

class Book extends React.Component {

    render() {
        return (
        <tr>
            <td>{this.props.book.title}</td>
            <td>{this.props.book.category}</td>
        </tr>
        )
    }
}

export default Book;