import {DELETEBOOK_LOADING, DELETEBOOK_SUCCESS, DELETEBOOK_ERROR} from '../actions/actionTypes';

const defaultState = {
    bookDelete: {
        deleteBook: null,
        deleteLoading: false,
        deleteError: null
    }
};

export default function (state = defaultState, action) {
    switch (action.type) {
        case DELETEBOOK_LOADING:
            return {
                ...state,
                bookDelete: {
                    deleteLoading: true,
                    deleteError: null
                }
            }
        case DELETEBOOK_SUCCESS:
            return {
                ...state,
                bookDelete: {
                    deleteLoading: false,
                    deleteError: null,
                    deleteBook: action.payload
                }
            }
        case DELETEBOOK_ERROR:
            return {
                ...state,
                bookDelete: {
                    deleteLoading: false,
                    deleteError: action.payload.error
                }
            }
        default:
            return state;
    }
}