import { checkTest } from './utils';

describe('checkTest', () => {
  test('Should return hardcoded value', () => {
    expect(checkTest()).toBe('abc');
  });
});
