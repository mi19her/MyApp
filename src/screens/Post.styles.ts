import { StyleSheet, ViewStyle } from 'react-native';

interface PostStyles {
  container: ViewStyle;
}

export const PostStyle = StyleSheet.create<PostStyles>({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 50,
  },
});
