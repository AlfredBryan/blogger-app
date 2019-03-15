import React, { Component } from "react";
import moment from "moment";
import Pusher from "pusher-js";
import axios from "axios";

import Footer from "../Footer/Footer";
import "./FullPost.css";

class FullPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      comments: [],
      loadedPost: null
    };
  }

  componentDidMount() {
    const postId = this.props.match.params.id;
    console.log(postId);
    if (this.props.match.params.id) {
      axios.get("/api/post/" + this.props.match.params.id).then(res => {
        this.setState({
          loadedPost: res.data,
          comments: res.data.comments
        });
        console.log(res.data.comments);
      });
    }
    const pusher = new Pusher("db5ba1445826f40a4509", {
      cluster: "mt1",
      useTLS: true
    });
    const channel = pusher.subscribe("comment");
    channel.bind("message", data => {
      this.setState({ comments: [...this.state.comments, data], comment: "" });
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    let postId = this.props.match.params.id;
    let { comment } = this.state;
    axios
      .post(`/api/post/${postId}/comment`, { comment })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        throw err;
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  deletePostHandler = () => {
    axios.delete("/post/delete/" + this.props.match.params.id);
  };
  render() {
    const { loadedPost, comments } = this.state;
    let post = <p>Please select a Post!</p>;
    if (this.props.match.params.id) {
      post = <p>loading...</p>;
    }
    if (loadedPost) {
      post = (
        <React.Fragment>
          <div id="wrapper">
            <header id="header">
              <a href="/" className="logo">
                Bloggify
              </a>
            </header>

            <nav id="nav">
              <ul className="links">
                <li>
                  <a href="/">This is Bloggify</a>
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
              <section className="post">
                <header className="major">
                  <span className="date">
                    {moment(Date.now()).format("LLL")}
                  </span>
                  <h1>{loadedPost.title}</h1>
                  <p>{loadedPost.author}</p>
                </header>
                <div className="image main">
                  <img src={loadedPost.image} alt="blog" />
                </div>
                <p>{loadedPost.post}</p>
              </section>
            </div>
            <footer id="footer">
              <section>
                <div className="container">
                  <div className="row center-xs center-sm center-md center-lg">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <h2>
                        <span className="primary-text">Comments</span>
                      </h2>
                      <form>
                        <div className="dialogbox">
                          {comments.map(comment => (
                            <div key={comment._id} className="body">
                              <span className="tip tip-left" />
                              <div className="message">
                                <span>{comment.comment}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div>
                          <textarea
                            style={{
                              width: "50%",
                              marginBottom: "100px",
                              marginLeft: "22%"
                            }}
                            name="comment"
                            id="comment"
                            value={this.state.comment}
                            onChange={this.handleChange}
                          />
                        </div>
                        <button
                          type="submit"
                          name="button"
                          onClick={this.handleSubmit}
                        >
                          Comment
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
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

    return post;
  }
}

export default FullPost;
