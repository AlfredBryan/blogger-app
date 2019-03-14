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
        <div>
          <div className="row">
            <div className="col-md-offset-1 col-md-10 col-sm-12">
              <div className="blog-single-post-thumb">
                <div className="blog-post-title">
                  <h2 className="author">{loadedPost.title}</h2>
                </div>

                <div className="blog-post-format">
                  <span>{loadedPost.author}</span>
                  <span>
                    <i className="fa fa-date" />{" "}
                    {moment(loadedPost.date).format("Do MMM YYYY")}
                  </span>
                  <span>
                    <i className="fa fa-comment-o" />{" "}
                    {loadedPost.comments.length}
                  </span>
                </div>
                <div className="blog-post-des">
                  <blockquote>{loadedPost.post}</blockquote>
                  <div className="blog-post-image">
                    <img
                      src={loadedPost.image}
                      className="img-responsive"
                      alt="Blog"
                      style={{ width: "400px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section id="page" className="contact">
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
          <Footer />
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
