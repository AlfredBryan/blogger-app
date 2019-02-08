import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClapComponent } from "react-clap";
import moment from "moment";
import axios from "axios";

import Footer from "../Footer/Footer";
import "./FullPost.css";

class FullPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedPost: null
    };
  }
  notify = () => {
    toast.success("Post Successful !", {
      position: toast.POSITION.TOP_CENTER
    });
  };
  componentDidMount() {
    if (this.props.match.params.id) {
      axios.get("/api/post/" + this.props.match.params.id).then(res => {
        this.setState({
          loadedPost: res.data
        });
        console.log(res.data);
      });
    }
  }

  deletePostHandler = () => {
    axios.delete("/post/delete/" + this.props.match.params.id);
  };
  render() {
    const { loadedPost } = this.state;
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

                <ClapComponent
                  popupClapCount={this.state.clapsCount}
                  maxClapCount={50}
                  onChange={(newClapCount, diff) => {
                    this.setState({
                      clapsCount: newClapCount,
                      totalClapCount: this.state.totalClapCount + diff
                    });
                  }}
                />
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
                      <div className="body">
                        <span className="tip tip-left" />
                        <div className="message">
                          <span>
                            I just made a comment about this comment box which
                            is purely made from CSS.
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <textarea name="post" />
                    </div>
                    <button type="submit" name="button">
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
