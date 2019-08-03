import {ADD_COLLECTION_DETAILS, DELETE_COLLECTION_DETAILS, UPDATE_COLLECTION_DETAILS} from './../type'

export const addCollectionDetails = (id, Name, Author, Description, Rating, Category, Image, isFavourite) => {
    return {
        type: ADD_COLLECTION_DETAILS,
        payload: {id, Name, Author, Description, Rating, Category, Image, isFavourite}
    }
}
export const updateCollectionDetails = (id, Name, Author, Description, Rating, Category, Image, isFavourite) => {
    return {
        type: UPDATE_COLLECTION_DETAILS,
        payload: {id, Name, Author, Description, Rating, Category, Image, isFavourite}
    }
}
export const deleteCollectionDetails = (id) => {
    return {
        type: DELETE_COLLECTION_DETAILS,
        payload: {id}
    }
}