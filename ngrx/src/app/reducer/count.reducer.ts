import { createAction, createReducer, on } from "@ngrx/store";

export const initialState: number = 0;


export const increment = createAction(
    "[COUNT] increment"
)

export const countReducer = createReducer(
    initialState,
    on(increment, (state)=> state + 1)
)

