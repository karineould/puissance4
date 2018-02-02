import React from 'react';
import Modal from './Modal'
import Plateau from "./Plateau";
import { connect } from 'react-redux';
import { gamers } from "../redux";

export class Main extends React.Component {

    render(){
        const style = {
            textAlign: 'center',
            margin: '15%'
        };

        return (
            <div style={style}>
                <h1>Puissance 4</h1>
                <h1>{this.props.state.nbGamer}</h1>
                <h1>{this.props.state.nbRound}</h1>
                <button
                    className="btn btn-primary"
                    data-target="#myModal"
                    data-toggle="modal">
                    &nbsp;&nbsp;PLAY&nbsp;&nbsp;
                </button>
                <Modal />

                <Plateau
                    width={6}
                    height={7} />

            </div>
        );
    }


}

const mapStateToProps = function(state) {
    return {state};
};


export default connect(mapStateToProps)(Main)
