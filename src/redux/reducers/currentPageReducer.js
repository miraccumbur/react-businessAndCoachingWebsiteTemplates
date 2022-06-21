import * as actionTypes from "../actions/actionsType";
import initialState from './initialState'

const currentPageReducer=(state=initialState.currentPage,action)=>{
    let newState;
    switch (action.type) {
        case actionTypes.CHANGE_CURRENT_PAGE:
            newState = action.payload
            return newState;
        default:
            return state;
    }
};

export default currentPageReducer;