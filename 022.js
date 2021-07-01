// Problem 22: Names scores

function namesScores(arr) {
    //Sorting the names to get position of name in dictionary
    const sortedArr = arr.sort();

    //Array having score of each letter as index
    const alphabets = ['','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    
    //Initialising sum of score
    let scoreSum = 0;

    //Going through each word in the array, calculating the sum of it's digits score and multiplying it with the 
    //dictionary's position and adding it to the sum of scores
    for (let i = 0; i < arr.length; i++)
    {
        //Sum of letters
        let sum = 0;
        for (let j = 0; j < arr[i].length; j++)
            sum += alphabets.indexOf(arr[i][j]);
        
        //Position in dictionary
        //Adding 1 as index 0 will be position 1 and so on
        let rankDictionary = sortedArr.indexOf(arr[i]) + 1;
        
        //Summing up the scores of all words
        scoreSum += (sum * rankDictionary)
    }
    return scoreSum
}
  
const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST'];
const test2 = ['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST'];
  
console.log(namesScores(test1));