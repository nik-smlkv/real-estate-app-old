import React, { useState } from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  View,
  StyleSheet,
} from 'react-native';
import Home from '../../screens/Home/Home';
import Search from '../../screens/Search/Search';
import Favorites from '../../screens/Favorites/Favorites';
import Chat from '../../screens/Chat/Chat';
import Profile from '../../screens/Profile/Profile';
import { useNavigation } from '@react-navigation/native';

const Footer = ({ activePage }) => {
  const navigation = useNavigation();
  const [activeItem, setActiveItem] = useState(activePage); // Устанавливаем активный элемент по умолчанию

  const data = [
    { name: 'Главная', component: Home },
    { name: 'Поиск', component: Search },
    { name: 'Избранное', component: Favorites },
    { name: 'Чат', component: Chat },
    { name: 'Кабинет', component: Profile },
  ];
  const routeIcons = {
    Главная: require('../../assets/icons/home.png'),
    Поиск: require('../../assets/icons/search.png'),
    Избранное: require('../../assets/icons/favorites.png'),
    Чат: require('../../assets/icons/message.png'),
    Кабинет: require('../../assets/icons/profile.png'),
  };

  return (
    <View
      style={{
        backgroundColor: '#1D1F25',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.cardsContainer}
            onPress={() => {
              setActiveItem(item.name); // Устанавливаем активный элемент при нажатии
              navigation.navigate(item.component);
            }}
          >
            <View
              style={[
                styles.card,
                index !== 0 && { marginLeft: 37 },
              ]}
            >
              <Image
                source={routeIcons[item.name]}
                style={{
                  tintColor: '#fff',
                  width: 30,
                  height: 30,
                  marginRight: 5,
                }}
              />
              <Text
                style={{
                  color: activeItem === item.name ? '#105EDC' : '#fff',
                  fontSize: 11,
                }}
              >
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  marginNone: {
    marginRight: 0,
  },
});

export default Footer;