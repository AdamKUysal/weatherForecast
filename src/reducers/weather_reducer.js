import * as CONST from "../actions/constants";

export default (state = [], action) => {
    switch (action.type) {
    case CONST.FETCH_WEATHER:
        return action.data; 
    default:
        return state;
    }
};