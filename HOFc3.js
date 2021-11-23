// Challenge 3:
// The array method map is a HOF
// Declare an array with five numbers
// Use map to iterate through and multiply each array item by 3

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myFunc = (num) => {
	return num * 3;
};

let multNumbers = numbers.map(myFunc);

console.log(multNumbers);
