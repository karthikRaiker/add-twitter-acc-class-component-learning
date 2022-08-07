import React from "react";
// import UserContext from "../../pages/ReactContextApi";
import ReactContextComponentC from "./ReactContextComponentC";

class ReactContextComponentB extends React.Component {
  render() {
    return (
      <div className="white">
        {/* Component B Context {this.context} */}
        <ReactContextComponentC />
      </div>
    );
  }
}

// ReactContextComponentB.contextType = UserContext;

export default ReactContextComponentB;
