import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';

describe('App', () => {
  const x = 2
  const y = 2
  it('can plus', () => {
    expect(x+y).toBe(4)
  });
  it('can multiply', () => {
    expect(x*y).toBe(4)
  });
});