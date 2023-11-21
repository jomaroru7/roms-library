import React from 'react';
import { render, screen } from '@testing-library/react';
import {RomsLibrary} from './RomsLibrary';

test('renders learn react link', () => {
  render(<RomsLibrary />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
