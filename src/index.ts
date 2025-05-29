type MyFunc = {
	isUsed: boolean;
	(arg: number): void;
	(arg: string): void;
};

const double: MyFunc = (arg: number | string) => {
	if (typeof arg === "number") {
		console.log(arg * 2);
	} else {
		console.log(arg.repeat(2));
	}
};
double.isUsed = true;

double(2); // 4
double("Hi"); // HiHi
