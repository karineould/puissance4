import React from 'react';
import Select from './Select';
import {connect} from "react-redux";
import {displayPlateau} from '../redux/actions';
import Input from "./Input";

export class Modal extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.dispatch(displayPlateau());
    }


    render() {

        const styleText = {
            color: 'black'
        };

        const styleCenter = {
            textAlign: 'center'
        };

        if (this.props.id === "modalConf") {
            return (
                <div id={this.props.id} className="modal fade" style={styleText}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <h5 style={styleCenter} className="modal-title">Configuration du jeu</h5>
                            </div>
                            <div className="modal-body">

                                <Input />

                                <Select
                                    label="Nombre de parties"
                                    options={[1, 2, 5]}
                                    type="rounds"
                                    default={this.props.state.nbRound}
                                />

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handleClick}>Commencer</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div id={this.props.id} className="modal fade" style={styleText}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Pause</h5>
                        </div>
                        <div className="modal-body">
                            <button type="button" className="btn btn-primary" data-dismiss="modal" >Reprendre</button>
                        </div>
                    </div>
                </div>
            </div>
        );


    }

}

const mapStateToProps = function(state) {
    return {state};
};


export default connect(mapStateToProps)(Modal)
