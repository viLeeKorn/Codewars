/*
dataand data1 are two strings with rainfall records of a few cities for months from January to December. The records of towns are separated by \n. The name of each town is followed by :.

data and towns can be seen in "Your Test Cases:".

Task:
function: mean(town, strng) should return the average of rainfall for the city town and the strng data or data1 (In R and Julia this function is called avg).
function: variance(town, strng) should return the variance of rainfall for the city town and the strng data or data1.
Examples:
mean("London", data), 51.19(9999999999996) 
variance("London", data), 57.42(833333333374)
*/
func temperatures(fromData d: String, forCity town: String) -> [Double] {
  guard let record = d.components(separatedBy: "\n").first(where: { $0.hasPrefix("\(town):") }) else {
    return [Double]()
  }
  
  return record.components(separatedBy: ",").map { Double($0.components(separatedBy: " ")[1])! }
}

func mean(_ d : String, _ town: String) -> Double {
  let temps = temperatures(fromData: d, forCity: town)
  return temps.isEmpty ? -1 : temps.reduce(0, +) / Double(temps.count)
}

func variance(_ d : String, _ town: String) -> Double {
  let meanVal = mean(d, town)
  let temps = temperatures(fromData: d, forCity: town)
  
  return temps.isEmpty ? -1 : temps.map { pow($0 - meanVal, 2) }.reduce(0, +) / Double(temps.count)
}