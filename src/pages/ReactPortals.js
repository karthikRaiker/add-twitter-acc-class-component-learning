import React from "react";
import ReactDom from "react-dom";
import ReactPortalComponent from "../components/ReactPortalComponent";

function ReactPortals() {
  return ReactDom.createPortal(
    <ReactPortalComponent />,
    document.getElementById("root-portal")
  );
}

export default ReactPortals;
