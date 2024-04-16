import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import Billet from "../screens/Billet";
import Login from "../screens/Login";
import TabsNavigator from "./bottom- tab/TabsNavigator";
import FormEvent from "../screens/FormEvent";

const Stack = createNativeStackNavigator();

const isSignedIn = false;

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabsNavigator" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Billet" component={Billet} />
        <Stack.Screen name="FormEvent" component={FormEvent} options={{ headerShown: true, title: "New Event" }} />
        <Stack.Screen name="TabsNavigator" component={TabsNavigator}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
