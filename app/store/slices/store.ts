import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore
} from "redux-persist"

import AsyncStorage from "@react-native-async-storage/async-storage"
import { configureStore } from "@reduxjs/toolkit"
import { api } from "./api/photo/photoApi"
import { rootReducer } from "./rootReducer"

const persistConfig = {
	key: "root",
	storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	// middleware: getDefaultMiddleware =>
	// 	getDefaultMiddleware().concat(api.middleware)
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		}).concat(api.middleware)
})
export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
