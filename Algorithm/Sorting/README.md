Sorting Algorithm
====================
//Two of the most common operations performed on data stored in a computer are sorting and searching. This has been true since the beginning of the computer industry, so this means that sorting and searching are two of the most studied operations in computer science. Many of the data structures discussed in this book are designed primarily to make sorting and/or searching the data stored in the data structure easier and more efficient.

//Use an array test bed
function CArray(numElements) { this.dataStore = [];
this.pos = 0;
this.numElements = numElements; this.insert = insert; this.toString = toString; this.clear = clear; this.setData = setData; this.swap = swap;
for (var i = 0; i < numElements; ++i) { this.dataStore[i] = i;
} }
function setData() {
for (var i = 0; i < this.numElements; ++i) {
this.dataStore[i] = Math.floor(Math.random() * (this.numElements+1));
} }
function clear() {
for (var i = 0; i < this.dataStore.length; ++i) {
this.dataStore[i] = 0; }
}
function insert(element) { this.dataStore[this.pos++] = element;
}
function toString() {
var retstr = "";
for (var i = 0; i < this.dataStore.length; ++i) {
retstr += this.dataStore[i] + " "; if(i>0&&i%10==0){
         retstr += "\n";
      }
}
return retstr; }
function swap(arr, index1, index2) { var temp = arr[index1]; arr[index1] = arr[index2]; arr[index2] = temp;
}

--------------------
bubbleSort()
--------------------
function bubbleSort() {
var numElements = this.dataStore.length;
var temp;
for (var outer = numElements; outer >= 2; --outer) {
for (var inner = 0; inner <= outer-1; ++inner) {
if (this.dataStore[inner] > this.dataStore[inner+1]) {
swap(this.dataStore, inner, inner+1); }
} }
}

--------------------
selection sort
--------------------
function selectionSort() {
var min, temp;
for (var outer = 0; outer <= this.dataStore.length-2; ++outer) {
min = outer;
for (var inner = outer + 1;
inner <= this.dataStore.length-1; ++inner) {
if (this.dataStore[inner] < this.dataStore[min]) {
min = inner; }
}
swap(this.dataStore, outer, min); }
}


----------------------
Insertion Sort
----------------------
function insertionSort() {
var temp, inner;
for (var outer = 1; outer <= this.dataStore.length-1; ++outer) {
temp = this.dataStore[outer];
inner = outer;
while (inner > 0 && (this.dataStore[inner-1] >= temp)) {
this.dataStore[inner] = this.dataStore[inner-1];
--inner; }
this.dataStore[inner] = temp; }
}

------------------------
Selection sort and insertion sort are faster than the bubble sort, and the insertion sort is the fastest of the three sorting algorithms. 
-------------------------
The Shellsort Algorithm
-------------------------
function shellsort() {
for (var g = 0; g < this.gaps.length; ++g) {
for (var i = this.gaps[g]; i < this.dataStore.length; ++i) { var temp = this.dataStore[i];
for (var j = i; j >= this.gaps[g] &&
this.dataStore[j-this.gaps[g]] > temp; j -= this.gaps[g]) {
this.dataStore[j] = this.dataStore[j - this.gaps[g]]; }
this.dataStore[j] = temp; }
} }



