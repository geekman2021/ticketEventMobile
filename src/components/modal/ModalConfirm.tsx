import { View, Text, Modal, StyleSheet, Button } from "react-native";
import React, { FC, useEffect, useState } from "react";
import { AppColor } from "../../utils/constant";

interface props {
  isVisible: boolean;
  title: string;
  handleConfirm: () => void;
  handleCancel: () => void;
  backGround: string;
  textContent: string;
  btnTxtCancel: string;
  btnTxtConfirm: string;
}

const ModalConfirm: FC<props> = ({
  isVisible,
  handleConfirm,
  handleCancel,
  title,
  backGround,
  textContent,
  btnTxtCancel,
  btnTxtConfirm,
}: props) => {
  const [showModal, setShowModal] = useState<boolean>(isVisible);

  return (
    <>
      <Modal animationType="fade" visible={showModal} transparent={true}>
        <View style={styles.centeredView}>
          <View style={[styles.modalView, { backgroundColor: backGround }]}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>{title}</Text>
            <Text style={styles.text}>{textContent}</Text>
            <View style={styles.btnAction}>
              <Button title={btnTxtCancel} onPress={handleCancel} color={"rgb(76, 63, 105)"} />
              <Button title={btnTxtConfirm} onPress={handleConfirm} color={AppColor.danger} />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    paddingHorizontal: 25,
    paddingVertical: 10,
    flexDirection: "column",
    alignItems: "center",
    gap: 15,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: AppColor.lightGray,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  btnAction: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
  },
});

export default ModalConfirm;
