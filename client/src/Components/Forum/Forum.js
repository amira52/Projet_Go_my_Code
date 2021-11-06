import React from 'react'
import AddPost from './AddPost';
import './Form.css';
import PostList from './PostList';




const Forum = () => {
    return (
    <div >
      <h4 >Welcome To The Blog</h4>
   <AddPost/>
   <PostList/>
    </div>
    )
}

export default Forum;
