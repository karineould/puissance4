import React from 'react';

export default class Piece extends React.Component {

    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.props.onClick(this.props.column);
    };

    render() {
        return (
            <td className={this.props.owner} onClick={this.onClick}>
            </td>
        );
    }
}
