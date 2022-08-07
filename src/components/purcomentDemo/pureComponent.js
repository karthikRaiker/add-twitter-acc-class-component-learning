import React, { PureComponent } from "react";

class pureComponent extends PureComponent {
  render() {
    console.log("***************** Pure component *********");
    return <div className="white">pureComponent name: {this.props.name}</div>;
  }
}

export default pureComponent;
