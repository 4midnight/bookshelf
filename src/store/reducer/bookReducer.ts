import { bookAction, bookActionTypes, bookState } from "../../types/book"

const initialState: bookState = {
    book: [],
    err: null,
    loading: false
}

export const bookReducer = (state = initialState, action: bookAction): bookState  =>{
    switch (action.type){
        case bookActionTypes.ADD_BOOK:
            return { book: action.payload, err: null, loading: false };
        case bookActionTypes.SUCCESS_BOOK:
            return { book: state.book, err: null, loading: action.payload };
        case bookActionTypes.ERR_BOOK:
            return { book: state.book, err: action.payload, loading: false }   
        default:
            return state;     
    }
}

export const addBookAC = (payload: {} ) => ({ type: bookActionTypes.ADD_BOOK, payload});
export const successBookAC = (payload: boolean) => ({ type: bookActionTypes.SUCCESS_BOOK, payload});
export const errBookAC = (payload: string) => ({ type: bookActionTypes.ERR_BOOK, payload})