import React from 'react';
import { render } from '@testing-library/react-native';
import Item from './Item';

describe('Item component', () => {
    it('renders correctly', () => {
        const { getByText } = render(<Item title="Test Title" body="Test Body" />);
        expect(getByText('Test Title')).toBeTruthy();
        expect(getByText('Test Body')).toBeTruthy();
    });
});
