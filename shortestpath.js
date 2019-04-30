const maze = [
    [0, 0, 1, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 1, 1, "goal", 0],
    [0, 0, 0, 0]
];

const solveMaze = maze => {
    const start = {
        isValid: true,
        foundGoal: false,
        row: 0,
        col: 0,
        path: [[0, 0]]
    };

    const isValid = ({ row, col }) => {
        if (row < 0 || col < 0) {
            return false;
        }

        if (row > maze.length - 1 || col > maze[0].length - 1) {
            return false;
        }

        return true;
    };

    const getLocation = location => {
        if (
            maze[location.row][location.col] === "visited" ||
            maze[location.row][location.col] === 1
        ) {
            location.isValid = false;
        } else {
            location.isValid = true;
        }

        if (maze[location.row][location.col] === "goal") {
            location.foundGoal = true;
        }

        maze[location.row][location.col] = "visited";

        return location;
    };

    const queue = [start];

    while (queue.length) {
        const cur = queue.shift();

        //look at all possible directions

        //up
        if (isValid({ row: cur.row - 1, col: cur.col })) {
            const up = { path: cur.path.slice() };
            up.path.push([cur.row - 1, cur.col]);

            up.row = cur.row - 1;
            up.col = cur.col;
            const newLocation = getLocation(up);
            if (newLocation.foundGoal) {
                return newLocation.path;
            } else if (newLocation.isValid) {
                queue.push(newLocation);
            }
        }

        //right
        if (isValid({ row: cur.row, col: cur.col + 1 })) {
            const right = { path: cur.path.slice() };
            right.path.push([cur.row, cur.col + 1]);

            right.col = cur.col + 1;
            right.row = cur.row;
            const newLocation = getLocation(right);
            if (newLocation.foundGoal) {
                return newLocation.path;
            } else if (newLocation.isValid) {
                queue.push(newLocation);
            }
        }

        //down
        if (isValid({ row: cur.row + 1, col: cur.col })) {
            const down = { path: cur.path.slice() };
            down.path.push([cur.row + 1, cur.col]);

            down.row = cur.row + 1;
            down.col = cur.col;
            const newLocation = getLocation(down);
            if (newLocation.foundGoal) {
                return newLocation.path;
            } else if (newLocation.isValid) {
                queue.push(newLocation);
            }
        }

        //left
        if (isValid({ row: cur.row, col: cur.col - 1 })) {
            const left = { path: cur.path.slice() };
            left.path.push([cur.row, cur.col - 1]);

            left.col = cur.col - 1;
            left.row = cur.row;
            const newLocation = getLocation(left);
            if (newLocation.foundGoal) {
                return newLocation.path;
            } else if (newLocation.isValid) {
                queue.push(newLocation);
            }
        }
    }
};

console.log(solveMaze(maze));
