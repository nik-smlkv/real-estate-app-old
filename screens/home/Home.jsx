import React, { useEffect, useState } from "react";
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
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import Header from "../../components/header/Header";
import FormComponent from "../../components/HomeComponents/FormComponent/FormComponent";
import RecomendedComponent from "../../components/HomeComponents/RecommendedComponent/RecomendedComponent";
import NewsComponent from "../../components/HomeComponents/NewsComponent/NewsComponent";
import ServicesComponent from "../../components/services/ServicesComponent";
import Navigator from "../../components/Navigator/Navigator";
import Footer from "../../components/Footer/Footer";
import Installment from "../Installment/Installment";
import Services from "../Services/Services";
import Quarters from "../Quarters/Quarters";
import Credits from "../Credits/Credits";
import News from "../News/News";
import Chat from "../Chat/Chat";
import Calculator from "../Calculator/Calculator";
import PopupModal from "../../components/PopupModal/PopupModal";

const Home = () => {
  const services = [
    {
      title: "Все сервисы",
      image: require("../../assets/cards-icon/category.png"),
      component: Services,
    },
    {
      title: "Кварталы",
      image: require("../../assets/cards-icon/estate.png"),
      component: Quarters,
    },
    {
      title: "Кредит",
      image: require("../../assets/cards-icon/card.png"),
      component: Credits,
    },
    {
      title: "Рассрочка",
      image: require("../../assets/cards-icon/wallet-minus.png"),
      component: Installment,
    },
    {
      title: "Новости \n и акции",
      image: require("../../assets/cards-icon/discount-shape.png"),
      component: News,
    },
    {
      title: "Чат \n с Агентом",
      image: require("../../assets/cards-icon/user-tag.png"),
      component: Chat,
    },
    {
      title: "Кредитный калькулятор",
      image: require("../../assets/cards-icon/calculator.png"),
      component: Calculator,
    },
  ];
  const [showModal, setShowModal] = useState(false);
  const timer2 = setTimeout(() => {
    setShowModal(true);
  }, 6000);
  useEffect(() => {
    return () => {
      clearTimeout(timer2);
    };
  }, []);
  const closeModal = () => {
    setShowModal(false);
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
        <View style={{ flex: 1 }}>
          <ScrollView style={styles.servicescontainer}>
            <ServicesComponent services={services} />
          </ScrollView>
        </View>
        <FormComponent />
        <RecomendedComponent />
        <NewsComponent />
      </ScrollView>
      <Modal
        visible={showModal}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <PopupModal onClose={closeModal} />
        </View>
      </Modal>
      <Footer activePage="Главная" />
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
});
export default Home;
