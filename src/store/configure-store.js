import { configureStore } from "@reduxjs/toolkit";
import { feedbacksReducer } from "./feedbacks/feedbacks.slice";
import { feedbacksFilterReducer } from "./feedbacks-filter/feedbacks-filter.slice";

export const store = configureStore({
    reducer: {
        feedbacks: feedbacksReducer,
        filterAndSort: feedbacksFilterReducer,
    }
})