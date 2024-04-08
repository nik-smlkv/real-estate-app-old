import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../../screens/home/Home";
import Search from "../../screens/Search/Search";
import Favorites from "../../screens/Favorites/Favorites";
import Chat from "../../screens/Chat/Chat";
import Profile from "../../screens/Profile/Profile";

const Tab = createBottomTabNavigator();


const routeIcons = {
  Главная: require("../../assets/icons/home.png"),
  Поиск: require("../../assets/icons/search.png"),
  Избранное: require("../../assets/icons/favorites.png"),
  Чат: require("../../assets/icons/message.png"),
  Кабинет: require("../../assets/icons/profile.png"),
};

const FooterMenu = () => {
  return (
      <Tab.Navigator 
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
          tabBarStyle: { display: "flex", backgroundColor: '#1D1F25', padding: 5 },
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
        <Tab.Screen name="Главная" component={Home} />
        <Tab.Screen name="Поиск" component={Search} />
        <Tab.Screen name="Избранное" component={Favorites} />
        <Tab.Screen name="Чат" component={Chat} />
        <Tab.Screen name="Кабинет" component={Profile} />
      </Tab.Navigator>

  );
};

export default FooterMenu;