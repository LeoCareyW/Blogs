import createDataContext from './createDataContext';


const blogReducer = (state, action) => {
  switch (action.type) {
    case 'EDIT_BLOG_POST':
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost
      });
    case 'ADD_BLOG_POST':
      return [...state, { id: Math.floor(Math.random() * 99999), title: action.payload.title, content: action.payload.content}];
    case 'DELETE_BLOG_POST':
      return state.filter(blogPost => blogPost.id !== action.payload);
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
  dispatch({ type: 'ADD_BLOG_POST', payload: { title, content } });
  if (callback) {
    callback();
  }
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: 'DELETE_BLOG_POST', payload: id})
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: 'EDIT_BLOG_POST', payload: { id, title, content}})
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ title: 'Test Post', content: 'Test Content', id: 1}]
);
