import '@testing-library/jest-native/extend-expect';
import fetchMock from 'jest-fetch-mock';
import { jest } from '@jest/globals';

fetchMock.enableMocks();
// Mock de AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () =>
    require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);
