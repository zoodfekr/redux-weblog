import { createSlice } from "@reduxjs/toolkit";

export const WriterSlice = createSlice({
    name: "wr_gr",
    initialState: {
        writers: [
            { id: "1", writer: "رامین" },
            { id: "2", writer: "امیر" },
            { id: "3", writer: "احمد" },
            { id: "4", writer: "محمد" },
            { id: "5", writer: "نگار" },
            { id: "6", writer: "پرستو" },

        ],
        groups: [
            { id: "10", group: "علمی" },
            { id: "20", group: "فرهنگی" },
            { id: "30", group: "فناوری" },
            { id: "40", group: "پزشکی" },
            { id: "50", group: "مذهبی" },
            { id: "60", group: "اجتماعی" },
        ]
    },
    reducers: {}

});

export default WriterSlice.reducer;