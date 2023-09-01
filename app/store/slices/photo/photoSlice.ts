import { IPhoto, PhotoSliceState } from "@/types/photo"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState: PhotoSliceState = {
	item: [],
	favo: []
}

export const photoSlice = createSlice({
	name: "photo",
	initialState,
	reducers: {
		setLikes(state, action: PayloadAction<IPhoto>) {
			const isExist = state.favo.some(fav => fav.id === action.payload.id)
			if (isExist) {
				return
			} else {
				state.favo.push(action.payload)
			}
		},
		dislikePost: (state, action: PayloadAction<{ id: number }>) => {
			const isExist = state.favo.some(fav => fav.id === action.payload.id)
			state.favo = state.favo.filter(item => item.id !== action.payload.id)
		},

		clearAllFavo: state => {
			state.favo = []
		}
	}
})
export const { actions, reducer } = photoSlice
