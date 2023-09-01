import React, { FC } from "react"
import { Image, Text, View } from "react-native"

import { useActions } from "@/hooks/useActions"
import { useTypedSelector } from "@/hooks/useTypedSelector"
import { IPhoto } from "@/types/photo"
import { MyButton } from "../button/IButton"

interface IphotoItem {
	item: IPhoto
}
export const PhotoItem: FC<IphotoItem> = ({ item }) => {
	const { favo } = useTypedSelector(state => state.photo)
	const { setLikes, dislikePost } = useActions()

	const isExists = favo.some(p => p.id === item.id)

	return (
		<View
			style={{
				borderBlockColor: "#5555",
				borderWidth: 1,
				maxWidth: 300,
				width: "100%",
				borderRadius: 10,
				margin: 10,
				alignItems: "center"
			}}
		>
			<Text
				style={{
					maxWidth: 200,
					alignItems: "center",
					textAlign: "center"
				}}
			>
				{item.title}
			</Text>
			<Image
				source={{ uri: item.thumbnailUrl }}
				style={{ width: 200, height: 200, borderRadius: 10 }}
			/>
			<View
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					margin: 10
				}}
			>
				<MyButton
					icon={isExists ? "like1" : "like2"}
					onPress={() => setLikes(item)}
				/>
				<MyButton
					icon={isExists ? "dislike2" : "dislike1"}
					onPress={() => dislikePost({ id: item.id })}
				/>
			</View>
		</View>
	)
}
