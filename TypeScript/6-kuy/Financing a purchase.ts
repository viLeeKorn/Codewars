/*
The description is rather long but it tries to explain what a financing plan is.
The fixed monthly payment for a fixed rate mortgage is the amount paid by the borrower every month that ensures that the loan is paid off in full with interest at the end of its term.
The monthly payment formula is based on the annuity formula. The monthly payment c depends upon:
rate - the monthly interest rate is expressed as a decimal, not a percentage. The monthly rate is simply the given yearly percentage rate divided by 100 and then by 12.
term - the number of monthly payments, called the loan's term.
principal - the amount borrowed, known as the loan's principal (or balance).
First we have to determine c.

We have: c = n /d with n = r * balance and d = 1 - (1 + r)**(-term) where ** is the power function (you can look at the reference below).
The payment c is composed of two parts. The first part pays the interest (let us call it int) due for the balance of the given month, the second part repays the balance (let us call this part princ) hence for the following month we get a new balance = old balance - princ with c = int + princ.
Loans are structured so that the amount of principal returned to the borrower starts out small and increases with each mortgage payment. While the mortgage payments in the first years consist primarily of interest payments, the payments in the final years consist primarily of principal repayment.
A mortgage's amortization schedule provides a detailed look at precisely what portion of each mortgage payment is dedicated to each component.
In an example of a $100,000, 30-year mortgage with a rate of 6 percents the amortization schedule consists of 360 monthly payments. The partial amortization schedule below shows with 2 decimal floats the balance between principal and interest payments.
*/
export function amort(rate: number, balance: number, term: number, paymentNo: number): string {
    let resultBalance: number = balance;
    let currentRate: number = rate / 1200;
    let n:number = currentRate * balance;
    let d: number = 1-(1+currentRate)**(-term);
    let c: number = n / d;                 
    for(let i=1; i<paymentNo; i++) {
      resultBalance-=(c-currentRate*resultBalance)
    };                
    let princ: number = c - currentRate*resultBalance;                 
    let int: number = resultBalance*currentRate;
    resultBalance=resultBalance-(c - currentRate*resultBalance);
    return `num_payment ${paymentNo} c ${c.toFixed(0)} princ ${princ.toFixed(0)} int ${int.toFixed(0)} balance ${resultBalance.toFixed(0)}`;
  }