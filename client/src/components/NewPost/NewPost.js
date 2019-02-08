import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormData from "form-data";
import axios from "axios";

import Footer from "../Footer/Footer";

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
      console.log(res.data);
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
        <section id="page" className="contact">
          <div className="container">
            <div className="row center-xs center-sm center-md center-lg">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h2>
                  <span className="primary-text">Add</span> Post
                </h2>
                <form
                  encType="multipart/form-data"
                  onSubmit={this.postDataHandler}
                >
                  <div>
                    <label htmlFor="name">Author</label>
                    <br />
                    <input
                      type="text"
                      name="author"
                      value={this.state.author}
                      onChange={this.handlTextChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="title">Title</label>
                    <br />
                    <input
                      type="text"
                      name="title"
                      value={this.state.title}
                      onChange={this.handlTextChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="title">Image</label>
                    <br />
                    <input
                      type="file"
                      name="image"
                      onChange={this.handleImageChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="post">Post</label>
                    <br />
                    <textarea
                      name="post"
                      value={this.state.post}
                      onChange={this.handlTextChange}
                    />
                  </div>
                  <button type="submit" onClick={this.postDataHandler}>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <ToastContainer transition={Slide} />
        </section>
        <Footer />
      </div>
    );
  }
}

export default NewPost;
