import React from 'react';
import Search from './Search';
import { render, fireEvent } from '@testing-library/react-native';

const mockSearch = jest.fn();
jest.mock('../../context/Posts.context', () => ({
  usePosts: jest.fn(() => ({
    posts: [
      { id: 1, userId: 1, title: 'Title of test', body: 'This is a post' },
    ],
    fetchNextUserPosts: jest.fn(),
    refreshPosts: jest.fn(),
    searchPosts: mockSearch,
    searchQuery: '',
  })),
}));
describe('Search component', () => {
    it('Buscar publicaciones por titulo', () => {
        const { getByPlaceholderText } = render(<Search />);
        const searchInput = getByPlaceholderText('Buscar por titulo...');
        fireEvent.changeText(searchInput, 'Title');

        expect(mockSearch).toHaveBeenCalledWith('Title');
    });
});
