const MORSE = require('./morseDict');

let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
});

rl.on('line', function(line){
	console.log(translateToMorse(line));
})

function translateToMorse(message) {
	return Array.from(message).reduce( (acc, char, index) => {
		if (char === ' ') return `${acc}/`;
		const followingChar = message[index + 1];
		const separator = !!followingChar && followingChar !== ' ' ? '|' : '' ;
		const symbol = MORSE[char.toUpperCase()];
		return `${acc}${symbol}${separator}`;
	}, '' )
}
module.exports = translateToMorse;
