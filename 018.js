//Problem 18: Maximum path sum I

//Moving from bottom to top and adding the max of the two adjacent elements to each element
//Returning the topmost element since it has the maximum sum of the elements underneath
function maximumPathSumI(triangle) {
    for (let i = triangle.length - 2; i >= 0; i--)
      for (let j = 0; j <= i; j++)
        triangle[i][j] += ((triangle[i+1][j] > triangle[i+1][j+1]) ? triangle[i+1][j] : triangle[i+1][j+1]);
    return triangle[0][0];
  }
  
  const testTriangle = [[3, 0, 0, 0],
                        [7, 4, 0, 0],
                        [2, 4, 6, 0],
                        [8, 5, 9, 3]];
  
  console.log(maximumPathSumI(testTriangle));