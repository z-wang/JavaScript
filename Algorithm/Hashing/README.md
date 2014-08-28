Hashing
=========
Although hash tables provide fast insertion, deletion, and retrieval, they perform poorly for operations that involve searching, such as finding the minimum and maximum values in a data set. For these operations, 
other data structures such as the binary search tree are more appropriate.

---------
Hash Table

function HashTable() { 
  this.table = new Array(137);
  this.simpleHash = simpleHash; 
  this.showDistro = showDistro; 
  this.put = put;
//this.get = get;
}

-----------
The choice of a hash function depends on the data type of the key.
If your key is an integer, then the simplest hash function is to return the key modulo the size of the array.

The choice of a hash function depends on the data type of the key. If your key is an integer, then the simplest hash function is to return the key modulo the size of the array.

Also, if the keys are random integers, then the hash function should more evenly distribute the keys. This type of hashing is known as modular hashing.

In many applications, the keys are strings. Choosing a hash function to work with string keys proves to be more difficult and should be chosen carefully.
A simple hash function that at first glance seems to work well is to sum the ASCII value of the letters in the key. The hash value is then that sum modulo the array size.
-----------

function simpleHash(data) {
  var total = 0;
  for (var i = 0; i < data.length; ++i) {
    total += data.charCodeAt(i);
  }
return total % this.table.length; 
}

//data.charCodeAt(i)

function put(data) {
  var pos = this.simpleHash(data); 
  this.table[pos] = data;
}

function showDistro() { 
  var n=0;
  for (var i = 0; i < this.table.length; ++i) { 
  if (this.table[i] != undefined) {
    print(i + ": " + this.table[i]); }
  } 
}

---------
To avoid collisions, a better hash function is needed.

Horner's method, most algorithm book suggest a small prime number, such as 31, but for our set of names, use 37 is better.

function betterHash(string, arr) {
const H = 37;
var total = 0;
for (var i = 0; i < string.length; ++i) {
          total += H * total + string.charCodeAt(i);
       }
       total = total % arr.length;
return parseInt(total); }

----------
Handling Collisions

