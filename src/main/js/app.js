const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');
import BookList from './BookList';
import AddBook from './AddBook';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
              error: null,
              isLoaded: false,
              books: []
              }
    }

    componentDidMount() {
//        const response = await fetch('/books');
//        const body = await response.json();
//        this.setState({books: body});
    fetch("books")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            books: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }

    render() {
        const { error, isLoaded, books } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
        return (
            <div>
                <BookList books={books} />
                <AddBook/>
                </div>
            )
        }
    }
}



ReactDOM.render(
	<App />,
	document.getElementById('react')
)