import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
  const { title, body } = props.post;
  return (
    <div className="post">
      <div className="post__content">
        <strong>{title}</strong>
        <div>{body}</div>
      </div>
      <div className="post__btns">
        <MyButton disabled>Кнопкаl</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
