// let myFunc = () => {
// 	return () => {
// 		console.log("hello");
// 	};
// };

// console.log(myFunc());

let multiply = (num1) => {
	return (num2) => {
		return num1 * num2;
	};
};

let returnedFunction = multiply(2);

console.log(returnedFunction(4));
