// import BookApi from "../api/bookApi";
import Dispatcher from "../dispatcher/appDispatcher";
import axios from "axios";

//Here add all crud actions for Books

const BookActions = {
  readBooks: function() {
    // const bookList = BookApi.getAllBooks();
    axios.get("http://localhost:3000/book").then(res => {
      Dispatcher.dispatch({
        actionType: "read_books",
        data: res.data
      });
    });
  },
  deleteBook: function(book) {
    axios
      .delete("http://localhost:3000/book/" + book.book_id)
      .then(() => {
        Dispatcher.dispatch({
          actionType: "delete_book",
          data: book
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  // editBook: function(book) {
  //   const new_title = prompt("Whats the new name of the book?", book.title);
  //   const new_author = prompt("What is the new Author id?", book.author);

  //   const newBook = {
  //     book_id: book.book_id,
  //     title: new_title,
  //     author: new_author
  //   };

  //   this.updateBook(newBook);
  // },

  updateBook: function(book) {
    axios
      .put("http://localhost:3000/book", book)
      .then(() => {
        Dispatcher.dispatch({
          actionType: "update_book",
          data: book
        });
      })
      .catch(err => {
        console.log(err);
      });
  },

  addBook: function(book) {
    axios
      .post("http://localhost:3000/book", book)
      .then(() => {
        Dispatcher.dispatch({
          actionType: "add_book",
          data: book
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
};

module.exports = BookActions;
