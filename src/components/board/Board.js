import React from "react";
import Square from '../square/Square'

class Board extends React.Component {

    renderSquares(indexes) {
        return indexes.map(index => <Square value={this.props.squares[index]}
                                            onClick={() => this.props.onClick(index)}/>)
    }

    render() {
        return (
            <div>
                <div className="board-row">

                    {this.renderSquares([0, 1, 2])}
                </div>
                <div className="board-row">
                    {this.renderSquares([3, 4, 5])}
                </div>
                <div className="board-row">
                    {this.renderSquares([6, 7, 8])}
                </div>
            </div>
        );
    }
}

export default Board;
