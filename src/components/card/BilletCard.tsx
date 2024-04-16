import { View, Text, StyleSheet, Image, ImageBackground, Alert } from "react-native";
import React, { useMemo, useRef } from "react";
import Icon from "@expo/vector-icons/Entypo";
import BottomSheet from "@gorhom/bottom-sheet";

interface Props {
  id?: number;
  libelle: string | undefined;
  prix: number | undefined;
  evenement_id?: number;
  onPress?: () => void;
}

const BilletCard: React.FC<Props> = ({ id, libelle, prix, evenement_id, onPress }) => {
  const showMenuAction = () => {};
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Image source={require("../../assets/images/billet.jpg")} style={styles.img} resizeMode="cover" />
        <Icon name="dots-three-vertical" onPress={onPress} />
      </View>
      <View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={styles.baseText}>Libelle: </Text>
          <Text>{libelle}</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={styles.baseText}>Prix: </Text>
          <Text>{prix.toLocaleString()} Ar</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    marginHorizontal: 10,
    marginTop: 8,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  img: {
    // flex: 1,
    width: 120,
    height: 100,
    // borderRadius: 50,
  },
  baseText: {
    fontWeight: "bold",
  },
  btn: {
    width: 50,
  },
});

export default BilletCard;
