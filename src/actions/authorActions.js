// import AuthorApi from "../api/authorApi";
import Dispatcher from "../dispatcher/appDispatcher";
import axios from "axios";

const AuthorActions = {
  readAuthors: function() {
    // const authorList = AuthorApi.getAllAuthors();
    axios.get("http://localhost:3000/author").then(res => {
      Dispatcher.dispatch({
        actionType: "read_authors",
        data: res.data
      });
    });
  },
  editAuthor: function(author) {
    const name = prompt("What is the Authors name?", author.author_name);

    const newAuthor = {
      id: author.id,
      author_name: name
    };
    this.updateAuthor(newAuthor);
  },
  updateAuthor: function(author) {
    axios
      .put("http://localhost:3000/author", author)
      .then(() => {
        Dispatcher.dispatch({
          actionType: "update_author",
          data: author
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  deleteAuthor: function(author) {
    axios
      .delete("http://localhost:3000/author/" + author.id)
      .then(() => {
        Dispatcher.dispatch({
          actionType: "delete_author",
          data: author
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  addAuthor: function(author) {
    axios
      .post("http://localhost:3000/author", author)
      .then(() => {
        Dispatcher.dispatch({
          actionType: "add_author",
          data: author
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
};

module.exports = AuthorActions;
