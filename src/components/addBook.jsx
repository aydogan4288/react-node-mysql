import React, { Component } from "react";
import BookActions from "../actions/bookActions";

class AddBook extends Component {
  constructor(props) {
    super(props);

    this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: "",
      author: ""
    };
  }

  onChangeBookTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeAuthor(e) {
    this.setState({
      author: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const book = {
      title: this.state.title,
      author: this.state.author
    };
    BookActions.addBook(book);
    this.setState({
      title: "",
      author: ""
    });
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h2>Add Book</h2>
        <form onSubmit={this.onSubmit}>
          <div>
            <label> Book Title: </label>
            <input
              type="text"
              value={this.state.title}
              onChange={this.onChangeBookTitle}
            />
          </div>
          <label> Author: </label>
          <input
            type="text"
            value={this.state.author}
            onChange={this.onChangeAuthor}
          />
          <div />
          <input type="submit" value="Add Book" />
        </form>
      </div>
    );
  }
}

export default AddBook;
