function validBoard(solution) {
    var isValid = false;

    var newGrid = organizeGrid(solution);
    var cols = getCols(solution);
    var rows = getRows(solution);

    if (newGrid && cols && rows) isValid = true;

    console.log(isValid);
    return isValid;
}

//check all rows for all nums
function getRows(solution) {
    return isArrayValid(solution);
}

//get columns
function getCols(solution) {
    var matrix = [];

    for (var y = 0; y < solution.length; y++) {
        matrix.push([]);
    }

    for (var i = 0; i < solution.length; i++) {
        for (var x = 0; x < solution[i].length; x++) {
            //console.log(solution[x][i]);

            matrix[i].push(solution[x][i]);
        }
    }
    return isArrayValid(matrix);
}

//arrange row in 9X9
function organizeGrid(solution) {
    var num = 0;
    var count = 0;
    var rowCt = 0;
    var organizedGrid = [];

    for (var i = 0; i < 9; i++) {
        organizedGrid.push([]);
    }

    while (num < solution.length) {
        for (var i = 0; i < solution.length; i++) {
            for (var x = num; x < num + 3; x++) {
                if (count % 9 === 0) {
                    rowCt++;
                }

                organizedGrid[rowCt - 1].push(solution[i][x]);
                count++;
            }
        }
        num += 3;
    }

    return isArrayValid(organizedGrid);
}

//check if arrays contain all numbers 1 -9
function isArrayValid(solution) {
    var correctArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    var allAcross = true;

    solution.map(function(arr) {
        var newArr = arr.sort(function(a, b) {
            return a - b;
        });

        if (newArr.toString() !== correctArr.toString()) {
            allAcross = false;
            return false;
        }
    });

    return allAcross;
}

validBoard([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
]);

//check if each row returns all numbers 1-9
