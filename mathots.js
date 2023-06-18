// 1. charAt()

// Task 1: Write a function that takes a string as an argument and returns the first letter of that string.

function getFirstLetter(text) {
	return text.charAt(0);
}

const text = 'Sample text';
console.log(getFirstLetter(text));

// Task 2: Write a function that takes a string as an argument and returns the last letter of that string.

function getLastLetter(text) {
	return textOne.charAt(text.length - 1);
}

const textOne = 'Another task';
console.log(getLastLetter(textOne));

// 2. toUpperCase()

//  Task 1: Write a function that takes two strings as arguments and returns a new string where both strings are converted to uppercase. Use the toUpperCase() method.
function mergeAndConvertToUppercase(str1, str2) {
	const mergedString = str1.concat(str2);
	const uppercaseString = mergedString.toUpperCase();
	return uppercaseString;
}

const result = mergeAndConvertToUppercase('Hello', 'World');
console.log(result);

//Task2: Write a program that prompts the user for a string, converts all the letters to uppercase using the toUpperCase() method, and then displays the modified string on the screen

const input = prompt('Enter a string:');
const uppercaseString = input.toUpperCase();

console.log('Modified string:', uppercaseString);


// 3 toLowerCase()

// Task 1:  Write a function that takes two strings as arguments and returns a new string where both strings are converted to lowercase. Use the toLowerCase() method.

function mergeAndConvertToLowerCase(a,b){
const mergeString = a.concat(b)
const lowercaseString = mergeString.toLowerCase()
return lowercaseString
}

const resultLower = mergeAndConvertToLowerCase("Hello", "World")
console.log(resultLower);


// Task 2: Write a program that prompts the user for a string, converts all the letters to lowercase using the toLowerCase() method, and then displays the modified string on the screen.

const inputLover = prompt("Enter a string:");
var lowercaseString = inputLover.toLowerCase();
console.log("Modified string:", lowercaseString);