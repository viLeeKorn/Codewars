/*
Linked Lists - Length & Count

Implement Length() to count the number of nodes in a linked list.

length(null) => 0
length(1 -> 2 -> 3 -> null) => 3
Implement Count() to count the occurrences of an integer in a linked list.

count(null, 1) => 0
count(1 -> 2 -> 3 -> null, 1) => 1
count(1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 3 -> 3 -> null, 2) => 4
I've decided to bundle these two functions within the same Kata since they are both very similar.

The push()/Push() and buildOneTwoThree()/BuildOneTwoThree() functions do not need to be redefined.
*/

class Node {
    var data: Int
    var next: Node?
    init(_ data: Int) {
        self.data = data
    }
}

func length(_ head: Node?) -> Int {
  guard let head = head else { return 0 }
  return 1 + length(head.next)
}

func count(_ head: Node?, _ data: Int) -> Int {
  guard let head = head else { return 0 }
  return (head.data == data ? 1 : 0) + count(head.next, data)
}