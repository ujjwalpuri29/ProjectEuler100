// Problem 19: Counting Sundays

//Storing days of the month in an array, except Feb
const daysInMonth = [0,31,0,31,30,31,30,31,31,30,31,30,31];

//Function for days in Feb due to leap years
function daysInFeb(year) {
    if (year % 4 != 0) 
        return 28;
    if (year % 100 == 0 && year % 400 != 0)
        return 28;
    return 29;
}

function countingSundays(firstYear, lastYear) {
    //Counting the number of days from Dec 31 1899 (Sunday)
    //A Sunday is every 7 days, so checking if number of days is perfectly divisible by 7
    
    //Since Jan 1, 1900 is a Monday, 1 day back to make it a sunday
    var days = 1;
    
    //Total number of Sundays
    var total = 0;
    
    //The current year
    var year = 1900;

    //Number of days from 1900 to Jan 1st of the first year to be considered
    while (year != firstYear)
    {
        for (var month = 1; month < 13; month++)
        {
            days += daysInMonth[month];
            if (month == 2)
                days += daysInFeb(year);
        }
        year++;
    }

    //Calculating number of days and dividing after each month by 7
    while (year != lastYear + 1)
    {
        for (month = 1; month < 13; month++)
        {
            if (days % 7 == 0) //Sunday
                total++;
            days += daysInMonth[month];
            if (month == 2)
                days += daysInFeb(year);
        }
        year++;
    }
    return total;
}

console.log(countingSundays(1943, 1946));