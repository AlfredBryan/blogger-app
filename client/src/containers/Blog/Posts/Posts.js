import React, { Component } from "react";
import moment from "moment";
import axios from "axios";

import Post from "../../../components/Post/Post";
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
      <React.Fragment>
        <div id="wrapper" className="fade-in">
          <div id="intro">
            <h1>
              This is
              <br />
              Bloggify
            </h1>
            <ul className="actions">
              <li>
                <a
                  href="#header"
                  className="button icon solo fa-arrow-down scrolly"
                >
                  Continue
                </a>
              </li>
            </ul>
          </div>

          <header id="header">
            <a href="/" className="logo">
              Bloggify
            </a>
          </header>

          <nav id="nav">
            <ul className="links">
              <li className="active">
                <a href="index.html">This is Bloggify</a>
              </li>
              <li>
                <a href="/new-post">Add Post</a>
              </li>
            </ul>
            <ul className="icons">
              <li>
                <a
                  href="https://twitter.com/IkennaAlfred"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="icon fa-twitter"
                >
                  <span className="label">Twitter</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/alfred.chimereze.bryan"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="icon fa-facebook"
                >
                  <span className="label">Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/mhizta_bryan/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="icon fa-instagram"
                >
                  <span className="label">Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/AlfredBryan"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="icon fa-github"
                >
                  <span className="label">GitHub</span>
                </a>
              </li>
            </ul>
          </nav>

          <div id="main">
            <article className="post featured">
              <header className="major">
                <span className="date">{moment(Date.now()).format("LLL")}</span>
                <h2>
                  <a href="#">
                    And this is a<br />
                    massive headline
                  </a>
                </h2>
                <p>
                  Aenean ornare velit lacus varius enim ullamcorper proin
                  aliquam
                  <br />
                  facilisis ante sed etiam magna interdum congue. Lorem ipsum
                  dolor
                  <br />
                  amet nullam sed etiam veroeros.
                </p>
              </header>
              <a href="#" className="image main">
                <img
                  src={require("../../../components/Image/homebg.jpg")}
                  alt=""
                />
              </a>
            </article>
            <section className="posts">
              <article>
                <div>{posts}</div>
              </article>
            </section>
          </div>

          <footer id="footer">
            <section>
              <form method="post" action="#">
                <div className="fields">
                  <div className="field">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" />
                  </div>
                  <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" rows="3" />
                  </div>
                </div>
                <ul className="actions">
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </form>
            </section>
            <section className="split contact">
              <section>
                <h3>Phone</h3>
                <p>2348133826317</p>
              </section>
              <section>
                <h3>Email</h3>
                <p>alfred.chimereze@gmail.com</p>
              </section>
              <section>
                <h3>Social</h3>
                <ul className="icons alt">
                  <li>
                    <a
                      href="https://twitter.com/IkennaAlfred"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="icon alt fa-twitter"
                    >
                      <span className="label">Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/alfred.chimereze.bryan"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="icon alt fa-facebook"
                    >
                      <span className="label">Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/mhizta_bryan/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="icon alt fa-instagram"
                    >
                      <span className="label">Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/AlfredBryan"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="icon fa-github"
                    >
                      <span className="label">GitHub</span>
                    </a>
                  </li>
                </ul>
              </section>
            </section>
          </footer>

          <div id="copyright">
            <ul>
              <li>&copy;2019</li>
              <li>Design by: Bryan</li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Posts;
