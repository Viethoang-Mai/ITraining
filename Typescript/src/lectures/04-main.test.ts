import { isPositive } from './04-main';
describe('isPositive()', () => {
  it('should return true when num > 0', () => {
    expect(isPositive(1)).toBe(true);
    expect(isPositive(100)).toBe(true);
    expect(isPositive(0)).toBe(false);
  });
  it('should return true when num = 0', () => {
    expect(isPositive(0)).toBe(false);
  });
  it('should return true when num < 0', () => {
    expect(isPositive(-1)).toBe(false);
  });
});
