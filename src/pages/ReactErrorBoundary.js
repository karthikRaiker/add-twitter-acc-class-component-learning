import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Hero from "../components/errorBoundary/Hero";
import ErrorBoundary from "../components/errorBoundary/ErrorBoundary";

function ReactErrorBoundary() {
  return (
    <>
      <Link to="/" className="white">
        <FaArrowLeft />
      </Link>
      <div
        className="white"
        style={{ margin: "1.5rem 0", textAlign: "center" }}
      >
        ReactErrorBoundary
      </div>
      <ErrorBoundary>
        <Hero heroNme="Batman" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroNme="Superman" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroNme="joker" />
      </ErrorBoundary>
    </>
  );
}

export default ReactErrorBoundary;
