import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
// 引入 redux-thunk
import thunk from 'redux-thunk';
import reducer from './reducer';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
