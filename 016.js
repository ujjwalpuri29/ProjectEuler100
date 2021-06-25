// Problem 16: Power digit sum

function powerDigitSum(exponent) {
    //You can't just do 2^1000 because a normal computer can't do that ( 64 bit can only do 2^64 )
    const num = BigInt(2**exponent);
  
    //converting number to string of digits
    const digits = num.toString().split('');
    
    //Taking sum of digits
    const sumOfDigits = digits.reduce((sum, digit) => sum + Number(digit), 0)
    return sumOfDigits;
}
  
console.log(powerDigitSum(1000));