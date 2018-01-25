const ASCII_START = 64;

/**
 * Regex from https://stackoverflow.com/questions/28654091/javascript-function-to-automatically-count-consecutive-letters-in-a-string
 * @example '...--.' will output: [ [ '.', 3 ], [ '-', 2 ], [ '.', 1 ] ]
 */
function characterGrouping(str) {
    const groups = str.match(/([\.-])\1*/g) || [];
    return groups.map( (group) => {
        return [group[0], group.length];
    });
}

/**
 * Obfuscates a single morse sequence
 * replace the number of consecutive dots with a number, and replace 
 * the number of consecutive dashes with the letter of the alphabet at that position. 
 * @example S = ... = 3, Q = --.- = b1a, F = ..-. = 2a1
 * @param {string} morseSequence morse sequence string (eg: '.-')
 * @returns {string} obfuscated string (eg: '.-' => '1A' )
 */
function obfuscateMorse(morseSequence) {
    const groupChar = characterGrouping(morseSequence);
    return groupChar.reduce( (acc, group) => {
        switch(group[0]) {
            case '.':
                return `${acc}${group[1]}`;
            break
            case '-':
                return `${acc}${String.fromCharCode(ASCII_START + group[1])}`;
            break
            default:
                return `${acc}`;
        }
    }, '')
}

function translateToObfuscatedMorse(message) {
	return obfuscateMorse(message)
}

module.exports = translateToObfuscatedMorse;
