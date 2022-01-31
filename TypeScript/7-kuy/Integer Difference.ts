/*
Write a function that accepts two arguments: an array/list of integers and another integer (n).
Determine the number of times where two integers in the array have a difference of n.

For example:
[1, 1, 5, 6, 9, 16, 27], n=4  -->  3  # (1,5), (1,5), (5,9)
[1, 1, 3, 3], n=2             -->  4  # (1,3), (1,3), (1,3), (1,3)
*/
export const intDiff = (arr: number[], n: number): number => {
    let count: number = 0;
    for (let i: number = 0; i < arr.length; i++) {
        for (let j: number = i + 1; j < arr.length; j++) {
            if (Math.abs(arr[i] - arr[j]) === n)
                count++
        }
    }
    return count
}