const translateToMorse = require('../morse-translate/morse-translate');
const MORSE_DICT = require('../../morseDict');

it('accepts a message and return morse code', () => {
    const message = 'I AM IN TROUBLE';
    const expected = '../.-|--/..|-./-|.-.|---|..-|-...|.-..|.';
    expect(translateToMorse(message, MORSE_DICT)).toEqual(expected);
});

it('converts letters to uppercase', () => {
    const message = 'i am in trouble';
    const expected = '../.-|--/..|-./-|.-.|---|..-|-...|.-..|.';
    expect(translateToMorse(message, MORSE_DICT)).toEqual(expected);
});

it('ignores characters not in dictionary', () => {
    const message = 'a!@£$%b^&*(c';
    const letters = 'abc';
    expect(translateToMorse(message, MORSE_DICT)).toEqual(translateToMorse(letters, MORSE_DICT));
});

it('handles commas and points', () => {
    const message = 'a. b,';
    const expected = '.-|.-.-.-/-...|--..--';
    expect(translateToMorse(message, MORSE_DICT)).toEqual(expected);
});
