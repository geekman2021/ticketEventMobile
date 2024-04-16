import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from "react-native";
import React, { useEffect } from "react";

interface Props {
  btnText: string | any;
  backGround: string;
  onPress: () => void;
  customStyle?: any;
  paddingHorizontal?: number;
  paddingvertical?: number;
}

const ButtonCustomize: React.FC<Props> = ({ btnText, backGround, onPress, customStyle }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, { backgroundColor: backGround }, customStyle]}>
        {typeof btnText === "string" ? <Text style={styles.textStyle}>{btnText}</Text> : btnText}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 15,
    color: "rgba(255,255,255,1)",
    fontWeight: "bold",
  },
});
export default ButtonCustomize;
