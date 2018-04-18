import {
    ADDBOOK_LOADING,
    ADDBOOK_SUCCESS,
    ADDBOOK_ERROR
} from '../actions/ActionTypes';

const defaultState = {
        addBook: null,
        addBookLoading: false,
        addBookError: null
};

export default function (state = defaultState, action) {
    switch (action.type) {
        case ADDBOOK_LOADING:
            return {
                ...state,
                    addBookLoading: true,
                    addBookError: null
                }
        case ADDBOOK_SUCCESS:
            return {
                ...state,
                    addBookLoading: false,
                    addBookError: null,
                    addBookBook: action.payload
                }
        case ADDBOOK_ERROR:
            return {
                ...state,
                    addBookLoading: false,
                    addBookError: action.payload.error
                }
        default:
            return state;
    }
}