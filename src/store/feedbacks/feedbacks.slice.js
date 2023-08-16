import { createSlice, current } from "@reduxjs/toolkit";


export const { actions: feedbacksActions, reducer: feedbacksReducer } = createSlice({
    name: "feedbacks",
    initialState: {
        loading: false,
        error: null,
        feedbacksList: null,
        currentCategory: "Features",
        currentStatus: "Planned",
    },
    reducers: {
        setLoading: (state) => {
            state.loading = true;
        },
        setFeedbacksList: (state, action) => {
            state.loading = false;
            state.feedbacksList = action.payload;
        },
        setError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        deleteFeedbacksItem: (state, action) => {
            const { feedbacksList } = current(state);
            const deletingItemIndex = feedbacksList?.findIndex(feedback => {
                return feedback.id == action.payload;
            })

            state.feedbacksList = [
                ...feedbacksList.slice(0, deletingItemIndex),
                ...feedbacksList.slice(deletingItemIndex + 1),
            ]
        },
        setCategory: (state, {payload}) => {
            state.currentCategory = payload;
        },
        setStatus: (state, {payload}) => {
            state.currentStatus = payload;
        },
        editFeedback: (state, {payload}) => {
            state.loading = false;
            const {feedbacksList} = state;
            const editedFeedbackId = feedbacksList.findIndex(feedback => {
                return feedback.id === payload.id;
            })

            feedbacksList.splice(editedFeedbackId, 1, payload);
        }
    }
})