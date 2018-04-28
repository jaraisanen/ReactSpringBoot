import axios from 'axios';
import {
    GETBOOKS_LOADING,
    GETBOOKS_SUCCESS,
    GETBOOKS_ERROR,
    DELETEBOOK_LOADING,
    DELETEBOOK_SUCCESS,
    DELETEBOOK_ERROR,
    ADDBOOK_LOADING,
    ADDBOOK_SUCCESS,
    ADDBOOK_ERROR,
    URL,
    TOKEN
} from '../ActionTypes';
import History from '../../utils/History'

export const getBooksSuccess = books => ({type: GETBOOKS_SUCCESS, payload: {
        books
    }});

export function getBooks() {
    return async(dispatch) => {
        try {
            dispatch({type: GETBOOKS_LOADING});
            const res = await axios.get(`${URL}/books/`, {
                headers: {
                    "Authorization": `${TOKEN}`
                }
            });
            dispatch(getBooksSuccess(res.data._embedded.books))
            return res.data._embedded.books;

        } catch (error) {
            dispatch({type: GETBOOKS_ERROR, payload: 'Problem with getting all books'});
        }
    }
}

export function addBook({
    title,
    author,
    year,
    isbn,
    price
}, history) {
    return async(dispatch) => {
        try {
            dispatch({type: ADDBOOK_LOADING});
              await axios.post(`${URL}/books/`, {
                title,
                author,
                year,
                isbn,
                price
            }, {
                headers: {
                    "Authorization": `${TOKEN}`
                }
            });
            dispatch({type: ADDBOOK_SUCCESS});
            history.push('/books');
        } catch (error) {
            dispatch({
                type: ADDBOOK_ERROR,
                payload: 'Error: ' + error
            });
        }
    }
}

export function deleteBook(bookUrl, history) {
    return async(dispatch) => {
        try {
            dispatch({type: DELETEBOOK_LOADING});
            const res = await axios.delete(`${bookUrl}`, {
                headers: {
                    "Authorization": `${TOKEN}`
                }
            });
            dispatch({type: DELETEBOOK_SUCCESS, payload: res});
            History.go('/books');
        } catch (error) {
            dispatch({type: DELETEBOOK_ERROR, payload: 'Problem with deleting book'});
        }
    }
}
