import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";

export class HttpPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      title: "",
      body: "",
    };
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => {
        console.log(response.data);
        this.setState({ id: "", title: "", body: "" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    let { id, title, body } = this.state;

    return (
      <>
        <Link to="/http-requests" className="white">
          <FaArrowLeft />
        </Link>
        <div
          className="white"
          style={{ textAlign: "center", fontWeight: "bold" }}
        >
          Http Post Request
        </div>
        <form className="HttpForm" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={id}
            name="id"
            className="HttpInput"
            placeholder="Enter Id"
            onChange={this.handleInput}
          />
          <input
            type="text"
            value={title}
            name="title"
            className="HttpInput"
            placeholder="Enter Title"
            onChange={this.handleInput}
          />
          <input
            type="text"
            value={body}
            name="body"
            className="HttpInput"
            placeholder="Enter Body"
            onChange={this.handleInput}
          />
          <button
            type="submit"
            className="Submit"
            style={{ width: "50%", margin: "0.5rem auto" }}
          >
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default HttpPost;
