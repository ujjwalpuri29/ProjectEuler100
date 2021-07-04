// Problem 30: Digit n powers

function digitnPowers(n) {
    //Initializing sum
    var total = 0;

    //Checking the condition for every number
    for (let i = 2; i <= Math.pow(9, n) * n; i++)
    {   
        //Storing digits in array 
        let digits = i.toString().split('');
        
        //Raising each digit to the power n
        for (let j = 0; j < digits.length; j++)
            digits[j] = digits[j] ** n;

        //Taking sum of digit
        let powerSum = digits.reduce((sum, digit) => sum + Number(digit), 0);
        
        //Adding it to the sum
        if (powerSum == i)
            total += i;
    }
    return total;
}

console.log(digitnPowers(3));