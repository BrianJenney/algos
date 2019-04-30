const problem = {
    start: { A: 5, B: 2 },
    A: { C: 4, D: 2 },
    B: { A: 8, D: 7 },
    C: { D: 6, finish: 3 },
    D: { finish: 1 },
    finish: {}
};

const lowestCostNode = (costs, processed) => {
    return Object.keys(costs).reduce((lowest, node) => {
        if (lowest === null || costs[node] < costs[lowest]) {
            if (!processed.includes(node)) {
                lowest = node;
            }
        }
        return lowest;
    }, null);
};

// function that returns the minimum cost and path to reach Finish
const dijkstra = graph => {
    // track lowest cost to reach each node
    const costs = Object.assign({ finish: Infinity }, graph.start);

    // track paths
    const parents = { finish: null };
    for (let child in graph.start) {
        parents[child] = "start";
    }

    // track nodes that have already been processed
    const processed = [];

    // debugger;

    let node = lowestCostNode(costs, processed);

    while (node) {
        let cost = costs[node];
        let children = graph[node];
        for (let n in children) {
            let newCost = cost + children[n];
            if (!costs[n]) {
                costs[n] = newCost;
                parents[n] = node;
            }
            if (costs[n] > newCost) {
                costs[n] = newCost;
                parents[n] = node;
            }
        }
        processed.push(node);
        node = lowestCostNode(costs, processed);
    }

    let optimalPath = ["finish"];
    let parent = parents.finish;
    while (parent) {
        optimalPath.push(parent);
        parent = parents[parent];
    }
    optimalPath.reverse();

    const results = {
        distance: costs.finish,
        path: optimalPath
    };

    return results;
};

//

const graph = [[1], [2], [3, 4], [4], [0]];

hasCycle = g => {
    //turn adjacency list to edge list
    const edgeList = g.reduce((acc, cur, idx) => {
        acc[idx] = cur;
        return acc;
    }, {});

    console.log(edgeList, "list");

    const graphNodes = Object.keys(edgeList);

    let visited = {};
    let path = {};
    for (let i = 0; i < graphNodes.length; i++) {
        let curNode = graphNodes[i];

        if (isCycle(curNode, visited, path, edgeList)) {
            return true;
        }
    }

    return false;
};

isCycle = (node, visited, path, edgeList) => {
    //if we haven't already visited this node - visit and mark as true
    if (!visited[node]) {
        visited[node] = true;
        path[node] = true;

        let neighbors = edgeList[node];

        //check all neighborinos
        for (let i = 0; i < neighbors.length; i++) {
            let curNeighbor = neighbors[i];

            if (
                !visited[curNeighbor] &&
                isCycle(curNeighbor, visited, path, edgeList)
            ) {
                return true;
            }

            if (path[curNeighbor]) {
                return true;
            }
        }
    }

    path[node] = false;
    return false;
};

console.log(hasCycle(graph));

function findPerms(str) {
    // BASE CASE
    if (str.length === 1) return [str];

    // RECURSIVE CASE
    let all = [];

    for (let i = 0; i < str.length; i++) {
        const currentLetter = str[i];

        const remainingLetters = str.slice(0, i) + str.slice(i + 1);

        const permsOfRemainingLetters = findPerms(remainingLetters);

        permsOfRemainingLetters.forEach(subPerm => {
            all.push(currentLetter + subPerm);
        });
    }
    return all;
}

console.log(findPerms("cats"));
