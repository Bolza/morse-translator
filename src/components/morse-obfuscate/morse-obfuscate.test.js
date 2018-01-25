const translateToObfuscatedMorse = require('./morse-obfuscate');

it('accepts a message and return Obfuscated morse code', () => {
    const message = '..---.';
    const expected = '2C1';
    expect(translateToObfuscatedMorse(message)).toEqual(expected);
});

it('ignores non-morse characters', () => {
    const message = '..|-- ... AA...';
    const expected = '2B33';
    expect(translateToObfuscatedMorse(message)).toEqual(expected);
});
