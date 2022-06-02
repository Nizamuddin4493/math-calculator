import operate from '../logic/operate';
import React from 'react';
import { render, screen } from '@testing-library/react';
import calculate from '../logic/calculate';

describe('AC operation', () => {
  it('Check the AC operation', () => {
    const input = {
      total: 5,
      next: 6,
      operation: null,
    };
    const output = {
      total: null,
      next: null,
      operation: null,
    };
    expect(calculate(input, 'AC')).toStrictEqual(output);
  });
});

describe('Plus + operation', () => {
  it('Check the sum operation', () => {
    const input = {
      total: 5,
      next: null,
      operation: null,
    };

    const output = {
      total: 5,
      next: null,
      operation: '+',
    };
    expect(calculate(input, '+')).toStrictEqual(output);
  });
});
