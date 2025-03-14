import { act } from 'react';
import { renderHook } from '@testing-library/react-native';
import PostsProvider, { usePosts } from './Posts.context';
import AsyncStorage from '@react-native-async-storage/async-storage';

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
}));

describe('PostsContext', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    AsyncStorage.setItem.mockClear();
    AsyncStorage.getItem.mockClear();
  });

  it('Carga publicaciones desde AsyncStorage al iniciar', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify([{ id: 1, userId: 1, title: 'Post 1', body: 'Body 1' }])
    );

    const { result } = renderHook(() => usePosts(), { wrapper: PostsProvider });

    await act(async () => {
      await result.current.fetchNextUserPosts();
    });

    expect(result.current.posts).toHaveLength(1);
    expect(result.current.posts[0].title).toBe('Post 1');
    expect(result.current.posts[0].body).toBe('Body 1');
  });

  it('Realiza una solicitud a la API cuando se llama fetchNextUserPosts', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify([{ id: 2, userId: 1, title: 'Post 2', body: 'Body 2' }])
    );

    const { result } = renderHook(() => usePosts(), { wrapper: PostsProvider });

    await act(async () => {
      await result.current.fetchNextUserPosts();
    });

    expect(fetchMock).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users/1/posts');
    expect(result.current.posts).toHaveLength(1);
  });
});
