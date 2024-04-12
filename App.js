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
import { Image, Text, View } from "react-native";
import Header from "./components/header/Header";
import Home from "./screens/Home/Home";
import Navigator from "./components/Navigator/Navigator";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
{/*         <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              const icon = routeIcons[route.name];
              return (
                <Image
                  source={icon}
                  style={{
                    tintColor: focused ? "#105EDC" : "#fff",
                    width: size,
                    height: size,
                  }}
                />
              );
            },
            tabBarShowLabel: true,
            tabBarStyle: {
              display: "flex",
              backgroundColor: "#1D1F25",
              padding: 5,
            },
            tabBarLabel: ({ focused }) => {
              const labelStyles = {
                color: focused ? "#105EDC" : "#fff",
                fontWeight: focused ? "400" : "normal",
                fontSize: 11,
              };

              const tabLabels = {
                Главная: "Главная",
                Поиск: "Поиск",
                Избранное: "Избранное",
                Чат: "Чат",
                Кабинет: "Кабинет",
              };

              const label = tabLabels[route.name];
              return <Text style={labelStyles}>{label}</Text>;
            },
          })}
        >
          <Tab.Screen
            name="Главная"
            component={Home}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Поиск"
            component={Search}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Избранное"
            component={Favorites}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Чат"
            component={Chat}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Кабинет"
            component={Profile}
            options={{ headerShown: false }}
          />
        </Tab.Navigator> */}
		<Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }} />
          <Stack.Screen name="Credits" component={Credits} options={{ headerShown: false }} />
          <Stack.Screen name="Installment" component={Installment} options={{ headerShown: false }} />
          <Stack.Screen name="Quarters" component={Quarters} options={{ headerShown: false }} />
          <Stack.Screen name="Services" component={Services} options={{ headerShown: false }} />
          <Stack.Screen name="Calculator" component={Calculator} options={{ headerShown: false }} />
          <Stack.Screen name="News" component={News} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
export function homeNavigation() {
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate("Service");
  };
  return <Navigator />;
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

const routeIcons = {
  Главная: require("./assets/icons/home.png"),
  Поиск: require("./assets/icons/search.png"),
  Избранное: require("./assets/icons/favorites.png"),
  Чат: require("./assets/icons/message.png"),
  Кабинет: require("./assets/icons/profile.png"),
};
