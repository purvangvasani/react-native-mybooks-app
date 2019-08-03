import {ADD_BOOKREQUEST_DETAILS, UPDATE_BOOKREQUEST_DETAILS, DELETE_BOOKREQUEST_DETAILS} from '../../actions/type'

const initialState = {
    id: 0,
    Bookname: '',
    Authorname: '',
    Description: '',
    Category: '',
    Rating: '',
    requestBooks: []
}

const requestBookReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_BOOKREQUEST_DETAILS:
            return Object.assign({}, state, {
                requestBooks: state.requestBooks.concat({
                    id: action.payload.id,
                    Bookname: action.payload.Bookname,
                    Authorname: action.payload.Authorname,
                    Description: action.payload.Description,
                    Category: action.payload.Category,
                    Rating: action.payload.Rating
                })
            })
        default:
            return state
    }
}


export default requestBookReducer