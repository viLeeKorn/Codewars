/*
Write a function that when given a number >= 0, returns an Array of ascending length subarrays.
pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
Note: the subarrays should be filled with 1s
*/
export function pyramid(n: number) {
    const result: Array<Array<1>> = [];
    
    while(n > 0) {
      result.unshift(new Array(n).fill(1));
      n--;
    }
    return result;
  }