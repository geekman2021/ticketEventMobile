import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: "Home" }}></Stack.Screen>
      </Stack.Navigator>
      <Text></Text>
    </NavigationContainer>
  );
};

export default Routes;
