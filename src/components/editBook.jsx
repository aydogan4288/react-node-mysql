import React, { Component } from "react";
import axios from "axios";
import BookActions from "../actions/bookActions";

class EditBook extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.state = {
      title: "",
      author: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/book/edit/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          book_id: "No need to change the Id",
          title: response.data.title,
          author: response.data.author
        });

        console.log("response id: " + response.data.book_id);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeAuthor(e) {
    console.log(e);
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
    BookActions.updateBook(book);

    this.props.history.push("/");
  }
  render() {
    return (
      <div>
        <h3>Update Book</h3>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Book Title: </label>
            <input
              type="text"
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </div>
          <div>
            <label>Author: </label>
            <input
              type="text"
              value={this.state.author}
              onChange={this.onChangeAuthor}
            />
          </div>
          <div>
            <input type="submit" value="Update" />
          </div>
        </form>
      </div>
    );
  }
}

export default EditBook;
