let whichGreeting = (timeOfDay) => {
	console.log(`Good ${timeOfDay}`);
};

let greet = (time, fn) => {
	if (time < 12) {
		fn("Morning");
	} else if (time > 12 && time < 18) {
		fn("Afternoon");
	} else {
		fn("Evening");
	}
};

greet(14, whichGreeting);
greet(8, whichGreeting);
greet(19, whichGreeting);

let whatDay = (dayOfWeek) => {
	console.log(`It is ${dayOfWeek} my dudes`);
};

let hello = (day, fn) => {
	if (day == "Monday") {
		fn("Monday");
	} else if (day == "Tuesday") {
		fn("Tuesday");
	} else if (day == "Wednesday") {
		fn("Wednesday");
	} else if (day == "Thursday") {
		fn("Thursday");
	} else if (day == "Friday") {
		fn("Friday");
	} else if (day == "Saturday") {
		fn("Saturday");
	} else {
		fn("Sunday");
	}
};

hello("Saturday", whatDay);
