export const ADD_GAMER = 'ADD_GAMER';
export const ADD_ROUND = 'ADD_ROUND';
export const DISPLAY_PLAT = 'DISPLAY_PLAT';
export const RESET = 'RESET';

export const addGamer = (nb) => ({
    type : ADD_GAMER,
    nbGamer: nb
});

export const addRound = nb => ({
    type : ADD_ROUND,
    nbRound: nb
});

export const displayPlateau = () => ({
    type : DISPLAY_PLAT,
    display: true
});

export const reset = () => ({
    type : RESET,
    display: false,
    nbGamer: 1,
    nbRound: 1
});
