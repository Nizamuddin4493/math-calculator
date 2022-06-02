import operate from '../logic/operate';

describe('Checking if our operate javascript works well', () => {
  test('Check if it adds correctly', () => {
    expect(operate('2', '3', '+')).toStrictEqual('5');
  });

  test('Check if it subtracts correctly', () => {
    expect(operate('5', '3', '-')).toStrictEqual('2');
  });

  test('Check if it devides correctly', () => {
    expect(operate('15', '3', '÷')).toStrictEqual('5');
  });

  test('Check if it multiplies correctly', () => {
    expect(operate('3', '3', 'x')).toStrictEqual('9');
  });

  test('Check if it returns an error string when we try to devide by zero', () => {
    expect(operate('2', '0', '÷')).toStrictEqual("Can't divide by 0.");
  });

  test('Check if modulo works correctly', () => {
    expect(operate('5', '3', '%')).toStrictEqual('2');
  });

  test('Check if it returns an error string when we try to operate module by zero', () => {
    expect(operate('2', '0', '%')).toStrictEqual(
      "Can't find modulo as can't divide by 0."
    );
  });

  test('Check if it throws an error when the operation is unknown', () => {
    expect(() => operate(('2', '3', '*')).toThrow("Unknown operation '*'"));
  });
});
