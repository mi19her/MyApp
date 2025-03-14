import React, { useEffect } from 'react';
import { View, FlatList, ActivityIndicator, RefreshControl } from 'react-native';
import { usePosts } from '../context/Posts.context';
import Item from '../components/Item/Item';
import Search from '../components/Search/Search';
import './global.css';

const PostScreen = () => {
  const { posts, fetchNextUserPosts, refreshPosts, searchQuery } = usePosts();

  useEffect(() => {
    if (posts.length === 0) fetchNextUserPosts();
  }, []);

  const filteredPosts = searchQuery
    ? posts.filter(post => post.title.toLowerCase().includes(searchQuery))
    : posts;

  return (
    <View className="bg-slate-600 flex-1 items-center justify-center" >
      <Search />
      <FlatList
        data={filteredPosts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Item title={item.title} body={item.body} />}
        onEndReached={fetchNextUserPosts}
        onEndReachedThreshold={0.5}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={refreshPosts} />
        }
        ListFooterComponent={<ActivityIndicator size="small" color="#000" />}
      />
    </View>
  );
};

export default PostScreen;
