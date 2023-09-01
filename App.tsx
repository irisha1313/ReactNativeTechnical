import { Navigation } from "@/components/navigation/Navigation"
import { store } from "@/store/slices/store"
import React from "react"
import { Provider } from "react-redux"

export default function App() {
	return (
		<Provider store={store}>
			<Navigation />
		</Provider>
	)
}
