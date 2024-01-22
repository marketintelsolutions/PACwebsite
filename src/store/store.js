import { configureStore } from "@reduxjs/toolkit";
import pdfSlice from "../features/pdfSlice";

export const store = configureStore({
    reducer: {
        pdf: pdfSlice,
    },
});
