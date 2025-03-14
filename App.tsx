import React from 'react';
import PostsProvider from './src/context/Posts.context';
import PostScreen from './src/screens/PostScreen';
import './global.css';

const App = () => {
  return (
    <PostsProvider>
      <PostScreen />
    </PostsProvider>
  );
};

export default App;
