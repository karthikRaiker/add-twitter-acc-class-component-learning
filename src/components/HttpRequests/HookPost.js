import React, { useState } from "react";

function HookPost() {
  const [inputField, setInputField] = useState({
    name: "",
    passwd: "",
    body: "",
  });
  const [inputFieldErr, setInputFieldErr] = useState({
    name: false,
    passwd: false,
    body: false,
  });
  const [submitErr, setSubmitErr] = useState(false);

  const handleInputChange = (e) => {
    if (Object.keys(inputField).indexOf(e.target.name) > -1) {
      console.log("has Key");
    }
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };
  const handleInputBlur = (e) => {
    switch (e.target.name) {
      case "name":
        if (e.target.value.length < 5) {
          setInputFieldErr({ ...inputFieldErr, [e.target.name]: true });
        } else {
          setInputFieldErr({ ...inputFieldErr, [e.target.name]: false });
        }
        break;

      case "passwd":
        if (e.target.value.length < 7) {
          setInputFieldErr({
            ...inputFieldErr,
            [e.target.name]: true,
          });
        } else {
          setInputFieldErr({ ...inputFieldErr, [e.target.name]: false });
        }
        break;

      case "body":
        if (e.target.value.length < 10) {
          setInputFieldErr({
            ...inputFieldErr,
            [e.target.name]: true,
          });
        } else {
          setInputFieldErr({ ...inputFieldErr, [e.target.name]: false });
        }
        break;

      default:
        return inputFieldErr;
    }
  };

  const handleSubmit = (e) => {
    console.log(e.target);
    let flag = 0;
    e.preventDefault();
    for (let i = 0; i < e.target.length - 1; i++) {
      if (e.target[i].value.length < 5) {
        flag = 1;
        break;
      }
    }
    if (flag === 1) {
      setSubmitErr(true);
      alert("Has error");
    } else {
      setSubmitErr(false);
      alert("Successfully submit");
      for (let i = 0; i < e.target.length - 1; i++) {
        e.target[i].value = "";
      }
    }
  };

  const style = { marginTop: "1rem" };

  return (
    <React.Fragment>
      <div className="white">HookPost</div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          style={style}
          type="text"
          name="name"
          value={inputField.name}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          placeholder="Enter Name"
        />
        {inputFieldErr.name && <div style={{ color: "red" }}>Name Error</div>}
        <input
          style={style}
          type="password"
          name="passwd"
          value={inputField.passwd}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          passwd="Enter Password"
        />
        {inputFieldErr.passwd && (
          <div style={{ color: "red" }}>Password Error</div>
        )}
        <input
          style={style}
          type="text"
          name="body"
          value={inputField.body}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          placeholder="Enter Body"
        />
        {inputFieldErr.body && <div style={{ color: "red" }}>Body Error</div>}
        {submitErr && (
          <div style={{ color: "red" }}>Please Enter Valid fields</div>
        )}
        <input
          style={style}
          disabled={Object.values(inputFieldErr).indexOf(true) > -1}
          type="submit"
          value="submit"
        />
      </form>
    </React.Fragment>
  );
}

export default HookPost;
