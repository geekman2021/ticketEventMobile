import { StatusBar } from "expo-status-bar";
import React, { useEffect, useReducer } from "react";
import { AppRegistry, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Login from "./src/screens/Login";
import Routes from "./src/routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import * as SecureStore from "expo-secure-store";

interface AuthState {
  isLoading: boolean;
  isSignOut: boolean;
  userToken: any;
}

enum AuthActionKind {
  RESTORE_TOKEN = "RESTORE_TOKEN",
  SIGN_IN = "SIGN_IN",
  SIGN_OUT = "SIGN_OUT",
}
interface AuthAction {
  type: AuthActionKind;
  payload: AuthState;
}

export default function App() {
  const authReducer = (prevState: AuthState, action: AuthAction) => {
    const { type, payload } = action;
    switch (type) {
      case AuthActionKind.RESTORE_TOKEN:
        return {
          ...prevState,
          isLoading: false,
          userToken: payload.userToken,
        };
      case AuthActionKind.SIGN_IN:
        return {
          ...prevState,
          isSignOut: payload.isSignOut,
          userToken: payload.userToken,
        };
      case AuthActionKind.SIGN_OUT:
        return {
          ...prevState,
          isSignOut: payload.isSignOut,
          userToken: payload.userToken,
        };
    }
  };
  const [state, dispatch] = useReducer(authReducer, { isLoading: true, isSignOut: false, userToken: null });

  // useEffect(() => {
  //   const boo
  // })

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.container}>
            <View style={{ flex: 1 }}>
              <Routes />
            </View>
            <StatusBar style="auto" />
          </View>
        </SafeAreaView>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "red",
  },
});
