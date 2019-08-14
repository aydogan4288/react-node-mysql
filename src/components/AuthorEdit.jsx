"use strict";

import React from "react";
import AuthorActions from "../actions/authorActions.js";

export class AuthorEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      author_name: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
  }

  handleUpdateSubmit() {
    const author = {
      id: this.state.id,
      author_name: this.state.author_name
    };
    AuthorActions.updateAuthor(author);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  render() {
    return (
      <div>
        <h4>Update Author </h4>
        <br />
        <form name="input">
          <label>
            {" "}
            Author ID:
            <input
              type="number"
              placeholder="Author id"
              name="id"
              onChange={this.handleChange}
              pattern="^-?[0-9]\d*\.?\d*$"
            />
          </label>
          <label>
            {" "}
            Author Name:
            <input
              type="text"
              placeholder="author name"
              name="author_name"
              onChange={this.handleChange}
            />
          </label>
          <button type="button" onClick={this.handleUpdateSubmit}>
            Update
          </button>
        </form>
        <hr />
      </div>
    );
  }
}
