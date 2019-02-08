import React from "react";

import Footer from "../Footer/Footer";

const about = props => {
  return (
    <div>
      <section id="subheader">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h1>About Us</h1>
            </div>
          </div>
        </div>
      </section>

      <section id="page" className="about">
        <div className="container">
          <div className="row center-xs center-sm center-md center-lg">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h2>
                <span className="primary-text">Who</span> We Are
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <hr />
              <h2>
                <span className="primary-text">What</span> We Do
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="company">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <i className="fa fa-phone" /> (234) 08133826317
                </li>
                <li>
                  <i className="fa fa-envelope" /> Alfred.chimereze@gmail.com
                </li>
                <li>
                  <i className="fa fa-map" /> Lagos, Nigeria
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <h4>About Us</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor
              </p>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <h4>Newsletter</h4>
              <p>Lorem ipsum dolor sit amet</p>
              <form>
                <input type="text" name="email" placeholder="Enter Email" />
                <button type="submit" name="button">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default about;
