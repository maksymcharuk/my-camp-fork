import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardNavigation from './CardNavigation';

describe('<CardNavigation />', () => {
  test('it should mount', () => {
    render(<CardNavigation />);
    
    const cardNavigation = screen.getByTestId('CardNavigation');

    expect(cardNavigation).toBeInTheDocument();
  });
});