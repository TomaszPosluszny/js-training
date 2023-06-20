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

function mergeAndConvertToLowerCase(a, b) {
	const mergeString = a.concat(b);
	const lowercaseString = mergeString.toLowerCase();
	return lowercaseString;
}

const resultLower = mergeAndConvertToLowerCase('Hello', 'World');
console.log(resultLower);

// Task 2: Write a program that prompts the user for a string, converts all the letters to lowercase using the toLowerCase() method, and then displays the modified string on the screen.

const inputLover = prompt('Enter a string:');
var lowercaseString = inputLover.toLowerCase();
console.log('Modified string:', lowercaseString);

// split()

//  Task 1: Counting words in a sentence The task is to determine the number of words in a given sentence. We can use the split() method to split the sentence into an array of words, and then count the number of elements in that array.

function countWords(sentence) {
	const words = sentence.split(' ');
	return words.length;
}

const sentence = 'This is an example sentence.';
const wordCount = countWords(sentence);
console.log('Word count: ' + wordCount);

// Task 2: Reversing a string.The task is to reverse a given string. We can use the split() method to convert the string into an array, then use the reverse() method to reverse the order of elements in the array. Finally, we use the join() method to concatenate the reversed characters back into a single string.

function reverseString(inputString) {
	const charArray = inputString.split('');
	const reversedArray = charArray.reverse();
	const reversedString = reversedArray.join('');
	return reversedString;
}

const stringToReverse = 'Hello, World!';
const reversedString = reverseString(stringToReverse);
console.log('Reversed string: ' + reversedString);

// join()

// Task 1: Joining array elements into a string. The task is to concatenate the elements of an array into a single string, separating them with a specified separator. In this case, we can use the join() method to combine the array elements into a string, using the separator as the method's argument.

const fruits = ['apple', 'banana', 'orange'];
const joinedString = fruits.join(', ');
console.log('Joined string: ' + joinedString);

//Task 2: Generating time format. The task is to generate a time format in the form of hour:minute based on two numbers representing the hour and minute. We can use the join() method to concatenate these two numbers into a string, separating them with a colon.

function formatTime(hour, minute) {
	var timeArray = [hour, minute];
	var formattedTime = timeArray.join(':');
	return formattedTime;
}

var hour = 9;
var minute = 30;
var formattedTimeString = formatTime(hour, minute);
console.log('Formatted time: ' + formattedTimeString);
