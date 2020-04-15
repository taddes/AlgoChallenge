const anagrams = require('./index.js');

test('anagrams function exists', () => {
    expect(anagrams).toBeDefined();
});

test('anagrams is afunction', () => {
    expect(typeof anagrams).toEqual('function');
});

test('"hello" is an anagram of "llohe"', () => {
    expect(anagrams('hello', 'llohe')).toBeTruthy();
});

test('"Whoa! Hi!" is an anagram of "Hi! Whoa!"', () => {
    expect(anagrams('Whoa! Hi!', 'Hi! Whoa!')).toBeTruthy()
});