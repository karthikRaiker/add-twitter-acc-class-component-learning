import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      isError: true,
    };
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
    let { isError } = this.state;
    if (isError) {
      return (
        <div style={{ color: "white", textAlign: "center" }}>
          Something went wrong in the hero component
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
