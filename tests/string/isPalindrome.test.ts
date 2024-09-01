import { isPalindrome } from "../../src/examples/string.example";

describe("isPalindrome", () => {
  const errorMessage = "Passed text is undefined or empty";
  it(`should throw error with the '${errorMessage}' message when pass an empty text param`, () => {
    expect(() => isPalindrome("")).toThrowError(errorMessage);
  });
});
