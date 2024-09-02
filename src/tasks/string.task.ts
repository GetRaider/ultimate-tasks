export function isPalindrome(text: string): boolean {
  if (!text?.length) {
    throw new Error("Passed text is undefined or empty");
  }
  return text === text.split("").reverse().join("");
}
