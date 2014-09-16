Searching Algorithm
======================
//This chapter looks at just one aspect of the search problem—searching for a specified value in a list.
There are two ways to search for data in a list: sequential search and binary search. A sequential search is used when the items in a list are in random order; a binary search is used when the items in a list are in sorted order. Binary search is the more efficient algorithm, but you also have to take into account the extra time it takes to sort the data set before being able to search it for a value.

---------
Sequential Search
---------
brute-force:

function seqSearch(arr, data) {
for (var i = 0; i < arr.length; ++i) {
if (arr[i] == data) { return true;
}}
return false; }

//Searching for Minimum and Maximum Values

function findMin(arr) {
var min = arr[0];
for (var i = 1; i < arr.length; ++i) {
if (arr[i] < min) { min = arr[i];
} }
return min; }

function findMax(arr) {
var max = arr[0];
for (var i = 1; i < arr.length; ++i) {
if (arr[i] > max) { max = arr[i];
} }
return max; }

//Using Self-Organizing Data
It makes sense to allow your data to self-organize since the data being searched most likely follow the “80-20 rule,” meaning that 80% of the searches made on a data set are searching for just 20% of the data in the set. Self-organization will eventually put that 20% at the beginning of the data set, where a simple sequential search will find them quickly.
Probability distributions such as the 80-20 rule are called Pareto distributions, named for Vilfredo Pareto, who discovered these distributions studying the spread of income and wealth in the late 19th century. 

-------------
Binary Search
-------------
function binSearch(arr, data) {
var upperBound = arr.length-1; var lowerBound = 0;
while (lowerBound <= upperBound) {
var mid = Math.floor((upperBound + lowerBound) / 2); if (arr[mid] < data) {
         lowerBound = mid + 1;
      }
else if (arr[mid] > data) { upperBound = mid - 1;
} else {
return mid; }
}
return -1; }
var nums = []; for(vari=0;i<100;++i){
   nums[i] = Math.floor(Math.random() * 101);
}
insertionsort(nums);
dispArr(nums);
print();
putstr("Enter a value to search for: "); var val = parseInt(readline());
var retVal = binSearch(nums, val); if (retVal >= 0) {
   print("Found " + val + " at position " + retVal);
}
else {
print(val + " is not in array.");
}

---------------
Searching Textual Data
---------------

