import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PolaroidPhoto from './PolaroidPhoto';

describe('<PolaroidPhoto />', () => {
  test('it should mount', () => {
    render(<PolaroidPhoto />);
    
    const polaroidPhoto = screen.getByTestId('PolaroidPhoto');

    expect(polaroidPhoto).toBeInTheDocument();
  });
});