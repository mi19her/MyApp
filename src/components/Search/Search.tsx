import React from 'react';
import { TextInput } from 'react-native';
import { usePosts } from '../../context/Posts.context';
import { styles } from './Search.styles';

const Search: React.FC = () => {
    const {searchPosts} = usePosts();

    return(
        <TextInput
        placeholder="Buscar por titulo..."
        style={styles.container}
        onChangeText={searchPosts}
      />
    );
};

export default Search;
