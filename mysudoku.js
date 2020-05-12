/*
Problem Statement
Sudoku is a logic-based, combinatorial number-placement puzzle. The objective is to fill a 9×9 grid with digits so that each column, each row, and each of the nine 3×3 sub-grids that compose the grid (also called "boxes") contains the digits from 1 to 9.
Generally, a puzzle provides a partial solution so that some squares already have numbers. To solve the puzzle, we need to fill in the unsolved squares, as demonstrated in Figure 1.
By the end of this challenge we'll have a fully functioning Sudoku solver that runs from the command line. We'll be presented with 9x9 unsolved Sudoku puzzle grid. The puzzles grid can be found in the file sudoku_puzzles.txt.
Sudoku Solver is basically your code that takes your input and produces output mathematically
Input: format Space separated given numbers in the grid ( 0 for empty place ) 
Sample Input:
   0 0 0 2 6 0 7 0 1
   6 8 0 0 7 0 0 9 0
   1 9 0 0 0 4 5 0 0
   8 2 0 1 0 0 0 4 0
   0 0 4 6 0 2 9 0 0
   0 5 0 0 0 3 0 2 8
   0 0 9 3 0 0 0 7 4
   0 4 0 0 5 0 0 3 6
   7 0 3 0 1 8 0 0 0
    

Output: format 9x9 sudoku grid
A complete solution to this challenge take Input 9x9 and produce output grid 9x9
*/
var Puzzle = [
    [0,0,0,2,6,0,7,0,1],
    [6,8,0,0,7,0,0,9,0],
    [1,9,0,0,0,4,5,0,0],
    [8,2,0,1,0,0,0,4,0],
    [0,0,4,6,0,2,9,0,0],
    [0,5,0,0,0,3,0,2,8], 
    [0,0,9,3,0,0,0,7,4],
    [0,4,0,0,5,0,0,3,6],
    [7,0,3,0,1,8,0,0,0],
];
function sudokuSolver(Puzzle) {
    var nonPossibities = {}, impossibleNumbers, emptySpaces = 81;
    while(emptySpaces > 0) {
        emptySpaces = 0;
        for(var vert = 0; vert < Puzzle.length; vert++ ){
            for(var horz = 0; horz < Puzzle.length; horz++ ){
                nonPossibities = {};
                // console.log(problemPuzzle[vert][horz]);
                if(Puzzle[vert][horz] === 0){
                    for(var i = 0; i < 9; i++){
                        if(Puzzle[vert][i] > 0){
                            nonPossibities[Puzzle[vert][i]] = true;
                        }
                        if(Puzzle[i][horz] > 0){
                            nonPossibities[Puzzle[i][horz]] = true;
                        }
                    }
                    for(var vertBox = Math.floor(vert / 3) * 3; vertBox <  Math.floor(vert / 3) * 3 + 3; vertBox++ ){
                        for(var horzBox = Math.floor(horz / 3) * 3; horzBox <  Math.floor(horz / 3) * 3 + 3; horzBox++ ){
                            if(Puzzle[vertBox][horzBox]){
                                nonPossibities[Puzzle[vertBox][horzBox]] = true;
                            }
                        }
                    }
                    // console.log( nonPossibities );
                    impossibleNumbers = Object.keys(nonPossibities);
                    // console.log(typeof(tempObj));
                    if(impossibleNumbers.length === 8){
                        for(var i = 0; i < 10; i++){
                            // console.log(impossibleNumbers.indexOf(j.toString()) < 0);
                            if(impossibleNumbers.indexOf(i.toString()) < 0){
                                // console.log(v,h);
                                Puzzle[vert][horz] = i;
                            }
                        }
                    }
                    else {
                        emptySpaces++;
                    }
                }
                
            }
        }
    }
    return Puzzle;
}

var solvedPuzzle=sudokuSolver(Puzzle);

console.log(solvedPuzzle.map( row=> row.join(',')).join('\n'));