import React from 'react';
import { render } from '@testing-library/react-native';
import PostsScreen from './PostScreen';

jest.mock('../context/Posts.context', () => ({
  usePosts: jest.fn(() => ({
    posts: [
      { id: 1, userId: 1, title: 'First Post', body: 'This is a post' },
      { id: 2, userId: 1, title: 'Second Post', body: 'Another post' },
    ],
    fetchNextUserPosts: jest.fn(),
    refreshPosts: jest.fn(),
    searchPosts: jest.fn(),
    searchQuery: '',
  })),
}));

describe('PostsScreen', () => {
  it('Renderiza la lista de publicaciones', () => {
    const { getByText } = render(<PostsScreen />);

    expect(getByText('First Post')).toBeTruthy();
    expect(getByText('Second Post')).toBeTruthy();
  });
});
