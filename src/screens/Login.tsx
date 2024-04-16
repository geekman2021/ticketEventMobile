import { View, Text, TextInput, StyleSheet, Dimensions, Button, Alert } from "react-native";
import React from "react";
import { AppColor } from "../utils/constant";
import Icon from "@expo/vector-icons/AntDesign";
import KeyIcon from "@expo/vector-icons/MaterialCommunityIcons";
import GoogleIcon from "@expo/vector-icons/AntDesign";
import FacebookIcon from "@expo/vector-icons/FontAwesome";
import ButtonCustomize from "../components/button";
import { useNavigation } from "@react-navigation/native";

const deviceHeight = Dimensions.get("screen").height;
const deviceWidth = Dimensions.get("screen").width;

const Login = () => {
  const navigation = useNavigation();
  const login = () => {
    navigation.navigate("Home" as never);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.label}>Nom d'utilisateur</Text>
      <View style={[styles.containerInput]}>
        <Icon name="user" size={20} />
        <TextInput placeholder="nom d'utilisateur ou email" style={styles.input} />
      </View>
      <Text style={styles.label}>Mot de passe</Text>
      <View style={styles.containerInput}>
        <KeyIcon name="key" size={20} />
        <TextInput secureTextEntry={true} placeholder="Mot de passe" style={styles.input} />
        <KeyIcon name="eye" size={20} />
      </View>
      <ButtonCustomize
        btnText="Connexion"
        backGround="rgb(29, 38, 56)"
        onPress={login}
        customStyle={{ height: 50, borderRadius: 50, marginBottom: 10 }}
      />
      <ButtonCustomize
        btnText="S'inscrire"
        backGround="rgb(24, 121, 198)"
        onPress={() => {}}
        customStyle={{ height: 50, borderRadius: 50, marginBottom: 10 }}
      />
      <View style={styles.authSocial}>
        <ButtonCustomize
          btnText={<GoogleIcon name="google" size={40} color={"red"} />}
          backGround="rgba(24, 121, 198, 0.5)"
          onPress={login}
          customStyle={{ height: 50, borderRadius: 100, marginBottom: 10 }}
        />
        <ButtonCustomize
          btnText={<FacebookIcon name="facebook" size={40} color={"blue"} />}
          backGround="rgba(24, 121, 198, 0.5)"
          onPress={login}
          customStyle={{ height: 50, borderRadius: 40, width: 50 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: deviceHeight / 5,
    marginHorizontal: 20,
    flex: 1,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
  },
  input: {
    width: "100%",
    flex: 1,
    height: 50,
  },
  label: {
    fontSize: 20,
    fontWeight: "400",
    marginBottom: 5,
  },
  containerInput: {
    paddingHorizontal: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    borderWidth: 1,
    borderColor: AppColor.lightPrimary,
    height: 60,
    borderRadius: 50,
    marginBottom: 20,
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  btn: {
    height: 55,
  },
  authSocial: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
export default Login;
