import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
} from "react-native";
import Header from "../../components/header/Header";

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");

  const openModal = (filter) => {
    setSelectedFilter(filter);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setSelectedFilter("");
    setIsModalVisible(false);
  };

  const handleFilterChange = (text) => {
    // Обработка введенных данных (можете сохранить их в состоянии компонента или отправить на сервер)
  };
  const services = [
    {
      title: "Все сервисы",
      image: require("../../assets/cards-icon/category.png"),
    },
    { title: "Кварталы", image: require("../../assets/cards-icon/estate.png") },
    { title: "Кредит", image: require("../../assets/cards-icon/card.png") },
    {
      title: "Рассрочка",
      image: require("../../assets/cards-icon/wallet-minus.png"),
    },
    {
      title: "Новости \n и акции",
      image: require("../../assets/cards-icon/discount-shape.png"),
    },
    {
      title: "Час \n с Агентом",
      image: require("../../assets/cards-icon/user-tag.png"),
    },
    {
      title: "Кредитный калькулятор",
      image: require("../../assets/cards-icon/calculator.png"),
    },
  ];
  const filters = [
    "Количество комнат",
    "Цена (BYN)",
    "Площадь",
    "Цена за м²",
    "Год сдачи",
  ];
  const propertyData = [
    {
      image: require("../../assets/quarter.png"),
      price: "168 227 р.",
      square: "42.29 м²",
      floor: "10 этаж",
      countOfRooms: "Евро 2",
      quarter: "11 квартал",
    },
    {
      image: require("../../assets/quarter.png"),
      price: "168 227 р.",
      square: "42.29 м²",
      floor: "10 этаж",
      countOfRooms: "Евро 2",
      quarter: "11 квартал",
    },
    {
      image: require("../../assets/quarter.png"),
      price: "168 227 р.",
      square: "42.29 м²",
      floor: "10 этаж",
      countOfRooms: "Евро 2",
      quarter: "11 квартал",
    },
    {
      image: require("../../assets/quarter.png"),
      price: "168 227 р.",
      square: "42.29 м²",
      floor: "10 этаж",
      countOfRooms: "Евро 2",
      quarter: "11 квартал",
    },
  ];
  const handleServicePress = (serviceTitle) => {
    // Обработка навигации на соответствующий компонент по нажатию карточки
    console.log("Переход на компонент:", serviceTitle);
  };
  const [activeTab, setActiveTab] = useState("all");

  const newsData = [
    {
      title: "Всего 8 дней скидки 8 процентов для любимых!",
      date: "08.03.2024",
      image: require("../../assets/news.png"),
    },
    {
      title: "С праздником весны!",
      date: "09.03.2024",
      image: require("../../assets/news.png"),
    },
    {
      title: "Старт продаж в элитном доме комплекса «Минск-Мир»",
      date: "10.03.2024",
      image: require("../../assets/news.png"),
    },
  ];

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView style={styles.container}>
        <View style={styles.card}>
          <View>
            <Text style={styles.title}>Специальное предложение</Text>
            <Text style={styles.subtitle}>
              От 950 евро за м² до конца марта
            </Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require("../../assets/arrow-right.png")}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.cardsContainer}>
          <ScrollView horizontal={true}>
            {services.map((service, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.serviceCard,
                  index === 0 && styles.firstServiceCard,
                ]}
                onPress={() => handleServicePress(service.title)}
              >
                <Image source={service.image} style={styles.serviceImage} />
                <Text
                  style={[
                    styles.serviceTitle,
                    index === 0 && styles.firstServiceTitle,
                  ]}
                >
                  {service.title}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.containerInput}>
          {filters.map((filter, index) => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.filterCard,
                index === 0 && styles.firstFilterCard,
                index === 4 && styles.lastFilterCard,
              ]}
              onPress={() => openModal(filter)}
            >
              <Text style={styles.filterTitle}>{filter}</Text>
              <Image source={require("../../assets/filter-arrow-right.png")} />
            </TouchableOpacity>
          ))}
          <Modal visible={isModalVisible} transparent animationType="slide">
            <View style={styles.modalContainer}>
              <TextInput
                style={styles.input}
                placeholder={`Введите ${selectedFilter}`}
                onChangeText={handleFilterChange}
              />
              <TouchableOpacity style={styles.button} onPress={closeModal}>
                <Text>Отправить</Text>
              </TouchableOpacity>
            </View>
          </Modal>
          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.showButton}>
              <Text style={styles.buttonText}>Показать 20 300 квартир</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.recommendedContainer}>
          <Text style={styles.recommendedTitle}>Рекомендуемые</Text>

          <View style={styles.cardPropertyContainer}>
            <View style={styles.cardProperty}>
              <Text style={styles.cardPropertyTitle}>Избранное</Text>
              <View style={styles.cardImageProperty}>
                <Image source={require("../../assets/heart.png")} />
              </View>
            </View>
            <View style={styles.cardProperty}>
              <Text style={styles.cardPropertyTitle}>Сравнение объявлений</Text>
              <View style={styles.cardImageProperty}>
                <Image source={require("../../assets/sravnenie.png")} />
              </View>
            </View>
          </View>
          <View style={styles.cardEstateContainer}>
            {propertyData.map((property, index) => (
              <View key={index} style={styles.cardEstate}>
                <Image source={property.image} style={styles.cardImage} />
                <Text style={styles.cardInfoCost}>{property.price}</Text>
                <View style={styles.rowCardInfo}>
                  <Text style={styles.cardInfoText}>{property.square}</Text>
                  <Text style={styles.cardInfoText}>{property.floor}</Text>
                  <Text style={styles.cardInfoText}>
                    {property.countOfRooms}
                  </Text>
                </View>
                <Text style={styles.cardInfoText}>{property.quarter}</Text>
              </View>
            ))}
          </View>
          <TouchableOpacity style={styles.showMoreButton}>
            <Text style={styles.showMoreButtonText}>Показать еще</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.newsContainer}>
          <Text style={styles.newsTitle}>Новости и акции</Text>
          <View style={styles.tabsContainer}>
            <TouchableOpacity
              style={[
                styles.tabButton,
                activeTab === "all" && styles.activeTab,
              ]}
              onPress={() => handleTabPress("all")}
            >
              <Text>Все</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tabButton,
                activeTab === "news" && styles.activeTab,
              ]}
              onPress={() => handleTabPress("news")}
            >
              <Text>Новости</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tabButton,
                activeTab === "promotions" && styles.activeTab,
              ]}
              onPress={() => handleTabPress("promotions")}
            >
              <Text>Акции</Text>
            </TouchableOpacity>
          </View>

          {newsData.map((news, index) => (
            <View key={index} style={styles.newsCard}>
              <Image source={news.image} style={styles.newsImage} />
              <Text>{news.title}</Text>
              <Text>{news.date}</Text>
            </View>
          ))}

          <TouchableOpacity style={styles.readMoreButton}>
            <Text>Читать все</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1D1F25",
    flexGrow: 1,
  },
  card: {
    backgroundColor: "#105EDC",
    borderRadius: 12,
    padding: 16,
    margin: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  title: {
    fontSize: 17,
    color: "white",
    fontWeight: "",
    fontFamily: "SF Pro Display",
  },
  subtitle: {
    fontSize: 14,
    color: "#888",
    fontFamily: "SF Pro Text",
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "",
  },
  image: {
    width: 12,
    height: 12,
  },
  cardsContainer: {
    marginTop: 40,
    display: "flex",
    flexDirection: "row",
  },
  serviceCard: {
    width: 80,
    paddingTop: 5,
    paddingBottom: 10,
    paddingLeft: 6,
    paddingRight: 6,
    margin: 5,
    gap: 20,
    backgroundColor: "#2D2F36",
    borderRadius: 10,
  },

  firstServiceCard: {
    backgroundColor: "white", // Цвет фона для первой карточки
  },
  firstServiceTitle: {
    color: "#25262D",
  },
  serviceImage: {
    width: 48,
    height: 48,
  },
  serviceTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 11,
    textAlign: "left",
    color: "white",
  },
  containerInput: {
    marginTop: 40,
    flex: 1,
    justifyContent: "start",
    alignItems: "start",
  },
  filterCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    color: "#FFF",
    backgroundColor: "#2D2F36",
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  firstFilterCard: {
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  lastFilterCard: {
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderBottomWidth: 0,
  },
  filterTitle: {
    color: "#EBEBF599",
    fontSize: 15,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  input: {
    width: "80%",
    height: 40,
    margin: 10,

    padding: 10,
    backgroundColor: "#FFF",
    borderRadius: 5,
  },
  containerButton: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  showButton: {
    backgroundColor: "#226DFF",
    width: 361,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 17,
  },
  recommendedContainer: {
    margin: 16,
  },
  cardPropertyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
    gap: 8,
  },
  cardProperty: {
    width: 180,
    height: 118,
    backgroundColor: "#2D2F36",
    borderRadius: 10,
    padding: 15,
    justifyContent: "space-between",
  },
  cardImageProperty: {
    alignItems: "flex-end",
  },
  cardPropertyTitle: {
    fontSize: 17,
    color: "white",
  },
  cardImage: {
    width: "100%",
    height: 96,
    marginBottom: 5,
  },
  cardEstateContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 18,
  },
  cardEstate: {
    width: 180,
    marginBottom: 16,
  },
  showMoreButton: {
    marginTop: 30,
    borderWidth: 1,
    borderColor: "#007AFF",
    padding: 15,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  showMoreButtonText: {
    color: "#FFF",
    fontSize: 17,
  },
  recommendedTitle: {
    fontSize: 22,
    marginBottom: 30,
    color: "#FFF",
  },
  rowCardInfo: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  cardInfoCost: {
    fontSize: 17,
    color: "white",
  },
  cardInfoText: {
    fontSize: 11,
    color: "#B8B9BB",
  },

  newsContainer: {
    margin: 16,
  },
  newsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  tabsContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  tabButton: {
    padding: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#000",
  },
  activeTab: {
    backgroundColor: "lightblue",
  },
  newsCard: {
    marginBottom: 16,
  },
  newsImage: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  readMoreButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    alignItems: "center",
  },
});
export default Home;
