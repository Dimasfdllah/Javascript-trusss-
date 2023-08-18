function palindrome(kata) {
  for (let i = 0; i < kata.length / 2; i++) {
    if (kata[i] !== kata[kata.length - i - 1]) {
      return "not palindrome";
    }
  }
  return "palindrome";
}

console.log(palindrome("katak"));
console.log(palindrome("kasur rusak"));
console.log(palindrome("hallo"));
console.log(palindrome("hai"));
