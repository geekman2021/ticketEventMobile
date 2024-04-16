import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { FC } from "react";
import { FontAwesome } from "@expo/vector-icons";

interface Props {
  customStyle?: any;
  hasAppendIcon?: any;
  multipleLine?: boolean;
  placeHolder?: string;
  hasPrePendIcon?: any;
  hasLabel?: string;
  onChange?: () => void;
  value?: any;
  keyBoarType?: string;
  numberOfLine?: number;
  iconName?: string;
}

const InputText: FC<Props> = ({
  customStyle,
  hasAppendIcon,
  multipleLine,
  placeHolder,
  hasPrePendIcon,
  hasLabel,
  iconName = "link",
}) => {
  return (
    <View style={{ marginHorizontal: 10 }}>
      {hasLabel && <Text>{hasLabel}</Text>}
      <View style={[styles.container, customStyle]}>
        <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
          {hasPrePendIcon && <FontAwesome name="link" size={20} style={{ marginTop: 10 }} />}
          <TextInput placeholder={placeHolder} style={styles.styleInput} />
          {hasAppendIcon && <FontAwesome name={iconName} size={20} />}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
  },
  styleInput: {
    flex: 1,
    padding: 10,
  },
});

export default InputText;
