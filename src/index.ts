import * as readline from "node:readline";

const greet = (name: string): string => {
	return `Hello, ${name}!`;
};

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question("Enter your name: ", (name) => {
	console.log(greet(name));
	rl.close();
});
