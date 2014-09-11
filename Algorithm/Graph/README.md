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
---------------------

  
