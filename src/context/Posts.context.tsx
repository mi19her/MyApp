import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostsContextType {
  posts: Post[];
  fetchNextUserPosts: () => Promise<void>;
  refreshPosts: () => Promise<void>;
  searchPosts: (query: string) => void;
  searchQuery: string;
}

const PostsContext = createContext<PostsContextType | undefined>(undefined);

const PostsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentUser, setCurrentUser] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
     loadStoredPosts();
  }, []);

  const loadStoredPosts = async () => {
    const storedPosts = await AsyncStorage.getItem('posts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
  };

  const fetchNextUserPosts = async () => {
    if (currentUser > 5) return;
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${currentUser}/posts`);
      const newPosts = await response.json();
      const updatedPosts = [...posts, ...newPosts];

      setPosts(updatedPosts);
      await AsyncStorage.setItem('posts', JSON.stringify(updatedPosts));
      setCurrentUser(currentUser + 1);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const refreshPosts = async () => {
    try {
      setPosts([]); 
      setCurrentUser(1);
      await AsyncStorage.removeItem('posts');
      await fetchNextUserPosts();
    } catch (error) {
      console.error('Error refreshing posts:', error);
    }
  };

  const searchPosts = (query: string) => {
    setSearchQuery(query.toLowerCase());
  };

  return (
    <PostsContext.Provider value={{ posts, fetchNextUserPosts, refreshPosts, searchPosts, searchQuery }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error('usePosts must be used within a PostsProvider');
  }
  return context;
};

export default PostsProvider;
