import { View, Text, StyleSheet, Dimensions, SafeAreaView } from "react-native";
import React from "react";
import MenuCard from "../components/card/MenuCard";
import Icon from "@expo/vector-icons/FontAwesome";
import EventIcon from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
const Home = () => {
  const navigation = useNavigation();
  return (
    // <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      <MenuCard
        Logo={<Icon name="money" size={50} />}
        cardLabel="Billet"
        width={width / 2}
        height={height / 4}
        onPress={() => {
          navigation.navigate("Billet" as never);
        }}
      />
      <MenuCard Logo={<EventIcon name="event" size={50} />} cardLabel="Evenement" width={width / 2} height={height / 4} />
      <MenuCard Logo={<Icon name="eye" size={50} />} cardLabel="Process Action" width={width / 2} height={height / 4} />
      <MenuCard Logo={<Icon name="eye" size={50} />} cardLabel="Ticket" width={width / 2} height={height / 4} />
    </View>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default Home;
