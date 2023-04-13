import React, { useState, useEffect } from 'react'
const ReactDOM = require('react-dom');
const client = require('./client');
import BookList from './BookList';
import AddBook from './AddBook';
import UpdateBook from './UpdateBook';
import AppNavBar from './AppNavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
    const [error, setError] = useState('');
    const [books, setBooks] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);


//        const { error, isLoaded, books } = this.state;
//        if (error) {
//          return <div>Error: {error.message}</div>;
//        } else if (!isLoaded) {
//          return <div>Loading...</div>;
//        } else {
        return (
                <div>
                <AppNavBar/>
                <Router>
                    <Switch>
                        <Route path='/create'>
                            <AddBook />
                        </Route>
                         <Route path='/read'>
                            <BookList />
                         </Route>
                         <Route path='/books/:title' component={UpdateBook}/>
                    </Switch>
                </Router>
                </div>

            )
//        }
}

ReactDOM.render(
	<App />,
	document.getElementById('react')
)