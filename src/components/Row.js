import React from 'react';
import Piece from './Piece';

export default class Row extends React.Component {

    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(column) {
        this.props.onClick(this.props.row, column);
    };

    render(){
        let pieces = this.props.pieces.map(function(piece, column) {
            return <Piece
                onClick={this.onClick}
                key={column}
                owner={piece}
                column={column} />
        }, this);

        return (
            <tr>{pieces}</tr>
        );
    }

}
