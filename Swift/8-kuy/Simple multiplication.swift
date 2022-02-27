/*
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
*/
func simpleMultiplication(_ num: Int) -> Int {
  return num * (num % 2 == 0 ? 8 : 9)
}