import { searchAction, searchActionTypes, searchState } from "../../types/search"


const initialState: searchState = {
    searchSelect: [],
    err: null,
    loading: false
}

export const searchReducer = (state = initialState, action: searchAction): searchState =>{
    switch(action.type){
        case searchActionTypes.ADD_SEARCH:
            return { searchSelect: action.payload, err: null, loading: false};
        case searchActionTypes.ERR_SEARCH:
            return { searchSelect: state.searchSelect, err: action.payload, loading: false};
        case searchActionTypes.SUCCESS_SEARCH:
            return { searchSelect: state.searchSelect, err: null, loading: true};
        default: 
            return state;    
    }
}

export const searchAddAC = (payload: any[]) => ({type: searchActionTypes.ADD_SEARCH, payload});
export const searchErrAC = (payload: string) => ({type: searchActionTypes.ERR_SEARCH, payload});
export const searchSuccessAC = () => ({type: searchActionTypes.SUCCESS_SEARCH});