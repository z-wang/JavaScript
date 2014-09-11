Graphs
=========
function Vertex(label) { 
  this.label = label;
}

function Graph(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = [];
  for (var i = 0; i < this.vertices; ++i) {
    this.adj[i] = [];
    this.adj[i].push(""); 
  }
  this.addEdge = addEdge;
  this.toString = toString; 
}

function dfs(v) {
this.marked[v] = true;
if (this.adj[v] != undefined) {
      print("Visited vertex: " + v);
   }
for each (var w in this.adj[v]) { if (!this.marked[w]) {
this.dfs(w); }
} }


function bfs(s) {
var queue = [];
this.marked[s] = true;
queue.push(s); // add to back of queue while (queue.length > 0) {
var v = queue.shift(); // remove from front of queue if (v == undefined) {
             print("Visited vertex: " + v);
          }
for each (var w in this.adj[v]) { if (!this.marked[w]) {
this.edgeTo[w] = v; this.marked[w] = true; queue.push(w);
} }
} }


---------------------
Shortest path

//Breadth-First Search Leads to Shortest Paths
---------------------
First, we need an array that keeps track of edges from one vertex to the next. We’ll name this array edgeTo. As we work through the breadth-first search function, every time we come across a vertex that is not marked, besides marking it, we will add an edge to that vertex from the vertex that we are exploring in the adjacency list.

// add this to Graph class
this.edgeTo = [];

// bfs function
function bfs(s) {
var queue = [];
this.marked[s] = true;
queue.push(s); // add to back of queue while (queue.length > 0) {
var v = queue.shift(); // remove from front of queue if (v == undefined) {
             print("Visited vertex: " + v);
          }
for each (var w in this.adj[v]) { if (!this.marked[w]) {
this.edgeTo[w] = v; this.marked[w] = true; queue.push(w);
} }
} }

//find path
function pathTo(v) {
var source = 0;
if (!this.hasPathTo(v)) {
return undefined; }
var path = [];
for (var i = v; i != source; i = this.edgeTo[i]) { path.push(i);
} path.push(s); return path;
}


function hasPathTo(v) { return this.marked[v];
}

//Be sure to add the appropriate declarations to the Graph() function: 
this.pathTo = pathTo;
this.hasPathTo = hasPathTo;
  
----------------------------
Topological Sorting
----------------------------
The topological sort algorithm is broken up into two functions. The first function, topSort(), sets up the sorting process and calls a helper function, topSortHelper(), and then displays the sorted list of vertices.
The major work is done in the recursive function topSortHelper(). This function marks the current vertex as visited and then recursively visits each adjacent vertex in the current vertex’s adjacency list, marking them as visited. Finally, the current vertex is pushed onto a stack.

function topSort() {
var stack = [];
var visited = [];
for (var i = 0; i < this.vertices; i++) {
visited[i] = false; }
for (var i = 0; i < this.vertices; i++) { if (visited[i] == false) {
this.topSortHelper(i, visited, stack); }
}
for (var i = 0; i < stack.length; i++) {
if (stack[i] != undefined && stack[i] != false) { print(this.vertexList[stack[i]]);
} }
}

function topSortHelper(v, visited, stack) { visited[v] = true;
for each (var w in this.adj[v]) {
if (!visited[w]) {
this.topSortHelper(visited[w], visited, stack);
} }
   stack.push(v);
}

