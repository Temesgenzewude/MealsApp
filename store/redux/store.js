import { configureStore } from "@reduxjs/toolkit";

import favoritesReducer from "./favorites";

export const store= configureStore({
    reducer: {
        favoriteMeals: favoritesReducer,
    },
    // // Add any middleware you want to use here
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})