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

//-------------------------------------------------------------------------//

//Method 2: Faster approach
//Storing each digit in an array after every multiplication

function multiply(n, v) {
    let carry = 0;
    let size = v.length;

    /*
    Explanation:
          2 1
            7 4         4 * 3 = 12          => 1 carry and 2 is the digit 
            x 3         1 + (7 * 3) = 22    => 2 carry and 2 is the digit
        --------        then placing each digit of the carry in the next array index  => 2 is the next digit
          2 2 2 
    */

    for (let i = 0; i < size; i++)
    {
        let result = (v[i] * n) + carry;
        
        //Storing the ones digit in the array of that multiplication
        v[i] = result % 10;

        //Carrying over the rest of the number
        carry = Math.floor(result / 10);
    }
    
    //Placing each digit of the carry
    while (carry != 0)
    {
        v.push(carry % 10);
        carry = Math.floor(carry / 10);
    }
}

function sumFactorialDigits2(num) {
    //Initialising array
    const v = [1];

    //Factorial calculation
    for (let i = 1; i <= num; i++)
        multiply(i);
    
    //Sum of digits in the array
    const sumOfDigits = v.reduce((sum, digit) => sum + Number(digit), 0);
    return sumOfDigits;
}

console.log(sumFactorialDigits2(100));