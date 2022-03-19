
import { INPUT_VALUE, ADD_LIST, DELETE_LIST, GET_LIST, GET_LIST_SAGA } from './actionTypes';

const initState = {
    inputValue: 'Write Something',
    list: [],
    test: 'test'
};


export default (state = initState, action) => {
    console.log(action,'oooo')
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case INPUT_VALUE:
            newState.inputValue = action.value;
            return newState;
        case ADD_LIST:
            newState.list = [...newState.list, newState.inputValue];
            newState.inputValue = '';
            return newState;
        case DELETE_LIST:
            newState.list.splice(action.value, 1);
            return newState;
        case GET_LIST:
            newState.list = action.value;
            return newState;
        default:
            return state;
    }
}
