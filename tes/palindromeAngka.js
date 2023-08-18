function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}

function angkaPalindrome(num) {
  num++;
  while (true) {
    if (isPalindrome(String(num))) {
      return num;
    }
    num++;
  }
}

console.log(angkaPalindrome(8));
console.log(angkaPalindrome(10));
console.log(angkaPalindrome(117));
console.log(angkaPalindrome(175));
console.log(angkaPalindrome(1000));
