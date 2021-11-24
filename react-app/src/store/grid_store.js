// Define action types
const GET_PLAYER_BOARDS = 'grid/GET_PLAYER_BOARDS'

const NEW_GAME = 'grid/NEW_GAME'

// Action Creators
const getGrid = (grid) => ({
    type: GET_PLAYER_BOARDS,
    payload: grid
})

const newGame = (grid) => ({
    type: NEW_GAME,
    payload: grid
})

// Define Thunks
export const getBoardThunk = () => async (dispatch) => {
    console.log("hi get board thunk")
    const response = await fetch(`/api/record/getboards`)

    if(response.ok) {
        const data = await response.json();
        dispatch(getGrid(data));
}}

export const newGameThunk = () => async (dispatch) => {
    console.log("in new game thunk")
    const response = await fetch(`/api/grid/newgame`)

    if(response.ok) {
        const data = await response.json();
        dispatch(newGame(data));
}}

// Define initial state
const initialState = {}

  // Define reducer
export default function gridReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PLAYER_BOARDS:
            return {...state, record: action.payload }
        case NEW_GAME:
            return {...state, ship_placements: action.payload }
        default:
            return state;
    };
};
