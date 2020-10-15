import React, { useReducer } from 'react';

const BlogContext = React.createContext();

const blogReducer = () => {

};

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []);


  return <BlogContext.Provider value={{ data: blogPosts }}>
      {children}
    </BlogContext.Provider>
};

export default BlogContext;
