import React, { Component } from "react";

class AddBook extends Component {
  render() {
    return (
      <div>
        <h2>Add Book</h2>
        <form action="">
          <label htmlFor="">
            Book ISBN: <input type="text" />
          </label>
          <label htmlFor="">
            Book Title: <input type="text" />
          </label>

          <label htmlFor="">
            Author: <input type="text" />
          </label>

          <button type="submit"> Submit </button>
        </form>
      </div>
    );
  }
}

export default AddBook;
