import React from "react";
import ReactFragmentColumn from "../components/ReactFragmentColumn";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function ReactFragment() {
  return (
    <React.Fragment>
      <Link to="/" className="white">
        <FaArrowLeft />
      </Link>
      <div className="white" style={{ margin: "1rem 0" }}>
        Check Browser DOM
      </div>
      <table>
        <tbody>
          <tr>
            <ReactFragmentColumn />
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default ReactFragment;
