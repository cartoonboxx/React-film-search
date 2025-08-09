import React from "react";
import "./styles/App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import LoadingComponent from "./components/LoadingComponent";

function App() {
  const [posts, setPosts] = React.useState([
    { id: 1, title: "JS 1", body: "desc" },
    { id: 2, title: "JS 2", body: "desc" },
    { id: 3, title: "JS 3", body: "desc" },
  ]);

  return (
    <div className="App">
      <PostList posts={posts} title={"Список постов 1"} />
      <LoadingComponent />
    </div>
  );
}

export default App;
