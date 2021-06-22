function largestPrimeFactor(number) {
    function isPrime(n) {
        for (let i=2; i<Math.ceil(Math.sqrt(n)); i++)
            if (n%i==0)
                return false
        return true;
    }

    // Making a prime factor tree by initialising factor to 2 and
    // dividing number by its prime factor till we get one 
    var max = 0, factor = 2;
    while (number != 1)
    {
        if (number%factor==0 && isPrime(factor))
        {
            number /= factor;
            if (factor > max)
                max = factor;
        }
        else i++;
    }
    return max;
}

console.log(largestPrimeFactor(13195));