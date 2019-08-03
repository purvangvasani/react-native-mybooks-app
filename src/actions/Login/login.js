import {ADD_LOGIN_DETAILS, DELETE_LOGIN_DETAILS, UPDATE_LOGIN_DETAILS} from './../type'

export const addLoginDetails = (id, FullName, Email, Password, isLogged) => {
    return {
        type: ADD_LOGIN_DETAILS,
        payload: {id, FullName, Email, Password, isLogged}
    }
}
export const updateLoginDetails = (id, FullName, Email, Password, isLogged) => {
    return {
        type: UPDATE_LOGIN_DETAILS,
        payload: {id, FullName, Email, Password, isLogged}
    }
}
export const deleteLoginDetails = (id) => {
    return {
        type: DELETE_LOGIN_DETAILS,
        payload: {id}
    }
}