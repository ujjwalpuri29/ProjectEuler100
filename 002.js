// Problem 2: Even Fibonacci Numbers

function fiboEvenSum(n) {
    var curr = 2, prev = 1, sum = 0, temp;
    while (curr <= n)
    {
        if (curr%2==0)
            sum += curr;
        temp = curr;
        curr += prev;
        prev = temp;
    }
    return sum;
}
  
console.log(fiboEvenSum(34));