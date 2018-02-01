import React from 'react';
import Modal from './Modal'
import Plateau from "./Plateau";

export default class Main extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            showModal: false
        };
        // this.startGame = this.startGame.bind(this)
    }

    // startGame = () => {
    //     this.setState({
    //        showModal: true,
    //     });
    //
    //     console.log(this.state.showModal)
    // };

    render(){
        const style = {
            textAlign: 'center',
            margin: '15%'
        };

        return (
            <div style={style}>
                <h1>Puissance 4</h1>
                <button
                    className="btn btn-primary"
                    data-target="#myModal"
                    data-toggle="modal">
                    &nbsp;&nbsp;PLAY&nbsp;&nbsp;
                </button>
                <Modal />

                <div>
                    <Plateau
                        width={6}
                        height={7} />
                </div>
            </div>
        );
    }
}
