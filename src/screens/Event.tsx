import { View, Text, StyleSheet, Image, Alert, ImageBackground, FlatList, Modal, TextInput } from "react-native";
import React, { useState } from "react";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import ButtonCustomize from "../components/button";
import EventCard from "../components/event-card/EventCard";
import { TypeEvent } from "../utils/TypeEvent";
import { dataEvent } from "../resources/data/event";
import { useNavigation } from "@react-navigation/native";

const Event = () => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState<boolean>(false);
  const goToFormEvent = () => {
    navigation.navigate("FormEvent" as never);
  };

  const renderItem = ({ item }: { item: TypeEvent }) => {
    return (
      <EventCard
        nom="Concert Lolo sy ny tariny"
        date="2023-07-14T16:15:51"
        lieu="AnTsahamanitra"
        details="Final du concours Meilleur patissier"
      />
    );
  };
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Events</Text>
        <ButtonCustomize
          btnText="+ Ajouter"
          backGround="rgba(29, 38, 56, 0.8)"
          onPress={goToFormEvent}
          customStyle={{
            width: 75,
            height: 25,
            borderRadius: 25,
            zIndex: 1,
          }}
        />
      </View>
      <FlatList data={dataEvent} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    marginTop: 10,
    marginHorizontal: 25,
  },
  dateStyle: {
    marginRight: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 5,
    borderRadius: 5,
  },
  cardEvent: {
    flexDirection: "column",
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 20,
    height: 150,
  },
  nom: {
    fontSize: 20,
    fontWeight: "bold",
  },
  icon: {
    fontSize: 20,
    color: "#e91e63",
  },
});

export default Event;
