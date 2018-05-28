let nodes = [];

traverseTree = b => {
    if (b.left) {
        traverseTree(b.left);
    }

    nodes.push(b.value);

    if (b.right) {
        traverseTree(b.right);
    }

    return nodes;
};

let tree = {
    value: 3,
    left: {
        value: 1,
        left: null,
        right: null
    },
    right: {
        value: 5,
        left: {
            value: 4,
            left: null,
            right: null
        },
        right: {
            value: 6,
            left: null,
            right: null
        }
    }
};

console.log(traverseTree(tree));
