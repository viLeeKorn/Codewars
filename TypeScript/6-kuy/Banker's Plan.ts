/*
John has some amount of money of which he wants to deposit a part f0 to the bank at the beginning of year 1. He wants to withdraw each year for his living an amount c0.
Here is his banker plan:

deposit f0 at beginning of year 1
his bank account has an interest rate of p percent per year, constant over the years
John can withdraw each year c0, taking it whenever he wants in the year; he must take account of an inflation of i percent per year in order to keep his quality of living. i is supposed to stay constant over the years.
all amounts f0..fn-1, c0..cn-1 are truncated by the bank to their integral part
Given f0, p, c0, i the banker guarantees that John will be able to go on that way until the nth year.

Example:
f0 = 100000, p = 1 percent, c0 = 2000, n = 15, i = 1 percent
beginning of year 2 -> f1 = 100000 + 0.01*100000 - 2000 = 99000;  c1 = c0 + c0*0.01 = 2020 (with inflation of previous year)
beginning of year 3 -> f2 =  99000 + 0.01*99000 - 2020  = 97970;  c2 = c1 + c1*0.01 = 2040.20 
(with inflation of previous year, truncated to 2040)
beginning of year 4 -> f3 =  97970 + 0.01*97970 - 2040  = 96909.7 (truncated to 96909); 
c3 = c2 + c2*0.01 = 2060.4 (with inflation of previous year, truncated to 2060)
*/
export function fortune(f0: number, p: number, c0: number, n: number, i: number): boolean {
    for (let j = n; j >= 1; j--) {
      if (f0 < 0) return false; 
      f0 = Math.trunc(f0 + p / 100 * f0 - c0);
      c0 = Math.trunc(c0 + c0 * i / 100);
    }
    return true;
  }