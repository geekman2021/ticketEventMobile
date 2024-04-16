import { View, Text, StyleSheet, TextInput, Button, KeyboardAvoidingView } from "react-native";
import React from "react";
import ButtonCustomize from "../components/button";
import { useNavigation } from "@react-navigation/native";
import { AppColor } from "../utils/constant";
import InputText from "../components/text-input";
import { ScrollView } from "react-native-gesture-handler";

const FormEvent = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <View style={styles.form}>
        <Text>Nom</Text>
        <TextInput placeholder="Nom" style={styles.inputStyle} />
      </View>
      <View style={styles.form}>
        <Text>Date</Text>
        <TextInput placeholder="Choisir la date" style={styles.inputStyle} />
      </View>
      <View style={styles.form}>
        <Text>Lieu</Text>
        <TextInput placeholder="Ajouter un lieu" style={styles.inputStyle} />
      </View>
      <View style={styles.form}>
        <Text>Détail</Text>
        <TextInput style={styles.inputStyle} multiline={true} numberOfLines={10} />
      </View> */}
      <InputText customStyle={{ paddingHorizontal: 10 }} hasLabel="Nom" />
      <View style={{ flexDirection: "row", justifyContent: "center", gap: 10 }}>
        <ButtonCustomize
          btnText="Annuler"
          onPress={() => navigation.goBack()}
          backGround={"#f97316"}
          customStyle={{
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 10,
          }}
        />
        <ButtonCustomize
          btnText="Enregistrer"
          onPress={() => navigation.goBack()}
          backGround="#082f49"
          customStyle={{
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 10,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    paddingTop: 10,
    gap: 10,
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
  inputStyle: {
    borderColor: "#cbd5e1",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  form: {
    paddingHorizontal: 10,
  },
});

export default FormEvent;
