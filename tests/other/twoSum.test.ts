import { twoSum } from "@tasks/twoSum.task";

describe("two sum", () => {
  it(`should return indices of the two numbers such that they add up to 'target'`, () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
});
