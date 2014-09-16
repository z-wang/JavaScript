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

this.gaps = [5,3,1];

function setGaps(arr) { 
         this.gaps = arr;
}

//Computing a dynamic gap sequence
var N = this.dataStore.length; varh=1;
while (h < N/3) {
h=3*h+1; }

h = (h-1)/3;

-------------------------
The MergeSort Algorithm
-------------------------
It is customary, though not necessary, to implement Mergesort as a recursive algo‐ rithm. However, it is not possible to do so in JavaScript, as the recursion goes too deep for the language to handle. Instead, we will implement the algorithm in a nonrecursive way, using a strategy called bottom-up Mergesort.

function mergeSort(arr) { if (arr.length < 2) {
return; }
var step = 1;
var left, right;
while (step < arr.length) {
left = 0;
right = step;
while (right + step <= arr.length) {
         mergeArrays(arr, left, left+step, right, right+step);
         left = right + step;
         right = left + step;
}
if (right < arr.length) {
         mergeArrays(arr, left, left+step, right, arr.length);
      }
step *= 2; }
}

function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) { var rightArr = new Array(stopRight - startRight + 1);
var leftArr = new Array(stopLeft - startLeft + 1);
k = startRight;
for (var i = 0; i < (rightArr.length-1); ++i) { rightArr[i] = arr[k];
++k;
}
k = startLeft;
for (var i = 0; i < (leftArr.length-1); ++i) {
      leftArr[i] = arr[k];
++k; }
rightArr[rightArr.length-1] = Infinity; // a sentinel value leftArr[leftArr.length-1] = Infinity; // a sentinel value varm=0;
varn=0;
for (var k = startLeft; k < stopRight; ++k) { if (leftArr[m] <= rightArr[n]) {
         arr[k] = leftArr[m];
m++; }
else {
arr[k] = rightArr[n]; n++;
} }
   print("left array - ", leftArr);
   print("right array - ", rightArr);
}

-------------------------
The QuickSort Algorithm
-------------------------
The algorithm for Quicksort is:
1. Pick a pivot element that divides the list into two sublists.
2. Reorder the list so that all elements less than the pivot element are placed before the pivot and all elements greater than the pivot are placed after it.
3. Repeat steps 1 and 2 on both the list with smaller elements and the list of larger elements.

function qSort(list) {
if (list.length == 0) {
return []; }
var lesser = []; var greater = []; var pivot = list[0];
for (var i = 1; i < list.length; i++) { if (list[i] < pivot) {
lesser.push(list[i]); }else{
               greater.push(list[i]);
            }
}
return qSort(lesser).concat(pivot, qSort(greater)); }

//test
function qSort(arr) {
if (arr.length == 0) { return [];
}
var left = [];
var right = [];
var pivot = arr[0];
for (var i = 1; i < arr.length; i++) {
if (arr[i] < pivot) { left.push(arr[i]);
}else{ right.push(arr[i]);
} }
return qSort(left).concat(pivot, qSort(right)); }
vara=[]; for(vari=0;i<10;++i){
   a[i] = Math.floor((Math.random()*100)+1);
}
print(a);
print();
print(qSort(a));
//The Quicksort algorithm is best to use on large data sets; its performance degrades for smaller data sets.







