export function twoSum(numbers: number[], target: number): number[] {
  const prevNumbers: number[] = [];
  for (let i = 0; i <= numbers.length; i++) {
    if (prevNumbers.length) {
      for (let j = prevNumbers.length - 1; j <= prevNumbers.length; j++) {
        if (numbers[i] + prevNumbers[j] === target) {
          return [numbers.indexOf(prevNumbers[j]), i];
        }
      }
    }
    prevNumbers.push(numbers[i]);
  }
}
