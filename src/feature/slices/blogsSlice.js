import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialdata = [
    {
        id: nanoid(),
        date: new Date().toISOString(),
        title: 'مضوع پست شماره یک',
        text: 'متن تست برای اسلایس',
        group: 'علمی',
    }, {
        id: nanoid(),
        date: new Date().toISOString(),
        title: 'موضوع پست دوم',
        text: '2222متن تست برای اسلایس',
        group: 'فناوری',
    }
];



export const blogSlice = createSlice({
    name: "blogs",
    initialState: initialdata,
    reducers: {}
});

// export const { blogs } = blogSlice.actions;
export default blogSlice.reducer;


