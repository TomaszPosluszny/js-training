// 1. Task: Write a function that takes two numbers and returns their sum.

function addNumbers(a, b) {
	return a + b;
}

console.log(addNumbers(5,4));
console.log(addNumbers(10,6));
console.log(addNumbers(12,5));

// 2. Task: Write a function that takes an array of numbers and returns the sum of all elements.

const numbers = [10,22,55]

function sumArray(numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }

  console.log(sumArray([10,12,15]));
  console.log(sumArray([34,56,16]));
  console.log(sumArray(numbers));

//  3. Task: Write a function that checks if a given string is a palindrome (reads the same forwards and backwards).

const str = "Tomek"

function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }

  console.log(isPalindrome("mkm"));
  console.log(isPalindrome(str));