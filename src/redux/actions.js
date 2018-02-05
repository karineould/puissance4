export const ADD_J1 = 'ADD_J1';
export const ADD_J2 = 'ADD_J2';
export const ADD_ROUND = 'ADD_ROUND';
export const DISPLAY_PLAT = 'DISPLAY_PLAT';
export const RESET = 'RESET';
export const GAGNANT = 'GAGNANT';

export const setJ1 = (text) => ({
    type : ADD_J1,
    joueur1: text
});

export const setJ2 = (text) => ({
    type : ADD_J2,
    joueur2: text
});

export const setGagnant = (text) => ({
    type : GAGNANT,
    gagnant: text
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
    joueur1: "joueur1",
    joueur2: "joueur2",
    gagnant: "",
    nbRound: 1,
    display: false,
});
