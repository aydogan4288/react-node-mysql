"use strict";

import React from "react";
import PropTypes from "prop-types";
import BookActions from "../actions/bookActions";
import { Link } from "react-router-dom";

export class BookList extends React.Component {
  createBookRow(book) {
    return (
      <tr key={book.id}>
        <td> {book.book_id} </td>
        <td> {book.title} </td>
        <td> {book.author} </td>
        <td>
          <Link to={"/edit/" + this.book_id} type="button">
            Edit
          </Link>
        </td>
        <td>
          {" "}
          <button>Delete</button>{" "}
        </td>
      </tr>
    );
  }

  UNSAFE_componentWillMount() {
    BookActions.readBooks();
  }

  render() {
    return (
      <div>
        <h1>Books</h1>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{this.props.bookList.map(this.createBookRow, this)}</tbody>
        </table>
      </div>
    );
  }
}

BookList.propTypes = {
  bookList: PropTypes.array.isRequired
};
