import { StyleSheet, ViewStyle } from 'react-native';

interface Styles {
  container: ViewStyle;
  title: ViewStyle;
  body: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
    container: {
      padding: 15,
      marginVertical: 5,
      backgroundColor: '#fff',
      borderRadius: 8,
      shadowColor: '#9b9b9b',
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    body: {
      fontSize: 14,
      paddingTop: 5,
      color: '#666',
    },
  });
