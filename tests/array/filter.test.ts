import { filter } from "@tasks/array.task";

describe("filter", () => {
  it(`should return new array with filtered values`, () => {
    const numbers = [1, 2, 3, 5, 6, 7, 8];
    expect(filter(numbers, number => number > 5)).toEqual([6, 7, 8]);
  });
});
