const map = <T, R>(arr: T[], fn: (i: T) => R): R[] => {
	const ret = [];
	for (const n of arr) {
		ret.push(fn(n));
	}
	return ret;
};

console.log(map([1, 2, 3], (i) => i > 1));
