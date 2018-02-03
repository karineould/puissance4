import { ADD_GAMER } from './actions';
import { ADD_ROUND } from './actions';
import { DISPLAY_PLAT } from './actions';

const initialState = {
    nbGamer : 1,
    nbRound: 1,
    display: false
};

const gamers = (state = initialState, action) => {

    switch(action.type) {
        case ADD_GAMER:
            return Object.assign({}, state, {
                nbGamer: action.nbGamer,
                nbRound: state.nbRound,
                display: state.display
            });
        case ADD_ROUND:
            return Object.assign({}, state, {
                nbGamer: state.nbGamer,
                nbRound: action.nbRound,
                display: state.display
            });
        case DISPLAY_PLAT:
            return Object.assign({}, state, {
                nbGamer: state.nbGamer,
                nbRound: state.nbRound,
                display: action.display
            });
        default:
            return state;
    }
};

export default gamers;
