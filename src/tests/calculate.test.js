import operate from '../logic/operate';
import calculate from '../logic/calculate';

describe('Unit testing of the calculate javascript file', () => {
  it('Check if button AC works well', () => {
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

  describe('Checks for number button clicks', () => {
    it('Check if it returns an empty object if button 0 is clicked', () => {
      const input = {
        total: 5,
        next: '0',
        operation: '+',
      };
      expect(calculate(input, '0')).toStrictEqual({});
    });

    it('Check if there is an operation and our function updates next', () => {
      const input = {
        total: 5,
        next: '3',
        operation: '+',
      };

      const output = {
        total: 5,
        next: '35',
        operation: '+',
      };
      expect(calculate(input, '5')).toStrictEqual(output);
    });

    it('Check if there is no operation, update next and clear the value', () => {
      const input = {
        total: 5,
        next: '3',
        operation: null,
      };

      const output = {
        total: null,
        next: '35',
      };
      expect(calculate(input, '5')).toStrictEqual(output);
    });
  });

  describe('Check for other button clicks', () => {
    it('Check if the . button works well', () => {
      const input = {
        total: 5,
        next: '3',
        operation: '+',
      };

      const output = {
        total: 5,
        next: '3.',
        operation: '+',
      };
      expect(calculate(input, '.')).toStrictEqual(output);
    });

    it("Check if it calls the operate function when '=' button is clicked", () => {
      const input = {
        total: '5',
        next: '3',
        operation: '+',
      };

      const output = {
        total: operate('5', '3', '+'),
        next: null,
        operation: null,
      };
      expect(calculate(input, '=')).toStrictEqual(output);
    });

    it("If it returns nothing when '=' button is clicked with no operation", () => {
      const input = {
        total: '5',
        next: '3',
        operation: null,
      };
      expect(calculate(input, '=')).toStrictEqual({});
    });

    it("Check if '+/-' button works well", () => {
      const input = {
        total: '5',
        next: '3',
        operation: '+',
      };

      const output = {
        total: '5',
        next: '-3',
        operation: '+',
      };
      expect(calculate(input, '+/-')).toStrictEqual(output);
    });

    it("Check if it changes the operation value if we click an operation after clicking '=' ", () => {
      const input = {
        total: '5',
        next: null,
        operation: null,
      };

      const output = {
        total: '5',
        next: null,
        operation: '+',
      };
      expect(calculate(input, '+')).toStrictEqual(output);
    });

    it('Check if our function behaves well if user pressed an operation button and there is an existing operation', () => {
      const input = {
        total: '5',
        next: null,
        operation: '+',
      };

      const output = {
        total: '5',
        next: null,
        operation: 'x',
      };
      expect(calculate(input, 'x')).toStrictEqual(output);
    });
  });
});
