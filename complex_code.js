/* 
filename: complex_code.js
content: This code generates a complex algorithm to find all prime numbers within a given range and calculates the sum of all prime numbers. It also includes a function to check if a number is prime.
*/

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Function to find all prime numbers and calculate their sum within a given range
function findAndSumPrimes(start, end) {
  let primeNumbers = [];
  let sum = 0;

  if (start < 2) {
    start = 2;  // Adjust the start value to the first prime number (2)
  }

  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
      sum += i;
    }
  }

  console.log(`Prime Numbers between ${start} and ${end}: ${primeNumbers}`);
  console.log(`Sum of Prime Numbers: ${sum}`);
}

// Example usage
findAndSumPrimes(1, 1000);