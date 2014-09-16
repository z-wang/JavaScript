dynamic programming
===================
Dynamic programming is a technique that is sometimes considered the opposite of recursion. Where a recursive solution starts at the top and breaks the prob‐ lem down, solving all small problems until the complete problem is solved, a dynamic programming solution starts at the bottom, solving small problems and combining them to form an overall solution to the big problem.

An example of DP: Computing Fibonacci Numbers

function dynFib(n) {
var val = []; for(vari=0;i<=n;++i){
val[i] = 0; }
if(n==1||n==2){ return 1;
} else {
val[1] = 1;
val[2] = 2; for(vari=3;i<=n;++i){
             val[i] = val[i-1] + val[i-2];
          }
return val[n-1]; }
}

Example 2:
//Finding the Longest Common Substring

function lcs(word1, word2) { varmax=0;
var index = 0;
var lcsarr = new Array(word1.length+1); for (var i = 0; i <= word1.length+1; ++i) {
lcsarr[i] = new Array(word2.length+1);
for (var j = 0; j <= word2.length+1; ++j) {
         lcsarr[i][j] = 0;
      }
}
for (var i = 0; i <= word1.length; ++i) {
for (var j = 0; j <= word2.length; ++j) { if(i==0||j==0){
            lcsarr[i][j] = 0;
         }
else {
if (word1[i-1] == word2[j-1]) {
               lcsarr[i][j] = lcsarr[i-1][j-1] + 1;
            }
else {
lcsarr[i][j] = 0;
} }
if (max < lcsarr[i][j]) { max = lcsarr[i][j]; index = i;
} }
}
var str = ""; if(max==0){
return ""; }
else {
for (var i = index-max; i <= max; ++i) {
         str += word2[i];
      }
return str;
} }

//The Knapsack Problem: A Recursive Solution
A classic problem in the study of algorithms is the knapsack problem. Imagine you are a safecracker and you break open a safe filled with all sorts of treasure, but all you have to carry the loot is a small backpack. The items in the safe differ in both size and value. You want to maximize your take by filling the backpack with those items that are worth the most.

//The Knapsack Problem: A Dynamic Programming Solution
Whenever we find a recursive solution to a problem, we can usually rewrite the solution using a dynamic programming technique and end up with a more efficient program. The knapsack problem can definitely be rewritten in a dynamic programming manner. All we have to do is use an array to store temporary solutions until we get to the final solution.

function max(a, b) { return(a>b)?a:b;
}
function dKnapsack(capacity, size, value, n) { varK=[];
for (var i = 0; i <= capacity+1; i++) { K[i] = [];
} for(vari=0;i<=n;i++){
for (var w = 0; w <= capacity; w++) { if(i==0||w==0){
K[i][w] = 0; }
else if (size[i-1] <= w) {
K[i][w] = max(value[i-1] + K[i-1][w-size[i-1]],
              K[i-1][w]);
K[i][w] = K[i-1][w];
} else {
}
         putstr(K[i][w] + " ");
      }
print(); }
return K[n][capacity]; }

