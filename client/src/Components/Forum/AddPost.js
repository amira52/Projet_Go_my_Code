import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../JS/actions/posts";


const AddPost = () => {
  const [title, settitle] = useState("");
  const dispatch = useDispatch();
  return (
    <div style={{display:"flex", flexDirection:"column", marginLeft:"17%"}}>
      <input style={{width:"70%", marginTop:"1%", padding:"1.5%", borderRadius:"5px"}}
      type="text"
      onChange={(e) => settitle(e.target.value)} 
      value={title}/>
      <button style={{width:"6%", marginTop:"1%", marginLeft:"66%", borderRadius:"5px", backgroundColor:"green", color:"white"}} onClick={() => {
       dispatch(addPost({ title, id: Math.random() }));
       settitle("") }}>
        Add Post
      </button>
    </div>
  );
};

export default AddPost;