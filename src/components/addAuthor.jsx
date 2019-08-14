import React, { Component } from "react";
import AuthorActions from "../actions/authorActions";

class AddAuthor extends Component {
  constructor(props) {
    super(props);

    this.onChangeAuthorName = this.onChangeAuthorName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      author_name: ""
    };
  }

  onChangeAuthorName(e) {
    this.setState({
      author_name: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const author = {
      author_name: this.state.author_name
    };
    AuthorActions.addAuthor(author);
    this.setState({
      author_name: ""
    });
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h2>Add Author</h2>
        <form onSubmit={this.onSubmit}>
          <label> Author: </label>
          <input
            type="text"
            value={this.state.author_name}
            onChange={this.onChangeAuthorName}
          />
          <div />
          <input type="submit" value="Add Author" />
        </form>
      </div>
    );
  }
}

export default AddAuthor;
