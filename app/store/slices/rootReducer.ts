import { combineReducers } from "@reduxjs/toolkit"
import { api } from "./api/photo/photoApi"
import { photoSlice } from "./photo/photoSlice"

export const rootReducer = combineReducers({
	photo: photoSlice.reducer,
	[api.reducerPath]: api.reducer
})
