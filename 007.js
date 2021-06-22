// Problem 7: 10001st prime

function nthPrime(n) {
    function isPrime(num) {
        for (let i=2; i<=Math.ceil(Math.sqrt(num)); i++)
            if (num%i==0)
                return false
        return true
    }

    const primes = [2];
    var index = 0;
    for (let i=3;;i+=2)
    {
        if (isPrime(i))
        {
            primes.push(i);
            index++;
            if (index == n-1)
                break;
        }
    }
    return primes[index];
}

console.log(nthPrime(10001));