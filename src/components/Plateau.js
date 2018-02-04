import React from 'react';
import Row from './Row';
import { reset } from '../redux/actions';
import {connect} from "react-redux";

export class Plateau extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            plateau: this.newPlateau(this.props.width, this.props.height),
            player: "joueur1",
            winner: "",
            playerPoints: {"joueur1": 0, "joueur2": 0},
            currentRound: 1,
        };

        this.setMove = this.setMove.bind(this);
        this.play = this.play.bind(this);
        this.checkIfWinner = this.checkIfWinner.bind(this);
        this.togglePlayer = this.togglePlayer.bind(this);
        this.setPlateau = this.setPlateau.bind(this);
        this.newPlateau = this.newPlateau.bind(this);
        this.newCount = this.newCount.bind(this);
        this.countPlayerPoints = this.countPlayerPoints.bind(this);
    }

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

    countPlayerPoints(player){
        let newPlayerPoints = this.state.playerPoints;
        newPlayerPoints[player] = newPlayerPoints[player] + 1;

        this.setState({
            currentRound: this.state.currentRound + 1,
            playerPoints : newPlayerPoints
        });

    }

    checkIfWinner(plateau, player, move){
        let rows = plateau.length;
        let cols = plateau[0].length;

        let row = move.rowIndex;
        let col = move.columnIndex;
        let count, shift;
        let i;

        // Horizontal count
        count = 0;
        for (i = 0; i < cols; i++) {
            count = this.newCount(plateau, player, row, i, count);
            if (count >= 4) return player;
        }

        // Vertical count
        count = 0;
        for ( i = 0; i < rows; i++) {
            count = this.newCount(plateau, player, i, col, count);
            if (count >= 4) return player;
        }

        // Diagonal count
        count = 0;
        shift = row - col;
        for (i = Math.max(shift, 0); i < Math.min(rows, cols + shift); i++) {
            count = this.newCount(plateau, player, i, i - shift, count);
            if (count >= 4) return player;
        }

        // Reverse diagonal count
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
        let updatedPlateau = this.setPlateau(plateau, player, move);
        let updatedPlayer = this.togglePlayer(player);
        let winner = this.checkIfWinner(updatedPlateau, player, move);

        if (winner) {
            this.countPlayerPoints(winner);

            if (this.state.currentRound === parseInt(this.props.nbRound)) {
                if (this.state.playerPoints["joueur1"] > this.state.playerPoints["joueur2"]){
                    winner = "joueur1";
                } else if (this.state.playerPoints["joueur1"] === this.state.playerPoints["joueur2"]) {
                    winner = "Egalité";
                } else {
                    winner = "joueur2";
                }

                setTimeout(function () {
                    alert(winner)
                }, 0);

                this.props.dispatch(reset());
            }
        }


        this.setState({
            plateau: updatedPlateau,
            player: updatedPlayer,
            winner: winner,
        });

    };

    render(){
        let rows = this.state.plateau.map(function(pieces, i) {
            return <Row
                onClick={this.play}
                key={i}
                pieces={pieces} />
        }, this);

        const style = {
            display: this.props.hidden ? '' : 'none',
            textAlign: 'center',
        };

        return (
            <div style={style}>
                <h2 className={this.state.winner || this.state.player}>
                    {this.state.winner
                        ? ("Gagnant : " + this.state.winner)
                        : ("A " + this.state.player + " de jouer")}
                </h2>
                <table align="center">
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default connect()(Plateau)
