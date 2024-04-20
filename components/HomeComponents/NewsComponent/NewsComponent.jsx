import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const NewsComponent = () => {
  const [activeTab, setActiveTab] = useState("all");

  const newsData = [
    {
      title: "Всего 8 дней скидки 8 процентов для любимых!",
      date: "08.03.2024",
      image: require("../../../assets/news.png"),
    },
    {
      title: "С праздником весны!",
      date: "09.03.2024",
      image: require("../../../assets/news.png"),
    },
    {
      title: "Старт продаж в элитном доме комплекса «Минск-Мир»",
      date: "10.03.2024",
      image: require("../../../assets/news.png"),
    },
  ];

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };
  return (
    <View style={styles.newsContainer}>
      <Text style={styles.newsTitle}>Новости и акции</Text>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === "all" && styles.activeTab]}
          onPress={() => handleTabPress("all")}
        >
          <Text style={styles.tabText}>Все</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === "news" && styles.activeTab]}
          onPress={() => handleTabPress("news")}
        >
          <Text style={styles.tabText}>Новости</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "promotions" && styles.activeTab,
          ]}
          onPress={() => handleTabPress("promotions")}
        >
          <Text style={styles.tabText}>Акции</Text>
        </TouchableOpacity>
      </View>

      {newsData.map((news, index) => (
        <View key={index} style={styles.newsCard}>
          <Image source={news.image} style={styles.newsImage} />
          <View style={styles.newsCardTextBlock}>
            <Text style={styles.newsCardText}>{news.title}</Text>
            <Text style={styles.newsCardDate}>{news.date}</Text>
          </View>
        </View>
      ))}

      <TouchableOpacity style={styles.readMoreButton}>
        <Text>Читать все</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  newsContainer: {
    margin: 16,
  },
  newsTitle: {
    fontSize: 22,
    color: "white",
    marginBottom: 30,
  },
  tabsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    backgroundColor: "#25262D",
    borderRadius: 10,
    paddingBottom: 8,
    paddingTop: 8,
    paddingLeft: 6,
    paddingRight: 6,
  },
  tabButton: {
    padding: 10,
    width: 94,
    marginRight: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  activeTab: {
    backgroundColor: "#105EDC",
  },
  tabText: {
    color: "white",
    fontSize: 15,
  },
  newsCard: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 28,
    gap: 8,
  },
  newsCardTextBlock: {
    flexDirection: "column",
    gap: 6,
    maxWidth: 237,
  },
  newsCardText: {
    color: "white",
    fontSize: 15,
  },
  newsCardDate: {
    color: "white",
    fontSize: 11,
  },
  newsImage: {
    width: 115,
    height: 64,
    marginBottom: 5,
  },
  readMoreButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    alignItems: "center",
  },
});
export default NewsComponent;
