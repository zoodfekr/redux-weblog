import { configureStore } from "@reduxjs/toolkit";
import theme from "./slices/themeSlice";
import sidebar from "./slices/sidebarSlice";
import blog from "./slices/blogsSlice";




export default configureStore({
    reducer: {
        theme,
        sidebar,
        blog, 
    },
});