export default(state = {}, action) => {
    switch (action.type) {
        case "GUESS_LETTER":
            const letters = [...state.letters, action.letter]; //kaname tin state.letters gia na paroume to array apo to store kai me to action letter prosthetoume ta nea
            return {
                ...state, letters
            };
        default:
            return state;
    }
};
