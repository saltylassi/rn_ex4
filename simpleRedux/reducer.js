// Import

// Actions

const START_TIMER = 'START_TIMER';
const RESTART_TIMER = 'RESTART_TIMER';
const ADD_SECOND = 'ADD_SECOND';
const TIMER_DURATION = 1500;


//Action Creators

const startTimer = () => {
    return {
        type: START_TIMER
    }
};

const restartTimer = () => {
    return {
        type: RESTART_TIMER
    }
};

const addSecond = () => {
    return {
        type: ADD_SECOND
    }
};

//Reducer


const initialState = {
    isPlaying: false,
    elapsedTime: 0,
    timerDuration: TIMER_DURATION
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case START_TIMER:
            return applyStartTimer(state);
        case RESTART_TIMER:
            return applyRestartTimer(state);
        case ADD_SECOND:
            return applyAddSecond(state);
        default:
            return state;

    }
}

//Reducer Function

const applyStartTimer = (state) => {
    return {
        ...state, //the state i have
        isPlaying: true
        //overwrite state, only 'isPlaying'
        // if i don't type '...state', another elements in state 
        //(elapsedTime or timerDuration) will be removed from the state,
        //and inside of the state, there is only one element - isPlaying.
    };
}

const applyRestartTimer = (state) => {
    return {
        ...state,
        isPlaying: false,
        elapsedTime: 0
    };
}

const applyAddSecond = (state) => {
    return (state.elapsedTime < TIMER_DURATION ? {
        ...state,
        elapsedTime: state.elapsedTime + 1
    } : {
            ...state,
            isPlaying: false
        }
    );
}




//Export Action Creators

const actionCreators = {
    startTimer,
    restartTimer,
    addSecond
};

export { actionCreators };

//Export Reducer

export default reducer;

