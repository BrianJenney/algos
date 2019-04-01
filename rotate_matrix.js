var rotateImage = function(matrix) {
    // reverse the rows
    matrix = matrix.reverse();
    // swap the symmetric elements
    console.log(matrix);
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < i; j++) {
            var temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    return matrix;
};

let a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(rotateImage(a));

