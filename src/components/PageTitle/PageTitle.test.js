import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PageTitle from './PageTitle';

describe('<PageTitle />', () => {
  test('it should mount', () => {
    render(<PageTitle />);
    
    const pageTitle = screen.getByTestId('PageTitle');

    expect(pageTitle).toBeInTheDocument();
  });
});