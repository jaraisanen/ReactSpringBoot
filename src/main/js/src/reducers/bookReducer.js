import {
    GETBOOKS_LOADING,
    GETBOOKS_SUCCESS,
    GETBOOKS_ERROR,
    DELETEBOOK_LOADING,
    DELETEBOOK_SUCCESS,
    DELETEBOOK_ERROR,
    ADDBOOK_LOADING,
    ADDBOOK_SUCCESS,
    ADDBOOK_ERROR
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
    },
    bookAdd: {
        addBook: null,
        addBookLoading: false,
        addBookError: null
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
        case ADDBOOK_LOADING:
            return {
                ...state,
                bookAdd: {
                    addBookLoading: true,
                    addBookError: null
                }
            }
        case ADDBOOK_SUCCESS:
            return {
                ...state,
                bookAdd: {
                    addBookLoading: false,
                    addBookError: null,
                    addBookBook: action.payload
                }
            }
        case ADDBOOK_ERROR:
            return {
                ...state,
                bookAdd: {
                    addBookLoading: false,
                    addBookError: action.payload.error
                }
            }
        default:
            return state;
    }
}