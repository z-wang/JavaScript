greedy algorithms
==================
A greedy algorithm is an algorithm that looks for “good solutions” as it works toward the complete solution. These good solutions, called local optima, will hopefully lead to the correct final solution, called the global optimum. The term “greedy” comes from the fact that these algorithms take whatever solution looks best at the time. Often, greedy algorithms are used when it is almost impossible to find a complete solution, owing to time and/or space considerations, and yet a suboptimal solution is acceptable.

One example of a simpler algorithm is the greedy algorithm. A greedy algorithm is one that always chooses the best solution at the time, with no regard to how that choice will affect future choices. Using a greedy algorithm generally indicates that the implementer hopes that the series of “best” local choices made will lead to a final “best” choice. If so, then the algorithm has produced an optimal solution; if not, a suboptimal solution has been found. However, for many problems, it is just not worth the trouble to find an optimal solution, so using a greedy algorithm works just fine.

//The Coin-Changing Problem
A classic example of following a greedy algorithm is making change. Let’s say you buy some items at the store and the change from your purchase is 63 cents. How does the clerk determine the change to give you? If the clerk follows a greedy algorithm, he or she gives you two quarters, a dime, and three pennies. That is the smallest number of coins that will equal 63 cents without using half-dollars.

function makeChange(origAmt, coins) { var remainAmt = 0;
if (origAmt % .25 < origAmt) {
      coins[3] = parseInt(origAmt / .25);
      remainAmt = origAmt % .25;
      origAmt = remainAmt;
}
if (origAmt % .1 < origAmt) {
      coins[2] = parseInt(origAmt / .1);
      remainAmt = origAmt % .1;
      origAmt = remainAmt;
}
if (origAmt % .05 < origAmt) {
      coins[1] = parseInt(origAmt / .05);
      remainAmt = origAmt % .05;
      origAmt = remainAmt;
}
coins[0] = parseInt(origAmt / .01);
}
function showChange(coins) { if (coins[3] > 0) {
      print("Number of quarters - " + coins[3] + " - " + coins[3] * .25);
   }
if (coins[2] > 0) {
print("Number of dimes - " + coins[2] + " - " + coins[2] * .10);
}
if (coins[1] > 0) {
      print("Number of nickels - " + coins[1] + " - " + coins[1] * .05);
   }
if (coins[0] > 0) {
print("Number of pennies - " + coins[0] + " - " + coins[0] * .01);
} }

//A Greedy Algorithm Solution to the Knapsack Problem
function ksack(values, weights, capacity) { var load = 0;
vari=0;
varw=0;
while (load < capacity && i < 4) {
if (weights[i] <= (capacity-load)) {
             w += values[i];
             load += weights[i];
          }
else {
var r = (capacity-load)/weights[i]; w += r * values[i];
load += weights[i];
} ++i;
}
return w; }
var items = ["A", "B", "C", "D"];
var values = [50, 140, 60, 60];
var weights = [5, 20, 10, 12];
var capacity = 30;
print(ksack(values, weights, capacity)); // displays 220
