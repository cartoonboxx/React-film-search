import React from "react";
import PostItem from "./PostItem";
import MyButton from "./UI/button/MyButton";
import style from "../styles/PostList.module.css";
import ModalFormComponent from "./modal/ModalFormComponent";

const PostList = ({ posts, title }) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  function showModal() {
    setModalVisible(!modalVisible);
  }

  function createNewPost(title, body) {
    console.log(posts, [...posts].at(-1).id);
    posts.push({
      id: [...posts].at(-1).id + 1,
      title: title,
      body: body,
    });
    showModal();
  }

  return (
    <div className={style.posts}>
      {modalVisible && (
        <ModalFormComponent
          modalVisible={modalVisible}
          updateModalVisible={showModal}
          createNewPost={createNewPost}
        />
      )}
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
      <MyButton onClick={showModal}>Добавить</MyButton>
    </div>
  );
};

export default PostList;
