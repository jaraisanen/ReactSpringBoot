export const AUTHENTICATED = 'authenticated_user';
export const UNAUTHENTICATED = 'unauthenticated_user';
export const AUTHENTICATION_ERROR = 'authentication_error';

export const GETBOOKS_LOADING = 'GETBOOKS_LOADING';
export const GETBOOKS_SUCCESS = 'GETBOOKS_SUCCESS';
export const GETBOOKS_ERROR = 'GETBOOKS_ERROR';

export const DELETEBOOK_LOADING = 'DELETEBOOK_LOADING';
export const DELETEBOOK_SUCCESS = 'DELETEBOOK_SUCCESS';
export const DELETEBOOK_ERROR = 'DELETEBOOK_ERROR';

export const ADDBOOK_LOADING = 'ADDBOOK_LOADING';
export const ADDBOOK_SUCCESS = 'ADDBOOK_SUCCESS';
export const ADDBOOK_ERROR = 'ADDBOOK_ERROR';

export const URL = 'http://localhost:8080/';
export const USER = localStorage.getItem('user');
export const TOKEN =  `Bearer ` + localStorage.getItem('user');