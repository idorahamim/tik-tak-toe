export const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    if (isTie(squares))
        return 'tie';
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};

const isTie = (squares) => {
    let nullSquares = 0;
    squares.forEach(index => {
        if (index == null)
            nullSquares += 1;
    });
    if (nullSquares == 0)
        return true;
    return false;
};
