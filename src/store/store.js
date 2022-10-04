import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth/authSlice";
import { filter_slice } from "./slices/filter/filter_slice";
import { publications_Slice } from "./slices/publications/publications_Slice";
import { view_publication } from "./slices/view_publication/view_publication";



export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        publications: publications_Slice.reducer,
        view_publication: view_publication.reducer,
        filter: filter_slice.reducer
    },
})