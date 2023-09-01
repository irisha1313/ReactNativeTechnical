import { combineReducers, configureStore } from "@reduxjs/toolkit"

import { api } from "./api/photo/photoApi"
import { photoSlice } from "./photo/photoSlice"

const rootReducer = combineReducers({
	photo: photoSlice.reducer,
	[api.reducerPath]: api.reducer
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
