export enum booksActionTypes{
    ADD_BOOKS = "ADD_BOOKS",
    ERR_BOOKS = "ERR_BOOKS",
    SUCCESS_BOOKS = "SUCCESS_BOOKS",
    PAG_BOOKS = "PAG_BOOKS",
}

interface addBoks{
    type: booksActionTypes.ADD_BOOKS,
    payload: any[]
}

interface errBooks{
    type: booksActionTypes.ERR_BOOKS,
    payload: string
}

interface successBooks{
    type: booksActionTypes.SUCCESS_BOOKS,
    payload: boolean,
}

interface pagBooks{
    type: booksActionTypes.PAG_BOOKS,
    payload: any[]
}

export interface booksState{
    books: any[],
    err: null | string,
    loading: boolean,

}

export type booksAction = addBoks | errBooks | successBooks | pagBooks