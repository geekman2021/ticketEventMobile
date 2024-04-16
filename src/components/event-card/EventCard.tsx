import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React, { FC } from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { TypeEvent } from "../../utils/TypeEvent";

const EventCard: FC<TypeEvent> = ({ date, nom, lieu, details }) => {
  const d = new Date(date);
  const jour = d.getDate();
  const mois = d.toLocaleString("default", { month: "long" });
  const heureMinute = d.toLocaleTimeString("Fr-fr", { hour: "2-digit", minute: "2-digit" });

  console.log(mois[0]);
  const imageLocal = "../../resources/images/samoela.jpg";

  return (
    <View style={styles.cardEvent}>
      <ImageBackground
        source={require(imageLocal)}
        imageStyle={{
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        }}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "flex-end",
        }}
        resizeMode="cover"
      >
        <View style={styles.dateStyle}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>{jour}</Text>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>{mois}</Text>
        </View>
      </ImageBackground>
      <View style={{ padding: 10 }}>
        <Text style={styles.nom}>{nom}</Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 50 }}>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="time-sharp" style={styles.icon} />
            <Text style={{ fontSize: 15 }}>{heureMinute}</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <FontAwesome name="map-marker" style={styles.icon} />
            <Text style={{ fontSize: 17 }}>{lieu}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default EventCard;
