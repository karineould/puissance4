import { ADD_GAMER } from './actions';
import { ADD_ROUND } from './actions';

const initialState = {
    nbGamer : 0,
    nbRound: 1
};

const gamers = (state = initialState, action) => {
// export default function gamers (state = initialState, action) {
    // if (typeof state === 'undefined') {
    //     return initialState;
    // }

    switch(action.type) {
        case ADD_GAMER:
            // console.log(state);
            // console.log(action);
            return Object.assign({}, state, {
                nbGamer: action.nbGamer,
                nbRound: state.nbRound
            });
        case ADD_ROUND:
            // console.log(state);
            // console.log(action);
            return Object.assign({}, state, {
                nbGamer: state.nbGamer,
                nbRound: action.nbRound
            });
        default:
            // console.log(state);
            return state;
    }
};

export default gamers;
