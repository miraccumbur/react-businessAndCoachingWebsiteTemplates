import * as actionTypes from "./actionsType";

export const changeCurrentPage = (currentPage)=>({
    type:actionTypes.CHANGE_CURRENT_PAGE,
    payload:currentPage
})