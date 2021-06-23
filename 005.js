// Problem 5: Smallest multiple

function twoLCM(a, b) {
    return a*b/twoGCD(a,b);
}

// Using Euclidean formula, GCD of 2 numbers does not change if the larger number is replaced by its difference with the smaller number.
function twoGCD(a, b) {
    if (b==0)
        return a;
    return twoGCD(b, a % b);
}

//Finding LCM of every 2 numbers till n
function smallestMult(n) {
    let result = 1;
    for (let i=2; i<=n; i++)
      result = twoLCM(result, i);
    return result;
}

console.log(smallestMult(20));