import { saveToStorage, getFromStorage } from './storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

jest.mock('@react-native-async-storage/async-storage');

describe('AsyncStorage Utilities', () => {
  beforeEach(() => {
    AsyncStorage.setItem.mockClear();
    AsyncStorage.getItem.mockClear();
  });

  it('Guarda datos en AsyncStorage', async () => {
    await saveToStorage('testKey', { name: 'React Native' });
    expect(AsyncStorage.setItem).toHaveBeenCalledWith('testKey', JSON.stringify({ name: 'React Native' }));
  });

  it('Obtiene datos de AsyncStorage', async () => {
    AsyncStorage.getItem.mockResolvedValue(JSON.stringify({ name: 'React Native' }));
    const data = await getFromStorage('testKey');
    expect(data).toEqual({ name: 'React Native' });
  });
});
