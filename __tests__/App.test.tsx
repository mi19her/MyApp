import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

jest.mock('../src/context/Posts.context', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

jest.mock('../src/screens/PostScreen', () => {
  return {
    __esModule: true,
    default: () => {
      const { View } = require('react-native');
      return <View testID="post-screen" />;
    },
  };
});

describe('App Component', () => {
  it('Renderiza PostScreen dentro de PostsProvider', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('post-screen')).toBeTruthy();
  });

  it('No ejecuta Reactotron en Jest', () => {
    expect(process.env.JEST_WORKER_ID).toBeDefined();
    expect(require.cache[require.resolve('../ReactotronConfig')]).toBeUndefined();
  });
});
