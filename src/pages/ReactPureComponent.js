import React, { Component } from "react";
import NormalComponent from "../components/purcomentDemo/normalComponent";
import PureComponent from "../components/purcomentDemo/pureComponent";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import MemoComponent from "../components/purcomentDemo/memoComponent";
class ReactPureComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "karthik",
    };
  }

  componentDidMount() {
    this._isMounted = true;
    setInterval(() => {
      this.setState({ name: "karthik" });
    }, 1500);
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    console.log("******************Parent Component*************");
    const { name } = this.state;
    return (
      <div className="white">
        <Link to="/" className="white">
          <FaArrowLeft />
        </Link>
        ReactPure Parent Component
        <NormalComponent name={name} />
        <PureComponent name={name} />
        <MemoComponent name={name} />
      </div>
    );
  }
}

export default ReactPureComponent;
