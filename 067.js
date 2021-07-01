// Problem 67: Maximum path sum II

//This is similar to Problem 18, but one test case having a 2D array defined in the background containing a triangle with one-hundred rows.

function maximumPathSumII(triangle) {
    for (let i = triangle.length - 2; i >= 0; i--)
        for (let j = 0; j <= i; j++)
            triangle[i][j] += ((triangle[i+1][j] > triangle[i+1][j+1]) ? triangle[i+1][j] : triangle[i+1][j+1]);
        return triangle[0][0];
}
    
const testTriangle = [[3, 0, 0, 0],
                      [7, 4, 0, 0],
                      [2, 4, 6, 0],
                      [8, 5, 9, 3]];
    
maximumPathSumII(testTriangle);