import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {postListDataReducer} from './redux/reducer/postListDataReducer';
import {selectedPostReducer} from './redux/reducer/selectedPostReducer';

const rootReducer = combineReducers({
	postListDataReducer,
	selectedPostReducer
})

const store = createStore(rootReducer)

export default store;