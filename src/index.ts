const SHIT_WORDS = ["unko", "kuso"] as const;

type ShitWord = (typeof SHIT_WORDS)[number];

const randomShitWord = (): ShitWord => {
	const randomIndex = Math.floor(Math.random() * SHIT_WORDS.length);
	return SHIT_WORDS[randomIndex];
};

const shitToJa = (word: ShitWord): string => {
	switch (word) {
		case "unko":
			return "うんこ";
		case "kuso":
			return "くそ";
	}
};

for (let i = 0; i < 10; i++) {
	const w = randomShitWord();
	if (w === "unko") {
		console.log("うんこ");
		break;
	}
	if (w === "kuso") {
	}
}
