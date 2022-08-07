import React, { Component } from "react";
import ReactLifeCycleChild from "../components/ReactLifeCycleChild";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export class ReactLifeCycleParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "karthik",
    };
    console.log("LifeCycleA Constructor");
  }
  static getDerivedStateFromProps(state, props) {
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifeCycleA ComponentDidMount");
  }

  //re-render life cycle Parent
  shouldComponentUpdate() {
    console.log(
      "LifeCycleA(re-render life cycle Parent) shouldComponentUpdate"
    );
    return true;
  }

  //re-render life cycle Parent
  getSnapshotBeforeUpdate(previousProps, previouState) {
    console.log(
      "LifeCycleA(re-render life cycle Parent) getSnapshotBeforeUpdate"
    );
    return null;
  }

  //re-render life cycle Parent
  componentDidUpdate() {
    console.log("LifeCycleA(re-render life cycle Parent) componentDidUpdate");
  }

  changeState = () => {
    this.setState({ name: "Hello World" });
  };

  render() {
    console.log("LifeCycleA Render");
    return (
      <div style={{ color: "white", marginTop: "1.5rem" }}>
        <Link to="/" className="white">
          <FaArrowLeft />
        </Link>
        <div>ReactLifeCycleParent LifeCycleA</div>
        <ReactLifeCycleChild />
        <p>please check console</p>
        <button onClick={this.changeState}>Change State</button>
      </div>
    );
  }
}

export default ReactLifeCycleParent;
