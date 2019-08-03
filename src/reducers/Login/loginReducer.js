import {ADD_LOGIN_DETAILS, UPDATE_LOGIN_DETAILS, DELETE_LOGIN_DETAILS} from '../../actions/type'
import AsyncStorage from '@react-native-community/async-storage';

const initialState = {
    id: 0,
    isLogged: '',
    FullName: '',
    Email: '',
    Password: '',
    users: [
        {
            id: 0,
            FullName: 'root',
            Email: 'root@root.com',
            Password: 'root',
            isLogged: false
        }
    ]
}

const loginReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_LOGIN_DETAILS:
            return Object.assign({}, state, {
                users: state.users.concat({
                    id: action.payload.id,
                    FullName: action.payload.FullName,
                    Email: action.payload.Email,
                    Password: action.payload.Password,
                    isLogged: action.payload.isLogged
                })
            })
        case UPDATE_LOGIN_DETAILS:
            AsyncStorage.removeItem('login')
            return Object.assign({}, state, { 
                users: state.users.map((user)=>{ 
                    if(user.id === action.payload.id) {       
                        return {
                            ...user,
                            isLogged: action.payload.isLogged
                        }
                    } else return user
                })
            })
        default:
            return state
    }
}


export default loginReducer