import { FC, PropsWithChildren } from "react"
import { Pressable, Text, View } from "react-native"

import { IButton } from "@/types/button"
import { AntDesign } from "@expo/vector-icons"
import clsx from "clsx"
import React from "react"

export const MyButton: FC<PropsWithChildren<IButton>> = ({
	className,
	icon,
	children,
	text,
	...rest
}) => {
	return (
		<Pressable className={clsx("self-center mt-3.5", className)} {...rest}>
			<View
				style={{
					width: 100,
					justifyContent: "space-between",
					alignContent: "center",
					alignItems: "center"
				}}
			>
				<AntDesign name={icon} size={24} color="black" />
				<Text> {text}</Text>
			</View>
			<Text
				className={clsx("text-white text-center font-medium text-lg", {
					"ml-2": !!icon
				})}
			>
				{children}
			</Text>
		</Pressable>
	)
}
