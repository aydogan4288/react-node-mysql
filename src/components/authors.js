"use strict";

import React from "react";
import PropTypes from "prop-types";
import { AuthorList } from "../components/AuthorList";
import { AuthorEdit } from "../components/AuthorEdit.jsx";
import { Link } from "react-router-dom";

export class Authors extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/add-authors" replace>
            <button>
              <span>Add Author</span>
            </button>
          </Link>
        </div>
        <br />
        <hr />
        <div>
          <AuthorEdit />
        </div>
        <div>
          <AuthorList authorList={this.props.authorList} />
        </div>
      </div>
    );
  }
}

Authors.propTypes = {
  authorList: PropTypes.array.isRequired
};
