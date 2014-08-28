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
Handling Collisions (separate chaining & linear probing)

separate chaining:

function buildChains() {
for (var i = 0; i < this.table.length; ++i) {
this.table[i] = new Array(); }
}

function showDistro() { varn=0;
for (var i = 0; i < this.table.length; ++i) { if (this.table[i][0] != undefined) {
print(i + ": " + this.table[i]); }
} 
}

function put(key, data) {
  var pos = this.betterHash(key);
  var index = 0;
  if (this.table[pos][index] == undefined) {
    this.table[pos][index+1] = data; }
    ++index; else {
    while (this.table[pos][index] != undefined) { ++index;
  }
  this.table[pos][index] = data; }
}

function get(key) {
  var index = 0;
  var hash = this.betterHash(key); if (this.table[pos][index] = key) {
  return this.table[pos][index+1]; }
  index += 2; else {
  while (this.table[pos][index] != key) { index += 2;
  }
  return this.table[pos][index+1]; }
  return undefined; 
}

//A second technique for handling collisions is called linear probing. Linear probing is an example of a more general //hashing technique called open-addressing hashing.

//With linear probing, when there is a collision, the program simply looks to see if the next element of the hash table //is empty. If so, the key is placed in that element.

//Linear probing should be chosen over separate chaining when your array for storing data can be fairly large. Here’s a //formula commonly used to determine which collision method to use: if the size of the array can be up to half the //number of elements to be stored, you should use separate chaining; but if the size of the array can be twice the size //of the number of elements to be stored, you should use linear probing.

--------------------
An example of HashTable Linear Probing Method

add value array to HashTable:
this. values = []

function put(key, data) {
  var pos = this.betterHash(key);
  if (this.table[pos] == undefined) {
    this.table[pos] = key;
    this.values[pos] = data; }
  else {
    while (this.table[pos] != undefined) {
    pos++; 
  }
  this.table[pos] = key;
  this.values[pos] = data; }
}

function get(key) {
  var hash = -1;
  hash = this.betterHash(key); if(hash>-1){
  for (var i = hash; this.table[hash] != undefined; i++) { 
    if (this.table[hash] == key) {
      return this.values[hash]; }
    } 
  }
  return undefined; 
}
