import React from "react";
import "../App.css";
import tesla from "../images/tesla.jfif";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaShare, FaRegComment } from "react-icons/fa";

function TwitterUi(props) {
  const handleCommentForm = (key, e) => {
    e.preventDefault();
    if (e.target.comment.value) {
      props.addComment(key, e.target.comment.value);
      document.getElementById("CommentValue").value = "";
    }
  };

  let { data } = props;
  return (
    <div className="Card-Container">
      {data.length
        ? data.map((item, index) => {
            return (
              <div className="Card" key={index}>
                <img src={tesla} alt="" />
                <div className="Card-Text">
                  <div className="Card-Text-Name">@{item.userName}</div>
                  <div className="Card-Text-Name">{item.name}</div>
                  <div className="Card-Text-Tag">
                    {item.hashTag.length
                      ? item.hashTag.map((item, index) => {
                          return (
                            <div className="Card-Text-Tag-Item" key={index}>
                              #{item}
                            </div>
                          );
                        })
                      : ""}
                  </div>
                  <div className="Card-Text-Icons">
                    <span
                      className="Card-Icon"
                      onClick={() => props.handleLikes(index)}
                      style={item.isLike ? { color: "#fe4164" } : {}}
                    >
                      {item.isLike ? <AiFillHeart /> : <AiOutlineHeart />}
                    </span>
                    <span
                      className="Card-Icon"
                      onClick={() => props.handleComment(index)}
                    >
                      <FaRegComment />
                    </span>
                    <span className="Card-Icon">
                      <FaShare />
                    </span>
                  </div>
                  {item.isComment && (
                    <form
                      className="Comment-Controls"
                      onSubmit={(e) => handleCommentForm(index, e)}
                    >
                      <input
                        type="text"
                        id="CommentValue"
                        name="comment"
                        placeholder="write comment..."
                      />
                      <button className="Comment-Submit" type="submit">
                        submit
                      </button>
                    </form>
                  )}
                  {item.comment.length
                    ? item.comment.map((cmt, index) => {
                        return (
                          <div className="Comment-Text" key={index}>
                            <span>comment {index + 1}: </span>
                            <p key={index}>{cmt}</p>
                          </div>
                        );
                      })
                    : ""}
                  <div className="Card-Remove">
                    <button onClick={() => props.handleRemove(index)}>
                      Remove
                    </button>
                  </div>
                  {props.children}
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
}

export default TwitterUi;
