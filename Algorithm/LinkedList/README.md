LinkedList
============
array in javascript is actually implemented as object, so that make it not efficient as array in c++ or java. linkedlist in javascript 
may be a good alternative data structure

The linked list can be used in almost every situation where a one-dimensional array is used, except when you need random access 
to the elements of a list. When random access is required, an array is the better data structure to use.

------------
function Node(element) { 
  this.element = element; 
  this.next = null;
}

function LList() {
  this.head = new Node("head"); 
  this.find = find; 
  this.insert = insert; 
  this.remove = remove; 
  this.display = display;
}

function find(item) {
  var currNode = this.head;
  while (currNode.element != item) {
    currNode = currNode.next;
  }
  return currNode; 
}

function insert(newElement, item) { 
  var newNode = new Node(newElement); 
  var current = this.find(item); 
  newNode.next = current.next; 
  current.next = newNode;
}

function display() {
  var currNode = this.head;
  while (!(currNode.next == null)) {
    print(currNode.next.element);
    currNode = currNode.next;
  }
}


function findPrevious(item) {
  var currNode = this.head;
  while (!(currNode.next == null) &&
    (currNode.next.element != item)) {
    currNode = currNode.next;
}
  return currNode; 
}

function remove(item) {
  var prevNode = this.findPrevious(item); 
  if (!(prevNode.next == null)) {
    prevNode.next = prevNode.next.next;
  }
}

