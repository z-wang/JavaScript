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

