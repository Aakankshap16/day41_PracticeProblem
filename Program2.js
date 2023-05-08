function primeFactorization(n) {
    let factors = [];
    let divisor = 2;
  
    while (n > 2) {
      if (n % divisor == 0) {
        factors.push(divisor);
        n = n / divisor;
      } else {
        divisor++;
      }
    }
  
    return factors;
  }
  
 
  let number = 84;
  let primeFactors = primeFactorization(number);
  console.log("Prime Factors of", number + ":", primeFactors);
  