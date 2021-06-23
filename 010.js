// Problem 10: Summation of primes

//Method 1: Divisibility check
function primeSummation(n) {    
    function isPrime(num) {
        for (let i=2; i<=Math.ceil(Math.sqrt(num)); i++)
            if (num%i==0)
                return false;
        return true; 
    }

    var sumOfPrimes = 2;
    for (let i=3; i<n; i+=2)
        if (isPrime(i))
          sumOfPrimes += i;
    
    return sumOfPrimes;
}

//Method 2: Prime number sieve
function primeSummation2(n) {
    let isPrime = Array(n).fill(true); //initialize array of n elements and fill with true
    
    //0 and 1 are not prime 
    isPrime[0] = false;
    isPrime[1] = false; 
    
    //change multiples of each prime number to false since they are not false
    for (let i=2; i<=Math.sqrt(n); i++)
        if (isPrime[i])
            for (let j=i**2; j<n; j+=i)
                isPrime[j] = false; 

    let sum = 0;
    for (let i=0; i<n; i++)
        if (isPrime[i])
            sum += i;

    return sum;
    //return isPrime.reduce((sum, prime, index) => prime ? sum + index : sum, 0;
}

console.log(primeSummation(2001));
console.log(primeSummation2(2001));