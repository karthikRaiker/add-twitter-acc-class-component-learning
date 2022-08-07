import React, { Component } from "react";

class ChildInputRef extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  focusInput = () => {
    this.inputRef.current.focus();
  };

  render() {
    const style = {
      display: "flex",
      alignItems: "center",
      margin: "1rem",
      padding: "1rem",
      border: "1px solid white",
      borderRadius: "5px",
      justifyContent: "space-around",
    };
    return (
      <div style={style}>
        <input
          type="text"
          ref={this.inputRef}
          placeholder="focus using component ref"
        />
        <input type="time" />
      </div>
    );
  }
}

export default ChildInputRef;
