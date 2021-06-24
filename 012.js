// Problem 12: Highly divisible triangular number

//Method 1: Brute-force solution
//Not hightly efficient. Does not work for large n
function isPrime(n) {
    for (let i=2; i<=Math.sqrt(n); i++)
        if (n%i==0)
            return false;
    return true;
}

function numOfFactors(n) {
    let size = n+1;
    let factor = Array(size).fill(0);
    let i = 2;
    while (n!=1)
    {
        if (n%i==0 && isPrime(i))
        {
            n /= i;
            factor[i]++;
        }
        else i++;
    }

    let result = 1;
    for (i=1; i<size; i++)
        if (factor[i])
            result *= (factor[i] + 1);
    //console.log(size-1, result);
    //console.log(factor);
    
    if (!result)
        return 1;
    return result;
}

function divisibleTriangleNumber(n) {
    let i = 1, a = 0;
    while (a < n)
    {
        var triangle = i*(i+1)/2;
        a = numOfFactors(triangle);
        i++;
    }
    return triangle;
}

console.log(divisibleTriangleNumber(23));

//-----------------------------------------------//

//Method 2: Sieve of Eratosthenes
//Faster method
const MAX = 100000;
const prime = new Array(MAX+1).fill(true);

function sieve() {
    prime[0] = false;
    prime[1] = false;

    var limit = Math.ceil(Math.sqrt(MAX));
    for (let i=2; i<=limit; i++)
        if (prime[i])
            for (let j=i*i; j<MAX; j+=i)
                prime[j] = false;
}

function divCount(n) {
    var divisors = 1;
    for (let i=2; i<=n; i++)
    {
        if (prime[i])
        {
            var exponent = 0;
            if (n%i==0)
            {
                while (n%i==0)
                {
                    n /= i;
                    exponent++;
                }
                divisors *= (exponent+1);
            }
        }
    }
    return divisors;
}

function divisibleTriangleNumberSieve(n) {
  let i = 1, a = 0;
  while (a < n)
  {
      var triangle = i*(i+1)/2;
      a = divCount(triangle);
      i++;
  }
  return triangle;
}

//First initialize the sieve array then call for divisors
sieve();
console.log(divisibleTriangleNumberSieve(500));