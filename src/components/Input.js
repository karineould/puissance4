import React from 'react';
import {setJ1, setJ2} from "../redux/actions";
import {connect} from "react-redux";


export class Input extends React.Component {


    constructor(props) {
        super(props);

        this.change = this.change.bind(this);
    }

    change(e) {
        if (e.target.id === "joueur1"){
            this.props.dispatch(setJ1(e.target.value));
        } else {
            this.props.dispatch(setJ2(e.target.value));
        }
    }

    render(){
        return (
            <div >
                <div className="form-group" >
                    <label defaultValue="joueur1">Pseudo Joueur 1</label>
                    <input type="text" className="form-control" id="joueur1" onChange={this.change} placeholder="Joueur 1" />
                </div>
                <div className="form-group" >
                    <label defaultValue="joueur2">Pseudo Joueur 2</label>
                    <input type="text" className="form-control" id="joueur2" onChange={this.change} placeholder="Joueur 2" />
                </div>
            </div>

        );
    }
}

export default connect()(Input)
