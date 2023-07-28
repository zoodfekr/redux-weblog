import { configureStore } from "@reduxjs/toolkit";
import theme from "./slices/themeSlice";
import sidebar from "./slices/sidebarSlice";
import blog from "./slices/blogsSlice";
import wr_gr from "./slices/wr_gr";





export default configureStore({
    reducer: {
        theme,
        sidebar,
        blog,
        wr_gr
    },
});