import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Contact from './Contact';

describe('Contact Page', () => {
  it('renders contact title and email link', () => {
    render(<Contact />);
    expect(screen.getByText('Contact Us')).toBeDefined();
    expect(screen.getByText('info@magicalstrings.com')).toBeDefined();
  });

  it('does not display a phone number', () => {
    render(<Contact />);
    expect(screen.queryByText(/\(253\)/)).toBeNull();
  });
});
