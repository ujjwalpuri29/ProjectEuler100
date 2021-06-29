// Problem 20: Factorial digit sum

//Method 1: Brute force approach
//Not very efficient method

//Recursive function to calculate factorial
const factorial = n => {
    if (n == 1) 
        return 1;
    return n * factorial(n-1);
};
 
const sumFactorialDigits1 = num => {
    //Getting the factorial
    const fact = factorial(num);
    
    //Converting number to digit array
    const digits = fact.toString().split('');

    //Sum of digits in array
    const sumOfDigits = digits.reduce((sum, num) => sum + Number(num), 0); 
    return sumOfDigits
};

console.log(sumFactorialDigits1(20));