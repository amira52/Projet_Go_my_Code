import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletePost, getAllPosts } from "../../JS/actions/Post";

const PostList = () => {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPosts());
  }, []);
  // const post = useSelector((state) => state.postReducer.posts);
  const posts = useSelector((state) => state.postReducer.posts);
  const handleDelete = (id) => {
    const result = window.confirm("confirm delete?");
    if (result) {
      dispatch(deletePost(id));
    }
  };
  return (
    <div>
      {posts.map((el) => (
        <p
          style={{
            backgroundColor: "wheat",
            width: "68%",
            margin: "1% 4%",
            padding: "6px",
            color: "black",
          }}
          key={el._id}
        >
          {el.Description}
          <div>
            {user.role == "admin" && (
              <button
                style={{
                  marginLeft: "95%",
                  display: "flex",
                  backgroundColor: "gray",
                  color: "orange",
                  borderRadius: "5px",
                }}
                onClick={() => handleDelete(el._id)}
              >
                Delete
              </button>
            )}
          </div>
        </p>
      ))}
    </div>
  );
};

export default PostList;
