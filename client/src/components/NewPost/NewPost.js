import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormData from "form-data";
import axios from "axios";

import "./NewPost.css";

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      title: "",
      post: "",
      image: ""
    };
  }
  notify = () => {
    toast.success("Post Added Successfully !", {
      position: toast.POSITION.TOP_CENTER
    });
  };

  firedAndNotify = e => {
    this.postDataHandler();
  };

  postDataHandler = e => {
    e.preventDefault();
    const { author, title, post, image } = this.state;
    const formData = new FormData();
    formData.set("author", author);
    formData.set("title", title);
    formData.set("post", post);
    formData.append("image", image);
    axios(
      {
        method: "post",
        url: "http://localhost:4000/api/post/add",
        data: formData,
        config: {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      },
      console.log(formData)
    ).then(res => {
      console.log(res);
    });
    this.notify();
  };

  handleImageChange = e => {
    e.preventDefault();
    let imageFile = e.target.files[0];
    this.setState({ [e.target.name]: imageFile });
  };

  handlTextChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row center-xs center-sm center-md center-lg">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h2>
                <span className="primary-text">Add Post</span>
              </h2>
              <section>
                <form
                  encType="multipart/form-data"
                  onSubmit={this.postDataHandler}
                >
                  <div className="fields">
                    <div class="field">
                      <label className="label" htmlFor="author">
                        Author
                      </label>
                      <input
                        style={{ backgroundColor: "grey" }}
                        type="text"
                        value={this.state.author}
                        onChange={this.handlTextChange}
                        name="author"
                        id="author"
                      />
                    </div>
                    <div className="field">
                      <label className="label" htmlFor="title">
                        Title
                      </label>
                      <input
                        style={{ backgroundColor: "grey" }}
                        type="text"
                        value={this.state.title}
                        name="title"
                        id="title"
                        onChange={this.handlTextChange}
                      />
                    </div>
                    <div className="field">
                      <label className="label" htmlFor="image">
                        Image
                      </label>
                      <input
                        type="file"
                        name="image"
                        id="image"
                        onChange={this.handleImageChange}
                      />
                    </div>
                    <div className="field">
                      <label className="label" htmlFor="post">
                        Post
                      </label>
                      <textarea
                        style={{ backgroundColor: "grey" }}
                        name="post"
                        value={this.state.post}
                        onChange={this.handlTextChange}
                        id="post"
                        rows="3"
                      />
                    </div>
                  </div>
                  <button
                    style={{
                      border: "1px solid white",
                      color: "white",
                      backgroundColor: "white"
                    }}
                    onClick={this.postDataHandler}
                    className="mybtn"
                    type="submit"
                  >
                    Post
                  </button>
                </form>
              </section>
            </div>
          </div>
          <ToastContainer transition={Slide} />
        </div>
        <div id="copyright">
          <ul>
            <li>&copy;2019</li>
            <li>Design by: Bryan</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NewPost;
