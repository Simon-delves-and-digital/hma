import { render, screen, cleanup } from '@testing-library/react';
import { within } from '@testing-library/dom';
import { test, expect, vi, afterEach } from 'vitest';
import { ProductCard } from './ProductCard';

afterEach(() => {
  cleanup();
});

const mockProduct = {
  title: 'test product',
  thumbnail: 'testImage',
  description: "test description",
  price: 1234

};

const mockAddToCart = vi.fn();

test('renders correct title element', () => {
  render(<ProductCard product={mockProduct} addToCart={mockAddToCart} />);

  const priceElement = screen.getByTestId('ProductCardTitle');
  expect(within(priceElement).getByText(mockProduct.title, { exact: false })).toBeDefined();
});

test('renders correct Price element', () => {
  render(<ProductCard product={mockProduct} addToCart={mockAddToCart} />);

  const priceElement = screen.getByTestId('ProductCardPrice');
  expect(within(priceElement).getByText(`£${mockProduct.price}`, { exact: false })).toBeDefined();
});
