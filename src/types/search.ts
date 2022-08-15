export enum searchActionTypes{
    ADD_SEARCH = "ADD_SEARCH",
    ERR_SEARCH = "ERR_SEARCH",
    SUCCESS_SEARCH = "SUCCESS_SEARCH"
}

interface addSearch{
    type: searchActionTypes.ADD_SEARCH,
    payload: []
}

interface errSearch{
    type: searchActionTypes.ERR_SEARCH,
    payload: string | null
}

interface successSearch{
    type: searchActionTypes.SUCCESS_SEARCH,
    payload: boolean
}

export interface searchState{
    searchSelect: any[],
    err: string | null,
    loading: boolean
}

export type searchAction = addSearch | errSearch | successSearch