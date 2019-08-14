"use strict";

import React from "react";
import PropTypes from "prop-types";
import { BookList } from "../components/BookList";
import { BookEdit } from "../components/BookEdit.jsx";
import { Link } from "react-router-dom";

export class Books extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/add-books" replace>
            <button>
              <span>Add Book</span>
            </button>
          </Link>
        </div>
        <br />
        <hr />
        <div>
          <BookEdit />
        </div>
        <div>
          <BookList bookList={this.props.bookList} />
        </div>
      </div>
    );
  }
}

Books.propTypes = {
  bookList: PropTypes.array.isRequired
};
