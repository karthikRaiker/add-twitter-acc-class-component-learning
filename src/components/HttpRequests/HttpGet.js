import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";

export class HttpGet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: [],
      hasError: false,
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({ post: response.data, hasError: false });
      })
      .catch((error) => {
        this.setState({ hasError: true });
      });
  }

  handleEdit() {
    console.log("Edit button clicked");
  }

  render() {
    let { post, hasError } = this.state;
    const arr = [
      { id: 1, name: "ganesh" },
      { id: 2, name: "Manresh" },
      { id: 3, name: "Naresh" },
      { id: 4, name: "vignesh" },
      { id: 5, name: "rakesh" },
    ];
    console.log(arr);
    return (
      <>
        <Link to="/http-requests" className="white">
          <FaArrowLeft />
        </Link>
        <div style={{ margin: "1rem" }}>
          <div
            className="white"
            style={{ textAlign: "center", fontWeight: "bold" }}
          >
            Http Get Request
          </div>
          <table>
            <tbody>
              <tr className="white">
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
                <th></th>
              </tr>
              {post.length
                ? post.map((item, index) => {
                    return (
                      <tr className="white" key={index}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                        <td>
                          <button
                            disabled={
                              item.id === 2 || item.id === 15 //item.id==12 || item.id==15
                            }
                            onClick={this.handleEdit}
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
          {hasError && (
            <div
              className="white"
              style={{ textAlign: "center", color: "red" }}
            >
              Error in Api
            </div>
          )}
        </div>
      </>
    );
  }
}

export default HttpGet;
