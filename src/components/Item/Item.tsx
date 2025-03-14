import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './Item.styles';

interface ItemProps {
  title: string;
  body: string;
}

const Item: React.FC<ItemProps> = ({ title, body }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
};

export default Item;
