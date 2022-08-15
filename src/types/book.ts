export enum bookActionTypes{
    ADD_BOOK = "ADD_BOOK",
    SUCCESS_BOOK = "SUCCESS_BOOK",
    ERR_BOOK = "ERR_BOOK"
}

interface addBook{
    type: bookActionTypes.ADD_BOOK,
    payload: any[]
}

interface successBook{
    type: bookActionTypes.SUCCESS_BOOK,
    payload: boolean
}

interface errBook{
    type: bookActionTypes.ERR_BOOK,
    payload: string
}

export interface bookState{
    book: any[],
    err: null | string,
    loading: boolean
}

export type bookAction = addBook | successBook | errBook