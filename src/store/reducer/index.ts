import { combineReducers } from "redux";
import { bookReducer } from "./bookReducer";
import { booksReducer } from "./booksReducer";
import { searchReducer } from "./searchReducer";


export const rootReducer = combineReducers({
    books: booksReducer,
    book: bookReducer,
    search: searchReducer
})


export type RootState = ReturnType<typeof rootReducer>;