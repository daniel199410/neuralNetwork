function Matrix(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.matrix = this.initMatrix();
}

Matrix.prototype.initMatrix = function() {
    matrix = [];
    for(i = 0; i < this.rows; i++) {
        matrix[i] = [];
        for(j = 0; j < this.columns; j++) {
            matrix[i][j] = 0;
        }
    }
    return matrix;
}

Matrix.prototype.multiply = function(n) {
    for(var i = 0; i < this.rows; i++){
        for(var j = 0; j < this.columns; j++) {
            this.matrix[i][j] *= n;
        }
    }
}

Matrix.prototype.add = function(n) {
    if(n instanceof Matrix) {
        for(var i = 0; i < this.rows; i++) {
            for(var j = 0; j < this.columns; j++) {
                this.matrix[i][j] += n.matrix[i][j];
            }
        }
    } else {
        for(var i = 0; i < this.rows; i++){
            for(var j = 0; j < this.columns; j++) {
                this.matrix[i][j] += n;
            }
        }
    }    
}

Matrix.prototype.randomize = function(n) {
    for(var i = 0; i < this.rows; i++){
        for(var j = 0; j < this.columns; j++) {
            this.matrix[i][j] += Math.floor(Math.random() * 10);
        }
    }
}