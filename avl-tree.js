class BST {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
        this.dfsNodes = [];
    }

    insert(val) {
        if (val > this.val) {
            if (!this.right) {
                this.right = new BST(val);
            } else {
                this.right.insert(val);
            }
        } else {
            if (!this.left) {
                this.left = new BST(val);
            } else {
                this.left.insert(val);
            }
        }
    }

    dfs(tree) {
        if (tree.left) {
            this.dfs(tree.left);
        }

        this.dfsNodes.push(tree.val);

        if (tree.right) {
            this.dfs(tree.right);
        }

        return this.dfsNodes;
    }

    bfs() {
        let queue = [this];
        let results = [];

        while (queue.length) {
            const curNode = queue.shift();
            results.push(curNode.val);

            if (curNode.left) {
                queue.push(curNode.left);
            }

            if (curNode.right) {
                queue.push(curNode.right);
            }
        }
        return results;
    }
}

let bTree = new BST(5);

bTree.insert(7);
bTree.insert(4);
bTree.insert(3);
bTree.insert(9);

// console.log(bTree);

// console.log(bTree.bfs());
// console.log(bTree.dfs(bTree));

class Graph {
    constructor() {
        this.adjList = {};
    }

    addVertex(v) {
        if (this.adjList[v]) {
            throw error("Vertex already exists");
        }

        this.adjList[v] = [];
    }

    addEdge(v, w) {
        this.adjList[v].push(w);
    }

    bfs(node) {
        let nodes = [node];
        let visited = [];

        while (nodes) {
            nodes.shift();

            const curNode = this.adjList[node];

            console.log(nodes, curNode);

            curNode.forEach(node => {
                if (!visited.includes(node)) {
                    nodes.push(node);
                    visited.push(node);
                }
            });
        }

        console.log(visited);
    }

    print() {
        console.log(this.adjList);
    }
}

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("A", "D");
graph.addEdge("A", "E");
graph.addEdge("B", "C");
graph.addEdge("D", "C");

graph.print();
graph.bfs("A");
