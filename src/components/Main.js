import React from 'react';
import Modal from './Modal'
import Plateau from "./Plateau";
import { connect } from 'react-redux';
import { gamers } from "../redux";
import { reset } from '../redux/actions';

export class Main extends React.Component {


    constructor(props) {
        super(props);

        this.restart = this.restart.bind(this);
    }

    restart(){
        this.props.dispatch(reset());
    }

    render(){
        const style = {
            textAlign: 'center',
            margin: '15%',
        };

        const styleHiddenGameStarted = {
            display: this.props.state.display ? '' : 'none',
            margin: '2em'
        };

        const styleHiddenPlay = {
            display: this.props.state.display ?  'none' : '' ,
        };

        const styleSection = {
            width: '80%',
            height: '50px',
            margin: 'auto',
        };

        const styleSectionLeft = {
            width: '50%',
            height: '50px',
            float: 'left'
        };

        const styleSectionRight ={
            marginLeft: '15%',
            height: '50px',
        };

        let subTitle = '';
        if (this.props.state.display) {
            subTitle = (
                <section style={styleSection}>
                    <div style={styleSectionLeft}> Nombre de joueur : {this.props.state.nbGamer} </div>
                    <div style={styleSectionRight}>Nombre de Partie : {this.props.state.nbRound} </div>
                </section>
            );
        }

        return (
            <div style={style}>
                <h1>Puissance 4</h1>

                <br/>
                {subTitle}

                <button
                    style={styleHiddenPlay}
                    className="btn btn-success"
                    data-target="#modalConf"
                    data-toggle="modal">
                    &nbsp;&nbsp;&nbsp;&nbsp;PLAY&nbsp;&nbsp;&nbsp;&nbsp;
                </button>

                <button
                    style={styleHiddenGameStarted}
                    className="btn btn-primary"
                    data-target="#modalPause"
                    data-toggle="modal"
                >
                    &nbsp;&nbsp;&nbsp;&nbsp;PAUSE&nbsp;&nbsp;&nbsp;&nbsp;
                </button>

                <Modal id="modalConf"/>
                <Modal id="modalPause"/>

                <Plateau
                    width={6}
                    height={7}
                    nbGamer={this.props.state.nbGamer}
                    nbRound={this.props.state.nbRound}
                    hidden={this.props.state.display}
                />

                <button
                    style={styleHiddenGameStarted}
                    className="btn btn-danger"
                    onClick={this.restart}
                >
                    &nbsp;&nbsp;&nbsp;&nbsp;RECOMMENCER&nbsp;&nbsp;&nbsp;&nbsp;
                </button>

            </div>
        );
    }


}

const mapStateToProps = function(state) {
    return {state};
};


export default connect(mapStateToProps)(Main)
