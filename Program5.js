var repeatedDigits = [];

for (var i = 10; i < 100; i++) {
  if (String(i)[0] === String(i)[1]) {
    repeatedDigits.push(i);
  }
}

console.log(repeatedDigits);
