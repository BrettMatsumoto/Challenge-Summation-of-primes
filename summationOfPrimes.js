module.exports = function(limit) {
  let prime = [2];
  let sum = 0;

  for (let i = 3; i < limit; i += 2) {
    let isPrime = true;

    for (let j = 0; j < prime.length && prime[j] * prime[j] <= i; j++) {
      if (i % prime[j] === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      prime.push(i);
    }
  }

  for (let k = 0; k < prime.length; k++) {
    sum += prime[k];
  }

  return sum;
};
