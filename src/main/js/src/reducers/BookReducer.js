import {
    GETBOOKS_LOADING,
    GETBOOKS_SUCCESS,
    GETBOOKS_ERROR,
    DELETEBOOK_LOADING,
    DELETEBOOK_SUCCESS,
    DELETEBOOK_ERROR
} from '../actions/ActionTypes';

const defaultState = {
    bookList: {
        allBooks: [],
        listLoading: false,
        listError: null
    },
    bookDelete: {
        deleteBook: null,
        deleteLoading: false,
        deleteError: null
    }
};

export default function (state = defaultState, action) {
    switch (action.type) {
        case GETBOOKS_LOADING:
            return {
                ...state,
                bookList: {
                    listLoading: true,
                    listError: null
                }
            };
        case GETBOOKS_SUCCESS:
            return {
                ...state,
                bookList: {
                    listLoading: false,
                    allBooks: action.payload.books
                }
            };
        case GETBOOKS_ERROR:
            return {
                ...state,
                bookList: {
                    listLoading: false,
                    listError: action.payload.error,
                    allBooks: []
                }
            };
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