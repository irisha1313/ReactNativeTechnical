import { FC, useEffect, useState } from "react"
import { ScrollView, Text, TextInput, View } from "react-native"

import { PhotoItem } from "@/components/UI/photo/photoItem"
import { useGetPhotosQuery } from "@/store/slices/api/photo/photoApi"
import React from "react"

interface IHome {}
export const Home: FC<IHome> = ({}) => {
	const [searchValue, setSearchValue] = useState("")
	const [text, setText] = useState("")
	const { data, isLoading, isError } = useGetPhotosQuery(text)

	useEffect(() => {}, [text, data])
	return (
		<>
			{isLoading ? (
				<Text>Loading...</Text>
			) : isError ? (
				"Error"
			) : (
				<>
					<TextInput
						style={{ height: 40 }}
						placeholder="Search for photo..."
						onChangeText={event => setSearchValue(event)}
						defaultValue={searchValue}
					/>
					<ScrollView>
						{data
							.filter(obj => {
								return obj.title
									.toLowerCase()
									.includes(searchValue.toLowerCase())
							})
							.map(item => (
								<View key={item.id} className="m-auto">
									<PhotoItem item={item} />
								</View>
							))}
					</ScrollView>
				</>
			)}
		</>
	)
}
