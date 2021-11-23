// Challenge 2
// Write a simple function which has two parameters and returns their sum
// Create HOF which takes three parameters (A function and two numbers)
// Use the HOF to run the sumple function five times, adding each result to a total variable
// Return the total variable
// Console log the total result

let simpleSum = (n1, n2) => {
	x = n1 + n2;
	return x;
};

let biggerSum = (fn, num1, num2) => {
	let y = 0;
	for (let i = 0; i < 5; i++) {
		fn(num1, num2);
		y += x;
		// console.log(y);
	}
	console.log(y);
};

biggerSum(simpleSum, 6, 8);
