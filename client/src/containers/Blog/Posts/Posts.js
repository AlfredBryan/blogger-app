import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Post from "../../../components/Post/Post";
import Footer from "../../../components/Footer/Footer";
import "./Posts.css";

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    console.log(this.props);
    axios.get("/api/post").then(res => {
      const posts = res.data.slice(0, 9);
      const updatedPosts = posts.map(post => {
        return {
          ...post
        };
      });
      this.setState({
        posts: updatedPosts
      });
      console.log(res.data);
    });
  }

  postSelectedHandler = id => {
    this.props.history.push("/" + id);
  };

  render() {
    const posts = this.state.posts.map(post => {
      return (
        <Post
          key={post._id}
          title={post.title}
          author={post.author}
          image={post.image}
          clicked={() => this.postSelectedHandler(post._id)}
        />
      );
    });
    return (
      <div>
        <section id="showcase">
          <div className="container">
            <div className="row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">
              <div className="col-xs-10 col-sm-10 col-md-10 col-lg-7 showcase-content">
                <h1>
                  Welcome to <span className="primary-text">Blogger</span>Bryan
                </h1>
                <p>News Reaches you as soon as it Leaks</p>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="row">
            <section className="col-md-4">{posts}</section>
          </div>
        </div>
        <section id="info">
          <div className="container">
            <div className="row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <img
                  src={require("../../../components/Image/iphone.png")}
                  alt="phone"
                />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <h2>Core Features</h2>
                <ul>
                  <li>
                    <i className="fa fa-check" /> Fully Optimized
                  </li>
                  <li>
                    <i className="fa fa-check" /> Free Support
                  </li>
                  <li>
                    <i className="fa fa-check" /> Free Upgrades
                  </li>
                  <li>
                    <i className="fa fa-check" /> UpTime Guarantee
                  </li>
                  <li>
                    <i className="fa fa-check" /> Mulitple Users
                  </li>
                  <li>
                    <i className="fa fa-check" /> Plug & Play
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Posts;
