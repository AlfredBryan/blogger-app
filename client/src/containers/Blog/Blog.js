import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";

import Posts from "./Posts/Posts";
import NewPost from "../../components/NewPost/NewPost";
import FullPost from "../../components/FullPost/FullPost";
import "./Blog.css";
import NavBar from "../../components/NavBar/NavBar";
import About from "../../components/About/About";

class Blog extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/new-post" component={NewPost} />
          <Route path="/about-us" component={About} />
          <Route path="/:id" component={FullPost} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
