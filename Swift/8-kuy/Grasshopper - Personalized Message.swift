/*
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
Use conditionals to return the proper message:
case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'
*/
func great(_ name: String, _ owner: String) -> String {
  return "Hello \(name == owner ? "boss" : "guest")"
}