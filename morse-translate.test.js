const translateToMorse = require('./morse-translate');

it('accepts a message and return morse code', () => {
    const message = 'I AM IN TROUBLE';
    const expected = '../.-|--/..|-./-|.-.|---|..-|-...|.-..|.';
    expect(translateToMorse(message)).toEqual(expected);
});
