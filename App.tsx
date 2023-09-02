import { Navigation } from "@/components/navigation/Navigation"
import { persistor, store } from "@/store/slices/store"
import React from "react"
import { Text } from "react-native"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

export default function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
				<Navigation />
			</PersistGate>
		</Provider>
	)
}
