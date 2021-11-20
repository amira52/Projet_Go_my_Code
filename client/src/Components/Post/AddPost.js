import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../JS/actions/Post";

const AddPost = () => {
  const [Description, setDescription] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <input
        style={{ padding: "2%", borderRadius: "5px", width: "43%" }}
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={Description}
      />
      <div>
        <button
          style={{
            backgroundColor: "darkblue",
            marginTop: "1%",
            padding: "3px 10px",
            borderRadius: "5px",
            color: "wheat",
            marginLeft: "41%",
          }}
          onClick={() => {
            dispatch(addPost({ Description }));
            setDescription("");
          }}
        >
          Add Post
        </button>
      </div>
    </div>
  );
};

export default AddPost;
