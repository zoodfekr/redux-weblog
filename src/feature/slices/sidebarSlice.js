import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: {
        show: false
    },
    reducers: {
        toggleSidebar: (state) => {
            state.show == false ?
                state.show = true :
                state.show = false
        },
    }
});
 
export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;