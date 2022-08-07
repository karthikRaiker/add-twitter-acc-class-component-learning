import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import HookPost from "../components/HttpRequests/HookPost";

class HttpRequests extends Component {
  render() {
    return (
      <>
        <Link to="/" className="white">
          <FaArrowLeft />
        </Link>
        <div className="white" style={{ textAlign: "center" }}>
          HttpRequests Demo
        </div>
        <div className="RouteContainer" style={{ padding: "1rem" }}>
          <Link to="/http-get">
            <button className="Submit" style={{ width: "100%" }}>
              Get Request
            </button>
          </Link>
          <Link to="/http-post">
            <button className="Submit" style={{ width: "100%" }}>
              Post Request
            </button>
          </Link>
          <HookPost />
        </div>
      </>
    );
  }
}

export default HttpRequests;
