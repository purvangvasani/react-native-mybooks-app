import {combineReducers, createStore} from 'redux'
import loginReducer from './reducers/Login/loginReducer'
import collectionReducer from './reducers/MyCollection/collectionReducer'
import requestBookReducer from './reducers/RequestBook/requestBookReducer'

const rootReducer = combineReducers({
    login: loginReducer,
    requestBook: requestBookReducer,
    collection: collectionReducer
})

const configureStore = () =>{
    return createStore(rootReducer)
}

export default configureStore