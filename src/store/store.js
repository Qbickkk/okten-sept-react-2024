import {configureStore} from "@reduxjs/toolkit";

import {episodesReducer} from "./slices/episodeSlice";
import {charactersReducer} from "./slices/charactersSlice";

const store = configureStore({
    reducer: {
        episodes: episodesReducer,
        characters: charactersReducer
    }
});

export {
    store
}