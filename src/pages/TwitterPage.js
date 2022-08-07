import "../App.css";
import { Component } from "react";
import TwitterUi from "../components/TwitterUi";
import tesla from "../images/tesla.jfif";
import { Link } from "react-router-dom";
import CounterPage from "./CouterPage";
// import Example from "../components/Example";

class TwitterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      twitterName: "",
      imgLink: "",
      userName: "",
      hashTag: "",
      twitterNameErr: false,
      imgLinkErr: false,
      userNameErr: false,
      hashTagErr: false,
      submitErr: false,
      data: [
        {
          name: "karthik1",
          imgLink: tesla,
          userName: "raikar",
          hashTag: ["tesla", "car", "us"],
          isLike: false,
          isComment: false,
          comment: [],
        },
        {
          name: "karthik2",
          imgLink: tesla,
          userName: "raikar",
          hashTag: ["tesla", "car", "us"],
          isLike: false,
          isComment: false,
          comment: [],
        },
        {
          name: "karthik3",
          imgLink: tesla,
          userName: "raikar",
          hashTag: ["tesla", "car", "us"],
          isLike: false,
          isComment: false,
          comment: [],
        },
      ],
    };
  }
  componentDidMount() {
    let updatedData = JSON.parse(localStorage.getItem("data"));
    console.log(updatedData);
    if (updatedData) {
      this.setState({ data: [...updatedData] });
    } else {
      this.setState({ data: this.state.data });
    }
  }

  handleField = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleValidation = (e) => {
    switch (e.target.name) {
      case "twitterName":
        if (!e.target.value || e.target.value.length < 5) {
          this.setState({ twitterNameErr: true });
        } else this.setState({ twitterNameErr: false });
        break;
      case "imgLink":
        if (!e.target.value || e.target.value.length < 5) {
          this.setState({ imgLinkErr: true });
        } else this.setState({ imgLinkErr: false });
        break;
      case "userName":
        if (!e.target.value || e.target.value.length < 5) {
          this.setState({ userNameErr: true });
        } else this.setState({ userNameErr: false });
        break;
      case "hashTag":
        if (!e.target.value || e.target.value.length < 5) {
          this.setState({ hashTagErr: true });
        } else this.setState({ hashTagErr: false });
        break;
      default:
        console.log("Default validation");
        break;
    }
  };
  submitForm = (e) => {
    let { data } = this.state;
    e.preventDefault();
    this.handleValidation(e);
    let hashArr = e.target.hashTag.value.split(", ");
    if (
      !e.target.userName.value ||
      !e.target.twitterName.value ||
      !e.target.imgLink.value ||
      !e.target.hashTag.value
    ) {
      this.setState({ submitErr: true });
    } else {
      let body = {
        userName: e.target.userName.value,
        name: e.target.twitterName.value,
        imgLink: e.target.imgLink.value,
        hashTag: hashArr ? hashArr : [],
        isLike: false,
        comment: [],
      };
      this.setState({ data: data.concat(body), submitErr: false }, () => {
        localStorage.setItem("data", JSON.stringify(this.state.data));
        this.setState({
          userName: "",
          twitterName: "",
          imgLink: "",
          hashTag: "",
        });
      });
    }
  };

  handleRemove = (id) => {
    let { data } = this.state;
    let newArr = [...data];
    newArr.splice(id, 1);
    this.setState({ data: [...newArr] }, () => {
      localStorage.setItem("data", JSON.stringify(this.state.data));
    });
  };

  handleLikes = (id) => {
    let { data } = this.state;
    let newData = data;
    newData.forEach((item, index) => {
      if (index === id) {
        newData[index].isLike = !item.isLike;
        this.setState({ data: [...newData] });
      }
    });
  };

  handleComment = (id) => {
    let { data } = this.state;
    let newData = data;
    newData.forEach((item, index) => {
      if (index === id) {
        newData[index].isComment = !item.isComment;
        this.setState({ data: [...newData] });
      }
    });
  };

  addComment = (key, comment) => {
    let { data } = this.state;
    let newData = data;
    newData.forEach((item, index) => {
      if (index === key) {
        newData[index].comment.push(comment);
        newData[index].isComment = !item.isComment;
        this.setState({ data: [...newData] }, () =>
          localStorage.setItem("data", JSON.stringify(this.state.data))
        );
      }
    });
  };

  render() {
    let {
      submitErr,
      twitterName,
      userName,
      imgLink,
      hashTag,
      twitterNameErr,
      userNameErr,
      imgLinkErr,
      hashTagErr,
      data,
    } = this.state;
    // const newData = data.map((item, index) => {
    //   return <Example key={index} newData={item.name} />;
    // });
    // console.log(newData);
    return (
      <div className="App">
        <div className="Heading">Add Twitter Card</div>
        {/* {newData} */}
        <form className="App-Controls" onSubmit={this.submitForm}>
          <input
            type="text"
            name="twitterName"
            value={twitterName}
            onChange={this.handleField}
            onBlur={this.handleValidation}
            placeholder="Your name"
          />
          {twitterNameErr ? (
            <div className="Error">* Error in Twitter Name</div>
          ) : (
            ""
          )}
          <input
            type="text"
            name="imgLink"
            value={imgLink}
            onChange={this.handleField}
            onBlur={this.handleValidation}
            placeholder="Image link"
          />
          {imgLinkErr ? <div className="Error">* Error in Image Link</div> : ""}
          <input
            type="text"
            name="userName"
            value={userName}
            onChange={this.handleField}
            onBlur={this.handleValidation}
            placeholder="User name"
          />
          {userNameErr ? <div className="Error">* Error in User Name</div> : ""}
          <input
            type="text"
            name="hashTag"
            value={hashTag}
            onChange={this.handleField}
            onBlur={this.handleValidation}
            placeholder="Hash tag"
          />
          {hashTagErr ? <div className="Error">* Error in Hashtag</div> : ""}
          {submitErr ? (
            <div className="Error">* Please Enter the valid field</div>
          ) : (
            ""
          )}
          <button
            type="submit"
            //disabled={!(twitterNameErr && imgLinkErr && userNameErr && hashTagErr)}
            className="Submit"
          >
            Submit
          </button>
        </form>
        <TwitterUi
          data={data}
          handleComment={this.handleComment}
          addComment={this.addComment}
          handleLikes={this.handleLikes}
          handleRemove={this.handleRemove}
        >
          <p>Hey this is Twitter ui children component</p>
        </TwitterUi>
        <div className="RouteHeading">Components</div>
        <div className="RouteContainer">
          <Link to="/counter">
            <button className="Submit" style={{ width: "100%" }}>
              Counter Page
            </button>
          </Link>
          <Link to="/life-cycle">
            <button className="Submit" style={{ width: "100%" }}>
              React Life Cycle
            </button>
          </Link>
          <Link to="/fragment">
            <button className="Submit" style={{ width: "100%" }}>
              React fragment
            </button>
          </Link>
          <Link to="/pure-component">
            <button className="Submit" style={{ width: "100%" }}>
              React Pure Component
            </button>
          </Link>
          <Link to="/ref">
            <button className="Submit" style={{ width: "100%" }}>
              Ref
            </button>
          </Link>
          <Link to="/react-portals">
            <button className="Submit" style={{ width: "100%" }}>
              React Portal
            </button>
          </Link>
          <Link to="/error-boundary">
            <button className="Submit" style={{ width: "100%" }}>
              React Error Boundary
            </button>
          </Link>
          <Link to="/higher-order-component">
            <button className="Submit" style={{ width: "100%" }}>
              Higher Order Component
            </button>
          </Link>
          <Link to="/render-props">
            <button className="Submit" style={{ width: "100%" }}>
              Render Props
            </button>
          </Link>
          <Link to="/context-api">
            <button className="Submit" style={{ width: "100%" }}>
              React Context Api
            </button>
          </Link>
          <Link to="/http-requests">
            <button className="Submit" style={{ width: "100%" }}>
              Http Request Demo
            </button>
          </Link>
        </div>
        <CounterPage initialCount={1} />
      </div>
    );
  }
}

export default TwitterPage;
