const SPACE = '/';
const WORD_SEPARATOR = '|';

function translateToMorse(message, DICT) {
	return Array.from(message).reduce( (acc, char, index) => {
		if (char === ' ') return `${acc}${SPACE}`;
		const symbol = DICT[char.toUpperCase()];
		if (!symbol) return acc;
		const followingChar = message[index + 1];
		const separator = !!followingChar && followingChar !== ' ' ? WORD_SEPARATOR : '' ;
		return `${acc}${symbol}${separator}`;
	}, '' )
}

module.exports = translateToMorse;
