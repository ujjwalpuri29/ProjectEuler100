// Problem 17: Number letter counts

//Array storing the number of letters in numbers from 1-19 at their index
const upto20Count = [0,3,3,5,4,4,3,5,5,4,3,6,6,8,8,7,7,9,8,8];

//Array storing the number of letters in multiples of 10 from 2-9 at their index
//10 is excluded because it is in the first array
const tensCount = [0,0,6,6,5,5,5,7,6,6];

//number of letters in words 
const hundred = 7;
const and = 3;
const thousand = 8;

function units_tens(num) {
    let sum = 0;
    if (num < 20)
        sum += upto20Count[num];
    else 
    {   
        sum += upto20Count[num % 10];
        let tensDigit = Math.floor(num / 10);
        sum += tensCount[tensDigit];
    }
    return sum;
}

function numberLetterCounts(limit) {
    var count = 0;
    for (let i=1; i<=limit; i++)
    {
        //Units and tens digit
        var temp = i % 100;
        count += units_tens(temp);

        //Hundredth digit
        if (i > 99)
        {
          let hundredsDigit = (Math.floor(i / 100)) % 10;
          count += upto20Count[hundredsDigit];
        
          if (hundredsDigit != 0)
            count += hundred;
          if (i % 100 != 0)
            count += and;
        }

        //Thousands and ten-thousands digit
        if (i > 999)
        {
          let temp2 = i % 100000;
          temp2 = Math.floor(temp2 / 1000); 
          count += thousand + units_tens(temp2);
        }
    }
    return count
}

//Works upto 99999
console.log(numberLetterCounts(99999));