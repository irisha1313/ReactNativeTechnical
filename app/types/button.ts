import { PressableProps } from "react-native"
import { TypeAntDesignIconNames } from "./icons"

export interface IButton extends PressableProps {
	className?: string
	text?: string
	icon?: TypeAntDesignIconNames
}
