import { combineReducers } from 'redux';
import { actionTypes } from './actions';


const loans = (state = {}, action, payload) => {
    switch (action.type) {
        case "GET_LOANS": return { foo: 0};    
        default: return state;
    }
}

const reducers = combineReducers({
    loans
});

export default reducers;