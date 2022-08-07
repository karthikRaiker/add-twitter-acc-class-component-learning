import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function ReactPortalComponent() {
  return (
    <React.Fragment>
      <Link to="/" className="white">
        <FaArrowLeft />
      </Link>
      <h1 className="white">ReactPortalComponent</h1>
    </React.Fragment>
  );
}

export default ReactPortalComponent;
