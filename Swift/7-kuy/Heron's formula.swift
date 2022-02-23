/*
Write function heron which calculates the area of a triangle with sides a, b, and c (x, y, z in COBOL).
Heron's formula:
s∗(s−a)∗(s−b)∗(s−c)\sqrt{s * (s - a) * (s - b) * (s - c)} 
s∗(s−a)∗(s−b)∗(s−c) 
where
s=a+b+c2s = \frac{a + b + c} 2s= 
2
a+b+c
Output should have 2 digits precision.
*/
func heron(_ a: Double, _ b: Double, _ c: Double) -> Double {
  let s = ( a + b + c) / 3
  return (s * (s-a) * (s-b) * (s-c)).squareRoot()
}