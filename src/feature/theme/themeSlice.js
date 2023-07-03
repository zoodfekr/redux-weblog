import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        mode: false
    },
    reducers: {
        toggleTheme: (state) => {
            state.mode == false ?
                state.mode = true :
                state.mode = false
        }
    }
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;