"use strict";

var authors = require("./authorModel").authors;

var _clone = function(item) {
  return JSON.parse(JSON.stringify(item));
};

var AuthorApi = {
  getAllAuthors: function() {
    return _clone(authors);
  }
};

module.exports = AuthorApi;
