import React, { useEffect } from 'react';
import { View, FlatList, ActivityIndicator, RefreshControl } from 'react-native';
import { usePosts } from '../context/Posts.context';
import Item from '../components/Item/Item';
import Search from '../components/Search/Search';
import { PostStyle } from './Post.styles';

const PostScreen = () => {
  const { posts, fetchNextUserPosts, refreshPosts, searchQuery } = usePosts();

  useEffect(() => {
    if (posts.length === 0) {fetchNextUserPosts();}
  }, [fetchNextUserPosts, posts.length]);

  const filteredPosts = searchQuery
    ? posts.filter(post => post.title.toLowerCase().includes(searchQuery))
    : posts;

  return (
    <View style={PostStyle.container}>
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
