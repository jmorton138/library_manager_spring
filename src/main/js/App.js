import React, { useState, useEffect } from "react";
const ReactDOM = require("react-dom");
const client = require("./client");
import BookList from "./BookList";
import AddBook from "./AddBook";
import UpdateBook from "./UpdateBook";
import AppNavBar from "./AppNavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const [error, setError] = useState("");
  const [books, setBooks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div>
      <AppNavBar />
      <Router>
        <Switch>
          <Route path="/create">
            <AddBook />
          </Route>
          <Route path="/read">
            <BookList />
          </Route>
          <Route path="/books/:id" component={UpdateBook} />
        </Switch>
      </Router>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("react"));