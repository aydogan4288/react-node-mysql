"use strict";

import React from "react";
import { Link } from "react-router-dom";

export class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img width="90px" height="30px" src="images/logo.png" />
          </Link>
          <ul className="nav navbar-nav">
            <li>
              <Link to="/" replace>
                Home
              </Link>
            </li>
            <li>
              <Link to="/books" replace>
                Books
              </Link>
            </li>
            <li>
              <Link to="/add-books" replace>
                {" "}
                +1{" "}
              </Link>
            </li>
            <li>
              <Link to="/authors" replace>
                Authors
              </Link>
            </li>
            <li>
              <Link to="/add-authors" replace>
                {" "}
                +1{" "}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
