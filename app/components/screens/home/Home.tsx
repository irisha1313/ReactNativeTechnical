import { FC, useEffect, useState } from "react"
import { FlatList, TextInput, View } from "react-native"

import { PhotoItem } from "@/components/UI/photo/photoItem"
import { useGetPhotosQuery } from "@/store/slices/api/photo/photoApi"
import React from "react"

interface IHome {}
export const Home: FC<IHome> = ({}) => {
	const [text, setText] = useState("")
	const { data, isLoading } = useGetPhotosQuery(text)

	useEffect(() => {}, [text, data])
	return (
		<View>
			<TextInput
				style={{ height: 40 }}
				placeholder="Search for photo..."
				onChangeText={newText => setText(newText.trim())}
				defaultValue={text}
			/>
			<FlatList
				data={data}
				renderItem={({ item }) => <PhotoItem item={item} />}
			/>
		</View>
	)
}
