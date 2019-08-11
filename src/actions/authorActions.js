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
  }
};

module.exports = AuthorActions;
