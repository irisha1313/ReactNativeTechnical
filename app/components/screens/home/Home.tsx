import { FC, useEffect } from "react"
import { ScrollView, Text, TextInput, View } from "react-native"

import { PhotoItem } from "@/components/UI/photo/photoItem"
import { useActions } from "@/hooks/useActions"
import { useTypedSelector } from "@/hooks/useTypedSelector"
import { useGetPhotosQuery } from "@/store/slices/api/photo/photoApi"
import React from "react"

interface IHome {}
export const Home: FC<IHome> = ({}) => {
	const { setSearchValue } = useActions()
	const searchValue = useTypedSelector(state => state.photo.searchValue)
	const { data, isLoading, isError } = useGetPhotosQuery("")

	useEffect(() => {}, [searchValue, data])
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
