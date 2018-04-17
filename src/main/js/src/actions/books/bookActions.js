import axios from 'axios';
import {
    GETBOOKS_LOADING,
    GETBOOKS_SUCCESS,
    GETBOOKS_ERROR,
    DELETEBOOK_LOADING,
    DELETEBOOK_SUCCESS,
    DELETEBOOK_ERROR
} from '../actionTypes';

const URL = 'http://localhost:8080/books';
const token = `Bearer ` + localStorage.getItem('user');

export const getBooksSuccess = books => ({type: GETBOOKS_SUCCESS, payload: {
        books
    }});

export function getBooks() {
    return async(dispatch) => {
        try {
            dispatch({type: GETBOOKS_LOADING});
            const res = await axios.get(`${URL}`, {
                headers: {
                    "Authorization": `${token}`
                }
            });
            dispatch(getBooksSuccess(res.data._embedded.books))
            return res.data._embedded.books;

        } catch (error) {
            dispatch({type: GETBOOKS_ERROR, payload: 'Problem with getting all books'});
        }
    }
}

export function deleteBook(bookUrl) {
    console.log(bookUrl);
    return async(dispatch) => {
        dispatch({type: DELETEBOOK_LOADING});
        await fetch(bookUrl, {
        method: "DELETE",
        headers: {
          "Authorization": token
        },
        credentials: 'same-origin',
        mode: 'cors'
      }).then(response => {
        console.log(response)
        dispatch({type: DELETEBOOK_SUCCESS, payload: response});
        return response.text()
      }).catch(error => {
        dispatch({type: DELETEBOOK_ERROR, payload: 'Problem with deleting book'});  
      })
    }
}

/*
export function deleteBook(bookUrl) {
    console.log(token)
    return async(dispatch) => {
        try {
            dispatch({type: DELETEBOOK_LOADING});
            const res = await axios.delete(`${URL}`, {
                headers: {
                    "Authorization": `${token}`
                }
            });
            console.log(dispatch);
            dispatch({type: DELETEBOOK_SUCCESS, payload: res});
            console.log(res);
        } catch (error) {
            dispatch({type: DELETEBOOK_ERROR, payload: 'Problem with deleting book'});
        }
    }
}
*/