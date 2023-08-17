import { createSlice, current } from "@reduxjs/toolkit";


export const { actions: feedbacksFilterActions, reducer: feedbacksFilterReducer } = createSlice({
    name: "feedbacks-filter",
    initialState: {
        category: 'all',
        sort: 'most-upvotes',
    },
    reducers: {
        setCategory: (state, {payload}) => {
            state.category = payload;
        },
        setSort: (state, {payload}) => {
            state.sort = payload;
        }
    }
})