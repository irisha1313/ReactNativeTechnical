import { MyButton } from "@/components/UI/button/IButton"
import { useActions } from "@/hooks/useActions"
import { useTypedSelector } from "@/hooks/useTypedSelector"
import { AntDesign } from "@expo/vector-icons"
import { Link } from "@react-navigation/native"
import React, { FC } from "react"
import { FlatList, Image, Text, View } from "react-native"

interface IFavorites {}
export const Favorites: FC<IFavorites> = ({}) => {
	const favorits = useTypedSelector(state => state.photo.favo)
	const { dislikePost, clearAllFavo } = useActions()
	return (
		<View>
			{favorits.length ? (
				<>
					<AntDesign
						name="delete"
						size={24}
						color="black"
						onPress={() => clearAllFavo()}
					/>
					<FlatList
						data={favorits}
						renderItem={({ item }) => (
							<View
								style={{
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
				</>
			) : (
				<View style={{ alignSelf: "center" }}>
					<Link to=".">
						<MyButton text="Go HOME" className="bg-blue-500" />
					</Link>
					<Text>No favorites yet</Text>
				</View>
			)}
		</View>
	)
}
