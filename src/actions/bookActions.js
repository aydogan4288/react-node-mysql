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
  }
};

module.exports = BookActions;
