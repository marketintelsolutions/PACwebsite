import { createSlice } from "@reduxjs/toolkit";

const academies = JSON.parse(localStorage.getItem('academies'))

const initialState = {
    pdfs: academies
};

const pdfSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setPdfs: (state, action) => {
            state.pdfs = action.payload;
        }
    },
});

export const {
    setPdfs
} = pdfSlice.actions;
export default pdfSlice.reducer;
