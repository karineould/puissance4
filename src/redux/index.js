import { ADD_J1 } from './actions';
import { ADD_J2 } from './actions';
import { ADD_ROUND } from './actions';
import { DISPLAY_PLAT } from './actions';
import { RESET } from './actions';
import { GAGNANT } from "./actions";

const initialState = {
    joueur1: "Joueur1",
    joueur2: "Joueur2",
    nbRound: 1,
    gagnant: "",
    display: false
};

const gamers = (state = initialState, action) => {

    switch(action.type) {
        case ADD_J1:
            return Object.assign({}, state, {
                joueur1: action.joueur1,
                joueur2: state.joueur2,
                nbRound: state.nbRound,
                gagnant: state.gagnant,
                display: state.display
            });
        case ADD_J2:
            return Object.assign({}, state, {
                joueur1: state.joueur1,
                joueur2: action.joueur2,
                nbRound: state.nbRound,
                gagnant: state.gagnant,
                display: state.display
            });
        case ADD_ROUND:
            return Object.assign({}, state, {
                joueur1: state.joueur1,
                joueur2: state.joueur2,
                nbRound: action.nbRound,
                gagnant: state.gagnant,
                display: state.display
            });
        case DISPLAY_PLAT:
            return Object.assign({}, state, {
                joueur1: state.joueur1,
                joueur2: state.joueur2,
                nbRound: state.nbRound,
                gagnant: state.gagnant,
                display: action.display
            });
        case GAGNANT:
            return Object.assign({}, state, {
                joueur1: state.joueur1,
                joueur2: state.joueur2,
                nbRound: state.nbRound,
                gagnant: action.gagnant,
                display: state.display
            });
        case RESET:
            return Object.assign({}, state, {
                joueur1: action.joueur1,
                joueur2: action.joueur2,
                nbRound: action.nbRound,
                gagnant: action.gagnant,
                display: action.display
            });
        default:
            return state;
    }
};

export default gamers;
