import React from 'react';
import { connect } from 'react-redux';
import { addGamer } from '../redux/actions';
import { addRound } from '../redux/actions';

export class Select extends React.Component {

    constructor(props) {
        super(props);

        this.change = this.change.bind(this);
    }

    change(e) {
        if (this.props.type === "gamers"){
            this.props.dispatch(addGamer(e.target.value));
        }
        else {
            this.props.dispatch(addRound(e.target.value));
        }
    }

    render() {
        return (
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">{this.props.label}</label>
                <select className="form-control" onChange={this.change} defaultValue={this.props.default}>
                    {this.props.options.map( (i) =>
                        <option key={i} value={i}>{i}</option>
                    )}
                </select>
            </div>
        )
    }


}

const mapStateToProps = function(state) {
    return {
        state
    };
};

export default connect(mapStateToProps)(Select)
