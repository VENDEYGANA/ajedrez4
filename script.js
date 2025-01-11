document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('chessboard');
    
    // Generar las celdas del tablero
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.id = `cell-${i}-${j}`;
            if ((i + j) % 2 === 0) {
                cell.classList.add('white');
            } else {
                cell.classList.add('black');
            }
            board.appendChild(cell);
        }
    }

    let selectedCell = null;

    board.addEventListener('click', (e) => {
        if (e.target.classList.contains('cell')) {
            if (selectedCell) {
                movePiece(selectedCell, e.target);
                selectedCell.classList.remove('selected');
                selectedCell = null;
            } else {
                selectedCell = e.target;
                selectedCell.classList.add('selected');
            }
        }
    });

    function movePiece(fromCell, toCell) {
        const piece = fromCell.textContent;
        fromCell.textContent = '';
        toCell.textContent = piece;
    }

    // Inicializar las piezas
    const initialSetup = [
        ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
        ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
        ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
    ];

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const cell = document.getElementById(`cell-${i}-${j}`);
            cell.textContent = initialSetup[i][j];
        }
    }
});
        targetSquare.textContent = selectedPiece.textContent;
        selectedPiece.dataset.piece = '';
        selectedPiece.textContent = '';
    }
    selectedPiece.classList.remove('selected');
    selectedPiece = null;
}

createBoard();