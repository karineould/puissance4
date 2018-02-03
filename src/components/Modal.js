import React from 'react';
import Select from './Select';
import {connect} from "react-redux";
import {displayPlateau} from '../redux/actions';

export class Modal extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.dispatch(displayPlateau());
    }
    render() {
       return (
           <div id="myModal" className="modal fade">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h5 className="modal-title">Configuration du jeu</h5>
                    </div>
                    <div className="modal-body">

                        <Select
                            label="Nombre de joueurs"
                            options={[1, 2]}
                            type="gamers"
                            default={this.props.state.nbGamer}
                        />

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

}

const mapStateToProps = function(state) {
    return {state};
};


export default connect(mapStateToProps)(Modal)
