import React from 'react';
import Row from './Row';

export default class Plateau extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            plateau: this.newPlateau(this.props.width, this.props.height),
            player: "joueur1",
            winner: "",
        };

        // this.getDefaultSize = this.getDefaultSize.bind(this);
        this.setMove = this.setMove.bind(this);
        this.play = this.play.bind(this);
        this.getCurrentWinner = this.getCurrentWinner.bind(this);
        this.togglePlayer = this.togglePlayer.bind(this);
        this.setPlateau = this.setPlateau.bind(this);
        this.newPlateau = this.newPlateau.bind(this);
        this.newCount = this.newCount.bind(this);
    }

    // getDefaultSize = () => {
    //     return { width: 7, height: 6 };
    // };

    setMove(plateau, player, row, col){
        for (var i = 0; i < plateau.length; i++) {
            if (plateau[i][col] === "")
                row = i;
        }
        return {
            rowIndex: row,
            columnIndex: col,
        };
    };

    newCount(plateau, player, i, j, count){
        if (plateau[i][j] === player)
            return count + 1;
        else
            return 0;
    };

    getCurrentWinner(plateau, player, move){
        let rows = plateau.length;
        let cols = plateau[0].length;

        let row = move.rowIndex;
        let col = move.columnIndex;
        let count, shift;
        let i;

        // Horizontal
        count = 0;
        for (i = 0; i < cols; i++) {
            count = this.newCount(plateau, player, row, i, count);
            if (count >= 4) return player;
        }

        // Vertical
        count = 0;
        for ( i = 0; i < rows; i++) {
            count = this.newCount(plateau, player, i, col, count);
            if (count >= 4) return player;
        }

        // Diagonal
        count = 0;
        shift = row - col;
        for (i = Math.max(shift, 0); i < Math.min(rows, cols + shift); i++) {
            count = this.newCount(plateau, player, i, i - shift, count);
            if (count >= 4) return player;
        }

        // Anti-diagonal
        count = 0;
        shift = row + col;
        for (i = Math.max(shift - cols + 1, 0); i < Math.min(rows, shift + 1); i++) {
            count = this.newCount(plateau, player, i, shift - i, count);
            if (count >= 4) return player;
        }

        return "";
    };

    togglePlayer(player){
        if (player === "joueur1")
            return "joueur2";
        else
            return "joueur1";
    };

    setPlateau(plateau, player, move){
        if (plateau[move.rowIndex][move.columnIndex] === "")
            plateau[move.rowIndex][move.columnIndex] = player;
        return plateau;
    };

    newPlateau(width, height){
        let rows = Array();
        for (var i = 0; i < height; i++) {
            rows[i] = Array();
            for (var j = 0; j < width; j++)
                rows[i][j] = "";
        }
        return rows;

    }

    play(row, column){
        let player = this.state.player;
        let plateau;

        if (this.state.winner) {
            plateau = this.newPlateau(this.props.width, this.props.height);
        } else {
            plateau = this.state.plateau;
        }

        let move = this.setMove(plateau, player, row, column);
        let newPlateau = this.setPlateau(plateau, player, move);
        let newWinner = this.getCurrentWinner(newPlateau, player, move);
        let newPlayer = this.togglePlayer(player);

        if (newWinner)
            setTimeout(function() { alert(newWinner) }, 0);

        this.setState({
            plateau: newPlateau,
            player: newPlayer,
            winner: newWinner,
        });

    };

    render(){
        let rowsComponents = this.state.plateau.map(function(pieces, i) {
            return <Row
                onClick={this.play}
                rowIndex={i}
                key={i}
                pieces={pieces} />
        }, this);

        return (
            <div>
                <p className={this.state.winner || this.state.player}>
                    {this.state.winner
                        ? ("Gagnant : " + this.state.winner)
                        : ("A " + this.state.player + " de jouer")}
                </p>
                <table>
                    <tbody>
                        {rowsComponents}
                    </tbody>
                </table>
            </div>
        );
    }

}
