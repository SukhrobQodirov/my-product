import { createSlice, current } from "@reduxjs/toolkit";


export const { actions: feedbacksActions, reducer: feedbacksReducer } = createSlice({
    name: "feedbacks",
    initialState: {
        loading: false,
        error: null,
        feedbacksList: null,
        feedbacksId: null,
    },
    reducers: {
        setLoading: (state) => {
            state.loading = true;
        },
        setFeedbacksList: (state, { payload }) => {
            state.loading = false;
            state.feedbacksList = payload;
        },
        setError: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        deleteFeedbacksItem: (state, { payload }) => {
            const { feedbacksList } = current(state);
            const deletingItemIndex = feedbacksList?.findIndex(feedback => {
                return feedback.id == payload;
            })

            state.feedbacksList = [
                ...feedbacksList.slice(0, deletingItemIndex),
                ...feedbacksList.slice(deletingItemIndex + 1),
            ]
        },
    }
})