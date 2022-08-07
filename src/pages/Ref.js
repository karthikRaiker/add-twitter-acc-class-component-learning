import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import ChildInputRef from "../components/Ref/ChildInputRef";
import ForwardRefChild from "../components/Ref/ForwardRefChild";

const style = {
  display: "flex",
  flexDirection: "column",
  margin: "1rem",
  width: "30%",
  paddingTop: "1rem",
  borderTop: "1px solid #f5f5f5",
};

class Ref extends Component {
  constructor(props) {
    super(props);
    this.inputField = React.createRef(); //using normal ref (new way)
    this.callBackRef = null; //using callback ref (old way)
    this.setCallBackRef = (element) => {
      this.callBackRef = element;
    };
    this.componentRef = React.createRef(); //creating component ref
    this.inputForwardRef = React.createRef(); //creating ref for forwarding ref demo
    this.state = {};
  }
  componentDidMount() {
    // this.inputField.current.focus();
    if (this.callBackRef) {
      this.callBackRef.focus();
    }
  }
  handleInputRef = () => {
    alert(this.inputField.current.value);
    // console.log(this.inputField.current);
  };

  handleChildInputRef = () => {
    this.componentRef.current.focusInput();
  };

  focusUsingForwardingRefs = () => {
    this.inputForwardRef.current.value();
  };

  render() {
    return (
      <div className="white">
        <Link to="/" className="white">
          <FaArrowLeft />
        </Link>
        <div>Ref Demo</div>
        <input type="text" ref={this.inputField} />
        <input
          type="text"
          style={{ marginLeft: "1rem" }}
          ref={this.setCallBackRef}
          placeholder="using normal ref"
        />
        <button style={{ marginLeft: "1rem" }} onClick={this.handleInputRef}>
          click me
        </button>
        <div style={style}>
          <h3>Handle Ref in component</h3>
          <ChildInputRef ref={this.componentRef} />
          <button style={{ width: "50%" }} onClick={this.handleChildInputRef}>
            click to focus on child inputField
          </button>
        </div>
        <div style={style}>
          <h3>Forwarding Refs</h3>
          <ForwardRefChild ref={this.inputForwardRef} />
          <button
            style={{ width: "50%", marginTop: "1rem" }}
            onClick={this.focusUsingForwardingRefs}
          >
            click to focus using Forwarding Refs
          </button>
        </div>
      </div>
    );
  }
}

export default Ref;
