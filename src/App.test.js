import { render, screen } from '@testing-library/react';
import App from './App.js'; // eslint-disable-line no-unused-vars

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
