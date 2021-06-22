// Problem 6: Sum square difference

function sumSquareDifference(n) {
    //Using series formulae
    var sumOfSquares = n*(n+1)*(2*n+1)/6;
    var squareOfSum = Math.pow(n*(n+1)/2, 2);
    return squareOfSum - sumOfSquares;
}

sumSquareDifference(100);