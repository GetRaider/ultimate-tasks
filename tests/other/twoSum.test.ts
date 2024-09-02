import { twoSum } from "@tasks/twoSum.task";

describe("two sum - should return indices of the two numbers such that they add up to 'target'", () => {
  it(`different values`, () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
  it(`duplicated values`, () => {
    expect(twoSum([3, 2, 3], 6)).toEqual([0, 2]);
  });
  it(`duplicated values in row`, () => {
    expect(twoSum([2, 5, 5, 11], 10)).toEqual([1, 2]);
  });
});
