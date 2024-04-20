import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoadingScreen from "./components/loadingScreen/LoadingScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "./screens/Search/Search";
import Favorites from "./screens/Favorites/Favorites";
import Calculator from './screens/Calculator/Calculator';
import Chat from './screens/Chat/Chat';
import Credits from './screens/Credits/Credits';
import Installment from './screens/Installment/Installment';
import Profile from './screens/Profile/Profile';
import Quarters from './screens/Quarters/Quarters';
import Services from './screens/Services/Services';
import News from './screens/News/News';
import { Image, Modal, Text, View } from "react-native";
import Header from "./components/header/Header";
import Home from "./screens/Home/Home";
import Login from "./screens/Login/Login";
import Register from "./screens/Register/Register";
import Navigator from "./components/Navigator/Navigator";
import PopupModal from './components/PopupModal/PopupModal'
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
export default function App() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer1 = setTimeout(() => {
			setIsLoading(false);
		}, 3000);



		return () => {
			clearTimeout(timer1);
			clearTimeout(timer2);
		};
	}, []);

	if (isLoading) {
		return <LoadingScreen />;
	}

	return (
		<View style={{ flex: 1 }}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
					<Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }} />
					<Stack.Screen name="Credits" component={Credits} options={{ headerShown: false }} />
					<Stack.Screen name="Installment" component={Installment} options={{ headerShown: false }} />
					<Stack.Screen name="Quarters" component={Quarters} options={{ headerShown: false }} />
					<Stack.Screen name="Services" component={Services} options={{ headerShown: false }} />
					<Stack.Screen name="Calculator" component={Calculator} options={{ headerShown: false }} />
					<Stack.Screen name="News" component={News} options={{ headerShown: false }} />
					<Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
					<Stack.Screen name="Favorites" component={Favorites} options={{ headerShown: false }} />
					<Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
					<Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
					<Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
				</Stack.Navigator>
			</NavigationContainer>


		</View>
	);
}
const screenOptions = {
	headerStyle: {
		backgroundColor: "#3498db",
	},
	headerTintColor: "#fff",
	headerTitleStyle: {
		fontWeight: "bold",
		fontSize: "10px",
	},
};

