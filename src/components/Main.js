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

        let subTitle = '';
        if (this.props.state.display) {
            subTitle = (
                <section >
                    <h3>Nombre de Partie : {this.props.state.nbRound} </h3>
                </section>
            );
        }

        let plateau ='';
        if (this.props.state.display) {
            plateau = <Plateau
                width={6}
                height={7}
                nbRound={this.props.state.nbRound}
                hidden={this.props.state.display}
            />
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


                {plateau}

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
