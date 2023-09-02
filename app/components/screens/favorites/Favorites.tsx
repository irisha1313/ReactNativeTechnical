import React, { FC } from "react"
import { FlatList, Image, Text, View } from "react-native"

import { MyButton } from "@/components/UI/button/IButton"
import { useActions } from "@/hooks/useActions"
import { useTypedSelector } from "@/hooks/useTypedSelector"
import { AntDesign } from "@expo/vector-icons"
import { Link } from "@react-navigation/native"

interface IFavorites {}
export const Favorites: FC<IFavorites> = ({}) => {
	const favorits = useTypedSelector(state => state.photo.favo)
	const { dislikePost, clearAllfavo } = useActions()
	return (
		<View>
			{favorits.length ? (
				<View className="items-center ">
					<>
						<AntDesign
							name="delete"
							size={24}
							color="black"
							onPress={() => clearAllfavo()}
						/>
						<Text>Remove all </Text>
					</>
					<FlatList
						data={favorits}
						renderItem={({ item }) => (
							<View
								style={{
									borderWidth: 1,
									display: "flex",
									flexDirection: "column",
									alignItems: "center"
								}}
							>
								<Text style={{ margin: 10 }}> {item.title}</Text>
								<Image
									source={{ uri: item.url }}
									style={{ width: 200, height: 200, borderRadius: 10 }}
								/>
								<MyButton
									onPress={() => dislikePost({ id: item.id })}
									icon={"delete"}
								/>
							</View>
						)}
					/>
				</View>
			) : (
				<View className="items-center">
					<Text className="text-xl">No favorites yet</Text>
					<Link
						to="/Home"
						style={{
							backgroundColor: "rgb(100 116 139)",
							borderWidth: 1,
							padding: 10
						}}
					>
						Go home
					</Link>
				</View>
			)}
		</View>
	)
}
