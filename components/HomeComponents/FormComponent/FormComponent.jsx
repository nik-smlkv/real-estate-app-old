import React, { useState } from "react";
import { Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const FormComponent = () => {
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
  const filters = [
    "Количество комнат",
    "Цена (BYN)",
    "Площадь",
    "Цена за м²",
    "Год сдачи",
  ];
  return (
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
          <Image source={require("../../../assets/filter-arrow-right.png")} />
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
  );
};

const styles = StyleSheet.create({
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
});

export default FormComponent;
