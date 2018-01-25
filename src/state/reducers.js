import { combineReducers } from 'redux';
import { ACTIONS } from './actions';

const loans = (state = {}, action, payload) => {
    switch (action) {
        case ACTIONS.GET_LOANS: return { foo: 0};    
        default: return state;
    }
}

const reducers = combineReducers({
    loans
});

export default reducers;