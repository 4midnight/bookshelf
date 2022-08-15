import { booksAction, booksActionTypes, booksState } from "../../types/books"


const initialState: booksState = {
    books: [],
    err: null,
    loading: false
}

export const booksReducer = (state = initialState, action: booksAction): booksState =>{
    switch (action.type){
        case booksActionTypes.SUCCESS_BOOKS:
            return { books: state.books, err: null, loading: action.payload };
        case booksActionTypes.ADD_BOOKS:
            return { books: action.payload, err: null, loading: false };
        case booksActionTypes.ERR_BOOKS:
            return { books: state.books, err: action.payload, loading: false };
        case booksActionTypes.PAG_BOOKS:
            return { books: [...state.books, ...action.payload], err: null, loading: false};
        default: 
            return state;         
    }
}


export const booksSuccessAC = ( payload: boolean ) => ({ type: booksActionTypes.SUCCESS_BOOKS, payload});
export const booksAddAC = ( payload: any[] ) => ({ type: booksActionTypes.ADD_BOOKS, payload});
export const booksErrAC = ( payload: string ) => ({ type: booksActionTypes.ERR_BOOKS, payload});
export const booksPagAC = ( payload: any[] ) => ({ type: booksActionTypes.PAG_BOOKS, payload});
