import React from "react";
import AddPost from "../../Components/Post/AddPost";
import DeleteIcon from "@mui/icons-material/Delete";
import PostList from "../../Components/Post/PostList";
import "./Form.css";
const Forum = () => {
  return (
    <div>
      <h1
        style={{
          color: "grey",
          fontSize: "40px",
          marginTop: "2%",
          marginBottom: "1%",
        }}
      >
        Hello To The Forum{" "}
      </h1>
      <AddPost />
      <PostList />
    </div>
  );
};

export default Forum;
