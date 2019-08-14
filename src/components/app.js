"use strict";

import React from "react";
import { Switch, Route } from "react-router-dom";
import { Header } from "./header.js";
import { Home } from "./home.js";
import { Books } from "./books.js";
import { Authors } from "./authors.js";
import BookStore from "../stores/bookStore";
import AuthorStore from "../stores/authorStore";
import AddBook from "./addBook.jsx";
import AddAuthor from "./addAuthor.jsx";
import EditAuthor from "./editAuthor.jsx";
import EditBook from "./editBook.jsx";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: [],
      authorList: []
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add-books" component={AddBook} />
          <Route path="/add-authors" component={AddAuthor} />

          <Route
            path="/edit-book/:id"
            render={props => (
              <EditBook {...props} bookList={this.state.bookList} />
            )}
          />
          <Route path="/edit-author/:id" component={EditAuthor} />

          <Route
            path="/books"
            render={props => (
              <Books {...props} bookList={this.state.bookList} />
            )}
          />
          <Route
            path="/authors"
            render={props => (
              <Authors {...props} authorList={this.state.authorList} />
            )}
          />
        </Switch>
      </div>
    );
  }

  UNSAFE_componentWillMount() {
    BookStore.addChangeListener(this._onBookChange.bind(this));
    AuthorStore.addChangeListener(this._onAuthorChange.bind(this));
  }

  UNSAFE_componentWillUnmount() {
    BookStore.removeChangeListener(this._onBookChange.bind(this));
    AuthorStore.removeChangeListener(this._onAuthorChange.bind(this));
  }

  _onBookChange() {
    this.setState({ bookList: BookStore.getAllBooks() });
  }

  _onAuthorChange() {
    this.setState({ authorList: AuthorStore.getAllAuthors() });
  }
}
