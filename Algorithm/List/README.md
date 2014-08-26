List ADT
-----------
listSize (property) 

pos (property)

length (property) 

clear (function) 

toString (function) 

getElement(function) 

insert (function) 

append (function) 

remove (function) 

front (function)

end (function) 

prev (function) 

next (function) 

currPos (function) 

moveTo (function)

-------------
An implementation of List:

function List() {
this.listSize = 0;
this.pos = 0;
this.dataStore = []; // initializes an empty array to store list elements this.clear = clear;
this.find = find;
this.toString = toString; this.insert = insert; this.append = append; this.remove = remove; this.front = front;
this.end = end;
this.prev = prev;
this.next = next; 
this.length = length; 
this.currPos = currPos; 
this.moveTo = moveTo; 
this.getElement = getElement; 
this.length = length; 
this.contains = contains;
}
