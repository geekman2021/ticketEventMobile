import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { ReactNode } from "react";

interface cardProps {
  Logo: ReactNode;
  cardLabel: string;
  width?: number;
  height?: number;
  onPress?: () => void;
}
const MenuCard: React.FC<cardProps> = ({ Logo, cardLabel, width = 100, height = 100, onPress }) => {
  const cardContent = (
    <View style={[styles.container, { width, height }]}>
      <View style={styles.children}>
        <View>{Logo}</View>
        <View>
          <Text>{cardLabel}</Text>
        </View>
      </View>
    </View>
  );

  return onPress ? <TouchableOpacity onPress={onPress}>{cardContent}</TouchableOpacity> : cardContent;
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    elevation: 10,
  },
  children: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
});

export default MenuCard;
