if (typeof describe === 'function') {

    describe('#ticTacToe()', () => {
      it('should place mark on the board', () => {
        ticTacToe(1, 1);
        assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
      });
      it('should alternate between players', () => {
        ticTacToe(0, 0);
        assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
      });
      // checks for vertical win scenario 1
      it('should check for vertical wins', () => {
        board = [ ['X', ' ', ' '], ['X', ' ', ' '], ['X', ' ', ' '] ];
        assert.equal(verticalWin(), true);
      });
      //checks for vertical win scenario 2
      it('should check for vertical wins', () => {
        board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
        assert.equal(verticalWin(), true);
      });
      //checks for vertical win scenario 3
      it('should check for vertical wins', () => {
        board = [ [' ', ' ', 'X]', [' ', ' ', 'X'], [' ', ' ', 'X'] ];
        assert.equal(verticalWin(), true);
      });
      //checks for horizontal win scenario 1
      it('should check for horizontal wins', () => {
        board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
        assert.equal(horizontalWin(), true);
      });
      //checks for horizontal win scenario 2
      it('should check for horizontal wins', () => {
        board = [ [' ', ' ', ' '], ['X', 'X', 'X'], [' ', ' ', ' '] ];
        assert.equal(horizontalWin(), true);
      });
      //checks for horizontal win scenario 3
      it('should check for horizontal wins', () => {
        board = [ [' ', ' ', ' '], [' ', ' ', ' '] ['X', 'X', 'X'] ];
        assert.equal(horizontalWin(), true);
      });
      //checks for diagonal win scenario 1
      it('should check for diagonal wins', () => {
        board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
        assert.equal(diagonalWin(), true);
      });
      //checks for diagonal win scenario 2
      it('should check for diagonal wins', () => {
        board = [ [' ', ' ', 'X'], [' ', 'X', ' '], ['X', ' ', ' '] ];
        assert.equal(diagonalWin(), true);
      });
      it('should detect a win', () => {
        assert.equal(checkForWin(), true);
      });
    });
  } else {
  
    getPrompt();
  
  }
  