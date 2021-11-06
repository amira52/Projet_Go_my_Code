import { ADD_POST } from "../constants/posts";


// initialstate
const initialState = {
  posts: [{ id: Math.random(), title: "Welcome visitor! We look forward to growing with you as we embark on this new journey. Thanks for stopping by!." }],
  show: false,
};

// purefunction
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };

    default:
      return state;
  }
};
// export
export default postReducer;