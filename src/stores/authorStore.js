import Dispatcher from "../dispatcher/appDispatcher";
import { EventEmitter } from "events";

const CHANGE_EVENT = "change";

let _authorStore = {
  authors: []
};

class AuthorStoreClass extends EventEmitter {
  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getAllAuthors() {
    return _authorStore.authors;
  }

  addAuthor(newAuthor) {
    _authorStore.authors.push(newAuthor);
  }

  updateAuthorList(author) {
    const index = _authorStore.authors.findIndex(elem => {
      return elem.id == author.id;
    });
    _authorStore.authors[index] = author;
  }

  deleteAuthor(author) {
    const newAuthorList = _authorStore.authors.filter(elem => {
      return elem.id !== author.id;
    });
    _authorStore.authors = newAuthorList;
  }
}

const AuthorStore = new AuthorStoreClass();

Dispatcher.register(action => {
  switch (action.actionType) {
    case "read_authors":
      _authorStore.authors = action.data;
      AuthorStore.emitChange();
      break;
    case "add_author":
      AuthorStore.addAuthor(action.data);
      AuthorStore.emitChange();
      break;
    case "update_author":
      AuthorStore.updateAuthorList(action.data);
      AuthorStore.emitChange();
      break;
    case "delete_author":
      AuthorStore.deleteAuthor(action.data);
      AuthorStore.emitChange();
      break;
    default:
      return;
  }
});

export default AuthorStore;
