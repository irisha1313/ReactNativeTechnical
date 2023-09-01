import React, { FC } from "react"

import { useTypedSelector } from "@/hooks/useTypedSelector"
import { EScreens } from "@/types/nanvigation"
import { MaterialIcons } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import { Favorites } from "../screens/favorites/Favorites"
import { Home } from "../screens/home/Home"

interface INavigation {}

export const Navigation: FC<INavigation> = ({}) => {
	const Tab = createBottomTabNavigator()
	const favoCount = useTypedSelector(state => state.photo.favo)
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen
					name={EScreens.HOME}
					component={Home}
					options={{
						tabBarIcon: ({ color }) => (
							<MaterialIcons name="insert-photo" size={24} color="black" />
						)
					}}
				/>
				<Tab.Screen
					name={EScreens.FAVORITES}
					component={Favorites}
					options={{
						tabBarBadge: `${favoCount.length}`,
						tabBarIcon: ({ color }) => (
							<MaterialIcons name="favorite" size={24} color="black" />
						)
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	)
}
