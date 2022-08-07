import React, { Component } from "react";

export class ReactLifeCycleChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "karthik",
    };
    console.log("LifeCycleB Constructor");
  }
  static getDerivedStateFromProps(state, props) {
    console.log("LifeCycleB getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifeCycleB ComponentDidMount");
  }

  //re-render life cycle Child
  shouldComponentUpdate() {
    console.log("LifeCycleA(re-render life cycle Child) shouldComponentUpdate");
    return true;
  }

  //re-render life cycle Child
  getSnapshotBeforeUpdate(previousProps, previouState) {
    console.log(
      "LifeCycleA(re-render life cycle Child) getSnapshotBeforeUpdate"
    );
    return null;
  }

  //re-render life cycle Child
  componentDidUpdate() {
    console.log("LifeCycleA(re-render life cycle Child) componentDidUpdate");
  }

  render() {
    console.log("LifeCycleB Render");
    return <div className="white">ReactLifeCycleChild LifeCycleB</div>;
  }
}

export default ReactLifeCycleChild;
