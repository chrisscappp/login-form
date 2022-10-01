import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { usersReducer } from '../reducers/usersReducer';
import { loginReducer } from '../reducers/loginReducer'

const composeEnhancers =
    typeof window === 'object' &&
    window.REDUX_DEVTOOLS_EXTENSION_COMPOSE ?
        window.REDUX_DEVTOOLS_EXTENSION_COMPOSE({
        }) : compose;

const rootReducer = combineReducers({
    usersReducer,
    loginReducer,
})


export const store = createStore(rootReducer, composeEnhancers(composeWithDevTools(applyMiddleware(thunk))))