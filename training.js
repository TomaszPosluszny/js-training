// 1. Task: Write a function that takes two numbers and returns their sum.

function addNumbers(a, b) {
	return a + b;
}

console.log(addNumbers(5, 4));
console.log(addNumbers(10, 6));
console.log(addNumbers(12, 5));

// 2. Task: Write a function that takes an array of numbers and returns the sum of all elements.

const numbers = [10, 22, 55];

function sumArray(numbers) {
	return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumArray([10, 12, 15]));
console.log(sumArray([34, 56, 16]));
console.log(sumArray(numbers));

//  3. Task: Write a function that checks if a given string is a palindrome (reads the same forwards and backwards).

const str = 'Tomek';

function isPalindrome(str) {
	const reversed = str.split('').reverse().join('');
	return str === reversed;
}

console.log(isPalindrome('mkm'));
console.log(isPalindrome(str));

//   4. Task: Check if a given number is prime:

function isPrime(number) {
	if (numbers <= 1) {
		return false;
	}
	for (let i = 2; i <= Math.sqrt(number); i++) {
		if (number % i === 0) {
			return false;
		}
	}

	return true;
}

console.log(isPrime(7)); // true
console.log(isPrime(12)); // false

// 5. Task: Write a function that takes an array of numbers and returns a new array where each element is doubled.

// let array = [1, 2, 3, 4, 5];

const doubleNumbers = (array) => {
	return array.map((number) => number * 2);
};

console.log(doubleNumbers([5, 6, 9]));
// console.log(doubleNumbers(array));

// 6. Task: Write a function that takes an array of strings and returns a new array where each string is replaced with its length.

// const array = ["Magda", "Ola", "Krzyskiek"]

function stringLengths(array) {
	return array.map((string) => string.length);
}

console.log(stringLengths(['Tom', 'Agnieszka', 'Ala']));
// console.log(stringLengths(array));

// 7. Task: Write a function that takes an array of objects containing information about people (first name, last name) and returns a new array where each object has an additional "fullName" field with the full name.

const addFullName = (array) => {
	return array.map((person) => {
		return { ...person, fullName: `${person.firstName} ${person.lastName}` };
	});
};

const people = [
	{ firstName: 'Jan', lastName: 'Kowalski' },
	{ firstName: 'Anna', lastName: 'Nowak' },
];
const peopleWithFullName = addFullName(people);
console.log(peopleWithFullName);

// 8. Task: Write a function that takes an array of numbers and returns a new array with only the even numbers.

const filterEvenNumbers = (array) => {
	return array.filter((number) => number % 2 === 0);
};

const arrNumbers = [1, 2, 3, 4, 5];
const evenNumbers = filterEvenNumbers(arrNumbers);
console.log(evenNumbers);

// 9. Task: Write a function that takes an array of strings and returns a new array where each string is reversed.

const reverseStrings = (array) => {
	return array.map((string) => string.split('').reverse().join(''));
};

const strings = ['Tomek', 'ma', 'auto'];
const reversed = reverseStrings(strings);
console.log(reversed);

// 10. Sum numbers from 1 to a given integer:

function sumNumbers(n) {
	let sum = 0;

	for (let i = 1; i <= n; i++) {
		sum += i;
	}

	return sum;
}

console.log(sumNumbers(5)); 

// 11. Create a function that prints numbers from 1 to 10 in the console, with a 1-second delay between each number.


function printNumbers() {
	for (let i = 1; i <= 10; i++) {
	  setTimeout(() => {
		console.log(i);
	  }, i * 1000);
	}
  }
  
  printNumbers()

  // 12. Write a function called getFirstAndLastCharacter that takes one argument - a string. The function should return a string containing the first and last characters of the input string.


  function getFirstAndLastCharacter(str) {
	const firstCharacter = str.charAt(0);
	const lastCharacter = str.charAt(str.length - 1);
	return firstCharacter + lastCharacter;
  }
  
  console.log(getFirstAndLastCharacter('Hello')); // 'Ho'
  console.log(getFirstAndLastCharacter('OpenAI')); // 'OI'
  console.log(getFirstAndLastCharacter('JavaScript')); // 'Jt'