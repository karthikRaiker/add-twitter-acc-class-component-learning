import React from "react";
import ConditionalStyle from "../components/conditionalStyle";

function mapExample() {
  const array = [
    { id: 1, date: "Wed, Mar 30, 2021", value: 10 },
    { id: 2, date: "Mon, Mar 28, 2022", value: 20 },
    { id: 3, date: "Mon, Mar 28, 2022", value: 25 },
  ];

  return (
    <div>
      {array.length
        ? array.map((item, index) => {
            return <ConditionalStyle key={index} item={item} />;
          })
        : null}
    </div>
  );
}

export default mapExample;
