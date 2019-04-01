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

breadthFirst = tree => {
    let otherList = [];
    let list = [tree];
	while (list.length) {
        node = list.shift();
        otherList.push(node.value);
        if (node.left) {
            list.push(node.left);
        }
        if (node.right) {
            list.push(node.right);
        }
    }
    return otherList;
};

//console.log(breadthFirst(tree));

getMin = tree => {
    let cur = tree;
    while (cur) {
        if (cur.left) {
            cur = cur.left;
        } else {
            return cur.value;
        }
    }
};

getMax = tree => {
    let cur = tree;
    while (cur) {
        if (cur.right) {
            cur = cur.right;
        } else {
            return cur.value;
        }
    }
};

// console.log(getMax(tree));

t1 = {
    value: 5,
    left: {
        value: 10,
        left: {
            value: 4,
            left: {
                value: 1,
                left: null,
                right: null
            },
            right: {
                value: 2,
                left: null,
                right: null
            }
        },
        right: {
            value: 6,
            left: null,
            right: {
                value: -1,
                left: null,
                right: null
            }
        }
    },
    right: {
        value: 7,
        left: null,
        right: null
    }
};

t2 = {
    value: 10,
    left: {
        value: 4,
        left: {
            value: 1,
            left: null,
            right: null
        },
        right: {
            value: 2,
            left: null,
            right: null
        }
    },
    right: {
        value: 6,
        left: null,
        right: {
            value: -1,
            left: null,
            right: null
        }
    }
};

isSubTree = (t1, t2) => {
    if (!t1 || !t2) {
        return true;
    }

    if (isSame(t1, t2)) {
        return true;
    }

    return isSame(t1.left, t2) || isSame (t1.right, t2);
};

isSame = (node1, node2) => {
    if (!node1 && !node2) {
        return true;
    }

    if (node1 || node2) {
        return false;
    }

    return (
        node1.value === node2.value &&
        isSame(node1.right, node2.right) &&
        isSame(node1.left, node2.left)
    );
};

console.log(isSubTree(t1, t2));


 isSubtreeAlt = ( t1, t2) => {
    if (t2 == null) // An empty subtree can always be found in any tree
        return true;

    if (t1 == null) // If no more tree is left to search, return false
        return false

    if (t1.value === t2.value)
        return isSubtreeAlt((t1.left, t2.left) && isSubtreeAlt(t1.right, t2.right));
    return isSubtreeAlt(t1.left, t2) || isSubtreeAlt(t1.right, t2);
}

console.log(isSubtreeAlt(t1, t2));
