import { configureStore } from "@reduxjs/toolkit";
import { feedbacksReducer } from "./feedbacks/feedbacks.slice";

export const store = configureStore({
    reducer: {
        feedbacks: feedbacksReducer,
    }
})