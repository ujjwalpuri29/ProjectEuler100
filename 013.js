// Problem 13: Large sum

function largeSum(arr) {
    //Taking sum of numbers in the array
    const sumOfNumbers = arr.reduce((sum, num) => sum + Number(num), 0); //8.348422521139211e+49
    
    //Converting digits to string array by splitting scientific notation at 'e'
    const digits = sumOfNumbers.toString().split('e')[0]; //'8.348422521139211'
  
    //Multiplying by 100000000 and converting to integer
    //const tenDigits = Math.floor(1000000000 * digits)
    const tenDigits = 1e9 * digits.slice(0,11);
    
    return tenDigits;
}
  
const testNums = [
    '37107287533902102798797998220837590246510135740250',
    '46376937677490009712648124896970078050417018260538'
];
  
console.log(largeSum(testNums));