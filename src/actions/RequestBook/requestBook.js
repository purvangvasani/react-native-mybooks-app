import {ADD_BOOKREQUEST_DETAILS, UPDATE_BOOKREQUEST_DETAILS, DELETE_BOOKREQUEST_DETAILS} from './../type'

export const addBookRequestDetails = (id, Bookname, Authorname, Description, Category, Rating) => {
    return {
        type: ADD_BOOKREQUEST_DETAILS,
        payload: {id, Bookname, Authorname, Description, Category, Rating}
    }
}
export const updateBookRequestDetails = (id, Bookname, Authorname, Description, Category, Rating) => {
    return {
        type: UPDATE_BOOKREQUEST_DETAILS,
        payload: {id, Bookname, Authorname, Description, Category, Rating}
    }
}
export const deleteBookRequestDetails = (id) => {
    return {
        type: DELETE_BOOKREQUEST_DETAILS,
        payload: {id}
    }
}