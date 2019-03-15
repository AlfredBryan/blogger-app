import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Posts from "./Posts/Posts";
import NewPost from "../../components/NewPost/NewPost";
import FullPost from "../../components/FullPost/FullPost";
import "./Blog.css";

class Blog extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/new-post" component={NewPost} />
          <Route path="/:id" component={FullPost} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
