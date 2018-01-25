const MORSE_DICT = require('./morseDict');
const translateToObfuscatedMorse = require('./components/morse-obfuscate/morse-obfuscate');
const translateToMorse = require('./components/morse-translate/morse-translate');

let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
});
console.log('type the message and press [ENTER]');

const obfuscatedDict = Object.keys(MORSE_DICT).reduce( (dict, char) => {
    return {
        ...dict,
        [char]: translateToObfuscatedMorse(MORSE_DICT[char])
    }
}, {});

function morseTranslate(line, obfuscate) {
    if (obfuscate) return translateToMorse(line, obfuscatedDict);
    return translateToMorse(line, MORSE_DICT);
}

rl.on('line', function(line){
	console.log('MORSE', morseTranslate(line));
	console.log('OBFUSCATED MORSE', morseTranslate(line, true));
})

module.exports = morseTranslate;