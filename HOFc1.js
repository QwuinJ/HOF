// Challenge
// Write a simple function which logs "Hello Code Nation" to the console
// Write a higher order function to call this function five times

let helloFunc = (fn) => {
	fn("Hello Code Nation");
};

let bigFunction = (hello) => {
	for (let i = 0; i < 5; i++) {
		console.log(hello);
	}
};

helloFunc(bigFunction);
