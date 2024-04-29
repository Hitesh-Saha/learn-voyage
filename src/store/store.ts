import { configureStore } from "@reduxjs/toolkit";
import { useDispatch as useAppDispatch } from "react-redux";
import rootReducer from "./slices";

const store = configureStore({
    reducer: rootReducer,
});

export const useDispatch = (): typeof store.dispatch => useAppDispatch<typeof store.dispatch>()
export type RootState = ReturnType<typeof store.getState>
export default store;