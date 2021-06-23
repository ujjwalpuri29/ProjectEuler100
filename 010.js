// Problem 10: Summation of primes

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

console.log(primeSummation(2001));