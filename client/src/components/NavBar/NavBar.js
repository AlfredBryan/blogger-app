import React from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

const navBar = props => {
  return (
    <header id="main-header">
      <div className="container">
        <div className="row end-sm end-md end-lg center-xs middle-xs middle-sm middle-md middle-lg">
          <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2">
            <h1>
              <span className="primary-text">Blogger</span>Bryan
            </h1>
          </div>
          <div className="col-xs-12 col-sm-10 col-md-10 col-lg-10">
            <nav id="navbar">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about-us">About</NavLink>
                </li>
                <li>
                  <NavLink to="/new-post">New Post</NavLink>
                </li>
                <li>
                  <NavLink to="#">Join</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
export default navBar;
