import React from "react";
import { TextInput } from "react-native";
import { usePosts } from "../../context/Posts.context";


const Search: React.FC = () => {
    const {searchPosts} = usePosts();

    return(
        <TextInput
        placeholder="Buscar por titulo..."
        style={{
          height: 40,
          borderColor: '#ccc',
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
          borderRadius: 5,
        }}
        onChangeText={searchPosts}
      />
    )
}

export default Search;
