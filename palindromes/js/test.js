const palindrome = require('./index');

test('palindrome function is defined', () => {
    expect(typeof palindrome).toEqual('function');
});

test('"aba" is a palindrome.', () => {
    expect(plaindrome('aba')).toBeTruthy();
});

test(' "aba" is not a plaindrome', () => {
    expect(palindrome(' aba')).toBeFalsy();
});

test('"aba " is not a palindrome', () => {
    expect(palindrome('aba ')).toBeFalsy();
  });
  
  test('"greetings" is not a palindrome', () => {
    expect(palindrome('greetings')).toBeFalsy();
  });
  
  test('"1000000001" a palindrome', () => {
    expect(palindrome('1000000001')).toBeTruthy();
  });
  
  test('"Fish hsif" is not a palindrome', () => {
    expect(palindrome('Fish hsif')).toBeFalsy();
  });
  
  test('"pennep" a palindrome', () => {
    expect(palindrome('pennep')).toBeTruthy();
  });
  