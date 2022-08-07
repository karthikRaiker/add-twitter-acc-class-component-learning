import React from "react";
import { UserConsumer } from "../../pages/ReactContextApi";

function ReactContextComponentC() {
  return (
    <UserConsumer>
      {(username) => {
        return <div className="white">Hello {username}</div>;
      }}
    </UserConsumer>
  );
}

export default ReactContextComponentC;
