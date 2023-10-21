import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./phonebookSlice";

export const store = configureStore({
        reducer: {
            phonebook: usersReducer},
    }
);