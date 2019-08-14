"use strict";

import React from "react";
import BookActions from "../actions/bookActions.js";

export class BookEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      book_id: "",
      title: "",
      author: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.onChangeAuthorName = this.onChangeAuthorName.bind(this);
    this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
  }

  handleUpdateSubmit() {
    const book = {
      book_id: this.state.book_id,
      title: this.state.title,
      author: this.state.author
    };
    // console.log(author);
    BookActions.updateBook(book);
  }

  onChangeAuthorName(e) {
    author: e.targe.value;
  }

  onChangeBookTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  render() {
    return (
      <div>
        <p>Update Book</p>
        <form name="input">
          <label>
            {" "}
            Book ID:
            <input
              type="number"
              placeholder=" Book ID"
              name="book_id"
              onChange={this.handleChange}
            />
          </label>

          <label>
            {" "}
            Book Title:
            <input
              type="text"
              placeholder="Book Title"
              name="title"
              onChange={this.onChangeBookTitle}
            />
          </label>
          <label>
            {" "}
            Author Name:
            <input
              type="text"
              placeholder="Author name"
              name="author"
              onChange={this.onChangeAuthorName}
            />
          </label>
          <button type="button" onClick={this.handleUpdateSubmit}>
            Update
          </button>
        </form>
      </div>
    );
  }
}
