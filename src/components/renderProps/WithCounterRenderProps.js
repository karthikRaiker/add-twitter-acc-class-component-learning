import React, { Component } from "react";

class WithCounterRenderProps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    let { count } = this.state;
    return (
      // <React.Fragment>
      <div>{this.props.render(count, this.incrementCount)}</div>
      // </React.Fragment>
    );
  }
}
export default WithCounterRenderProps;
