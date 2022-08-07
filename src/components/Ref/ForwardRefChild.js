import React from "react";

const ForwardRefChild = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} placeholder="focus using forwarding ref" />
    </div>
  );
});

export default ForwardRefChild;
