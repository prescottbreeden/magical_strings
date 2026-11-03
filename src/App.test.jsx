import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('Magical Strings App', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />);
    expect(container).toBeDefined();
  });

  it('renders navigation links', () => {
    render(<App />);
    expect(screen.getAllByText('Events').length).toBeGreaterThan(0);
    expect(screen.getByText('Albums')).toBeDefined();
    expect(screen.getByText('Shop')).toBeDefined();
    expect(screen.getByText('Classes')).toBeDefined();
    expect(screen.getByText('Contact')).toBeDefined();
  });
});
