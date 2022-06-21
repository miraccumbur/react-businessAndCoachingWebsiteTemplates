// Burada bütün reducerlarımızı bir araya topluyoruz.
import{combineReducers} from "redux";
// import counterReducer from "./xReducer"; 
import currentPageReducer from "./currentPageReducer"; 

// const reducers = combineReducers({
//     counterReducer
// });

// export default reducers;

const reducers = combineReducers({
    currentPageReducer
});

export default reducers;