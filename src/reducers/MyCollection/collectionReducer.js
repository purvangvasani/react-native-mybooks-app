import {ADD_COLLECTION_DETAILS, UPDATE_COLLECTION_DETAILS, DELETE_COLLECTION_DETAILS} from '../../actions/type'

const initialState = {
    id: 0,
    Name: '',
    Author: '',
    Description: '',
    Rating: '',
    Category: '',
    Image: '',
    collections: []
}

const collectionReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_COLLECTION_DETAILS:
            return Object.assign({}, state, {
                collections: state.collections.concat({
                    id: action.payload.id,
                    Name: action.payload.Name,
                    Author: action.payload.Author,
                    Description: action.payload.Description,
                    Rating: action.payload.Rating,
                    Category: action.payload.Category,
                    Image: action.payload.Image
                })
            })
        case DELETE_COLLECTION_DETAILS:
            return Object.assign({}, state, { 
                collections: state.collections.filter((data)=>{
                    if(data.id === action.payload.id) { console.log(data.id, action.payload.id)
                        collections: state.collections.filter((data, i)=>i!=action.payload.id)
                    } else return data
                })
            })
        default:
            return state
    }
}


export default collectionReducer