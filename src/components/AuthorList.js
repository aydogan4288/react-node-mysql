"use strict";

import React from "react";
import PropTypes from "prop-types";
import AuthorActions from "../actions/authorActions";

export class AuthorList extends React.Component {
  createAuthorRow(author) {
    return (
      <tr key={author.id}>
        <td> {author.id} </td>
        <td> {author.author_name} </td>
        <td>
          {" "}
          <button> Edit </button>
        </td>
        <td>
          {" "}
          <button> Delete </button>
        </td>
      </tr>
    );
  }

  UNSAFE_componentWillMount() {
    AuthorActions.readAuthors();
  }

  render() {
    return (
      <div>
        <h1>Authors</h1>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{this.props.authorList.map(this.createAuthorRow, this)}</tbody>
        </table>
      </div>
    );
  }
}

AuthorList.propTypes = {
  authorList: PropTypes.array.isRequired
};
