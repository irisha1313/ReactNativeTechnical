import React, { FC, useState } from "react"
import { TextInput, View } from "react-native"

interface ItextField {}
export const TextField: FC<ItextField> = ({}) => {
	const [text, setText] = useState("")
	return (
		<View style={{ padding: 10 }}>
			<TextInput
				style={{ height: 40 }}
				placeholder="Search for photo..."
				onChangeText={newText => setText(newText)}
				defaultValue={text}
			/>
		</View>
	)
}
