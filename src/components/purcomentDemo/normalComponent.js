import React, { Component } from "react";

class normalComponent extends Component {
  render() {
    console.log("***************** normal component *********");
    return <div className="white">normalComponent name: {this.props.name}</div>;
  }
}

export default normalComponent;
