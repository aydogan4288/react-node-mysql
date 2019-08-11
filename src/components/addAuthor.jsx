import React, { Component } from "react";

class AddAuthor extends Component {
  render() {
    return (
      <div>
        <h2>Add Author</h2>
        <form action="">
          <label htmlFor="">
            Author ID: <input type="text" />
          </label>
          <label htmlFor="">
            Author Name: <input type="text" />
          </label>
          <button type="submit"> Submit </button>
        </form>
      </div>
    );
  }
}

export default AddAuthor;
