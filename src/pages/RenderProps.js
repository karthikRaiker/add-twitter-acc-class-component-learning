import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import WithCounterRenderProps from "../components/renderProps/WithCounterRenderProps";
import CountClickRenderProps from "../components/renderProps/CountClickRenderProps";
import CountHoverRenderProps from "../components/renderProps/CountHoverRenderProps";

function RenderProps() {
  let style = {
    margin: "1.5rem 0",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
  };
  return (
    <>
      <Link to="/" className="white">
        <FaArrowLeft />
      </Link>
      <div className="white" style={style}>
        <h1>
          Render Props Technique(sharing code between different components)
        </h1>
        <WithCounterRenderProps
          render={(count, incrementCount) => (
            <CountHoverRenderProps
              count={count}
              incrementCount={incrementCount}
            />
          )}
        />
        <WithCounterRenderProps
          render={(count, incrementCount) => (
            <CountClickRenderProps
              count={count}
              incrementCount={incrementCount}
            />
          )}
        />
        {/* <WithCounterRenderProps>
          {(count, incrementCount) => {
            <CountHoverRenderProps
              count={count}
              incrementCount={incrementCount}
            />;
          }}
        </WithCounterRenderProps>
        <WithCounterRenderProps>
          {(count, incrementCount) => {
            <CountClickRenderProps
              count={count}
              incrementCount={incrementCount}
            />;
          }}
        </WithCounterRenderProps> */}
      </div>
    </>
  );
}

export default RenderProps;
