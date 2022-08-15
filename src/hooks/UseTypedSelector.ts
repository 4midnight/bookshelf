import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducer";


export const UseTypedSelector: TypedUseSelectorHook<RootState> = useSelector;