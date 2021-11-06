import React from "react";
import { useSelector } from "react-redux";

const PostList = () => {
  // to import data from store=> useSelector
  const posts = useSelector((state) => state.postReducer.posts);
  return (
    <div>
      {posts.map((el) => (
        <p key={el.id} style={{color:"darkblue", fontSize:"20px",borderColor:"black", width:"60%", marginLeft:"17.5%", padding:"2px"}}>{el.title}</p>
      ))}
    </div>
  );
};

export default PostList;