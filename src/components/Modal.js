import React from 'react';
// import Input from './Input';
import Select from './Select';

export default class Modal extends React.Component {


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
                        />

                        {/*<div className="form-row">*/}
                            {/*<Input />*/}
                            {/*<Input />*/}
                        {/*</div>*/}

                        <Select
                            label="Nombre de parties"
                            options={[1, 2, 5]}
                            type="rounds"
                        />




                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-dismiss="modal">Commencer</button>
                    </div>
                </div>
            </div>
        </div>
       );
    }

}

