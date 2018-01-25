const morseTranslate = require('./index');

it('without obfuscate accepts a message and return morse code', () => {
    const message = 'I AM IN TROUBLE';
    const expected = '../.-|--/..|-./-|.-.|---|..-|-...|.-..|.';
    expect(morseTranslate(message)).toEqual(expected);
});

it('WITH obfuscate accepts a message and returns obfuscated morse code', () => {
    const message = 'I AM IN TROUBLE';
    const expected = '2/1A|B/2|A1/A|1A1|C|2A|A3|1A2|1';
    expect(morseTranslate(message, true)).toEqual(expected);
});

