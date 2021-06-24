// Problem 12: Highly divisible triangular number

//Brute-force solution
//Not hightly efficient. Does not work for n more than 48
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

//Parameter max-limit is 48
console.log(divisibleTriangleNumber(23));