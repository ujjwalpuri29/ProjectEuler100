// Problem 14: Longest Collatz sequence

function longestCollatzSequence(limit) {
    //The number with the largest chain
    let longest = 1;
    
    //The length of the largest chain
    let maxLength = 1;
    
    for (let i = Math.floor(limit / 2); i < limit; i++) {
        //length of chain
        let len = colLen(i);

        //if chain is longest, store number details and length
        if (len > maxLength)
        {
            longest = i;
            maxLength = len;
        }
    }
    return longest;
}

//Object storing length of collatz sequence of each number
const knownSequence = {'1': 1};

function colLen(n) {
    //return the length of chain if stored
    if (knownSequence[n])
        return knownSequence[n];
    
    else
    {
        //If number is even, add 1 to the chain recursively
        //if number is odd, add 2 recursively because after odd, you'll get an even number so adding for that too
        const len = (n % 2 == 0) ? colLen(n / 2) + 1 : colLen((3 * n + 1) / 2) + 2;
        //Store the length of sequence at that number
        knownSequence[n] = len;
        return len;
    }
}

console.log(longestCollatzSequence(14))