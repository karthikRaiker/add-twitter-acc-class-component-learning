import React, { Component } from "react";
// import { UserProvider, UserConsumer } from "./components/ReactContext";
import ReactContextComponentA from "../components/ReactContext/ReactContextComponentA";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export const UserContext = React.createContext("Code Evolution");

const UserProvider = UserContext.Provider;

const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };

class ReactContextApi extends Component {
  render() {
    return (
      <>
        <Link to="/" className="white">
          <FaArrowLeft />
        </Link>
        <UserProvider value="Context Api Value Mahaganapathy">
          <ReactContextComponentA />
        </UserProvider>
      </>
    );
  }
}

export default ReactContextApi;
