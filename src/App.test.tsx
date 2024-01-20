import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import App from './App';

describe('App', () => {
  it.skip('renders headline', () => {
    render(<App />);

    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
