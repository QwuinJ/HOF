// Challenge 4
// Test following code to make sure it works
// Pass a number to the doMath function,
// then pass a number and one of the four maths functions to the returned functions.

const multiply = (a, b) => {
	return a * b;
};

const add = (a, b) => {
	return a + b;
};

const divide = (a, b) => {
	return a / b;
};

const subtract = (a, b) => {
	return a - b;
};

const doMath = (num1) => {
	return (num2, fn) => {
		return fn(num1, num2);
	};
};

let returnedFunction = doMath(7);

console.log(returnedFunction(4, multiply));
