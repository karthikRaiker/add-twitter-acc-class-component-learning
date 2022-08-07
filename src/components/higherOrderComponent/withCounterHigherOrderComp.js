import React, { Component } from "react";

const withCounter = (WrappedComponent, incrementTimes) => {
  class WithCounter extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementTimes };
      });
    };

    render() {
      let { count } = this.state;
      return (
        <React.Fragment>
          <WrappedComponent
            count={count}
            incrementCount={this.incrementCount}
            {...this.props}
          />
        </React.Fragment>
      );
    }
  }

  return WithCounter;
};

export default withCounter;
