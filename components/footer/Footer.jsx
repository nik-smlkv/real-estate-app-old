import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const HomeScreen = () => <Text>Главная</Text>;
const SearchScreen = () => <Text>Поиск</Text>;
const FavoritesScreen = () => <Text>Избранное</Text>;
const ChatScreen = () => <Text>Чат</Text>;
const ProfileScreen = () => <Text>Кабинет</Text>;

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
                tintColor: focused ? "blue" : "gray",
                width: size,
                height: size,
              }}
            />
          );
        },
        tabBarShowLabel: true,
        tabBarStyle: { display: "flex" },
        tabBarLabel: ({ focused }) => {
          const labelStyles = {
            color: focused ? "blue" : "gray",
            fontWeight: focused ? "400" : "normal",
            fontSize: 12,
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
      <Tab.Screen name="Главная" component={HomeScreen} />
      <Tab.Screen name="Поиск" component={SearchScreen} />
      <Tab.Screen name="Избранное" component={FavoritesScreen} />
      <Tab.Screen name="Чат" component={ChatScreen} />
      <Tab.Screen name="Кабинет" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default FooterMenu;
