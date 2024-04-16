import React from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, MaterialIcons, FontAwesome, AntDesign, FontAwesome5, Entypo } from "@expo/vector-icons";
import Home from "../../screens/Home";
import Login from "../../screens/Login";
import Event from "../../screens/Event";
import Transaction from "../../screens/Transaction";
import ProcessAction from "../../screens/ProcessAction";
import Billet from "../../screens/Billet";
import { AppColor } from "../../utils/constant";

const Tabs = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.search}>
          <FontAwesome5 name="search" />
          <TextInput placeholder="Rechercher un evenement ..." />
        </View>
        <Entypo name="light-up" size={25} />
        <FontAwesome5 name="user-circle" size={25} />
      </View>
      <Tabs.Navigator screenOptions={{ tabBarActiveTintColor: "#e91e63", headerShown: false }}>
        <Tabs.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "dashboard",
            tabBarIcon: ({ color, size }) => <AntDesign name="dashboard" color={color} size={size} />,
          }}
        />
        <Tabs.Screen
          name="Event"
          component={Event}
          options={{
            tabBarLabel: "Event",
            tabBarIcon: ({ color, size }) => <MaterialIcons name="event" size={size} color={color} />,
          }}
        />
        <Tabs.Screen
          name="Billet"
          component={Billet}
          options={{
            tabBarLabel: "Billet",
            tabBarIcon: ({ color, size }) => <FontAwesome name="money" size={size} color={color} />,
          }}
        />
        <Tabs.Screen
          name="Transaction"
          component={Transaction}
          options={{
            tabBarLabel: "Transaction",
            tabBarIcon: ({ color, size }) => <FontAwesome name="exchange" size={size} color={color} />,
          }}
        />
      </Tabs.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 25,
    backgroundColor: "#f9fafb",
  },
  search: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    paddingVertical: 10,
    paddingLeft: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: AppColor.lightGray,
    borderRadius: 15,
  },
});

export default TabsNavigator;
