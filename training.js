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
