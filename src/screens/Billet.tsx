import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Modal,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  Button,
  Alert,
} from "react-native";
import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import ButtonCustomize from "../components/button";
import BilletCard from "../components/card/BilletCard";
import { billet } from "../resources/data/billets";
import { useNavigation } from "@react-navigation/native";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import CloseIcon from "@expo/vector-icons/EvilIcons";
import FeatherIcon from "@expo/vector-icons/Feather";
import AntDesignIcon from "@expo/vector-icons/AntDesign";
import { AppColor } from "../utils/constant";
import { TouchableOpacity } from "react-native-gesture-handler";
import ModalConfirm from "../components/modal/ModalConfirm";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
type billetType = { id: number; prix: number | undefined; libelle: string | undefined; evenement_id: number };
const Billet = () => {
  const navigation = useNavigation();
  const showModal = () => {
    setModalVisible(!modalVisible);
    initializeValue();
  };
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const snapPoints = useMemo(() => ["20%"], []);
  const [price, setPrice] = useState<number | undefined>(0);
  const [libelle, setLibelle] = useState<string | undefined>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [selectedBillet, setSelectedBillet] = useState<billetType | null>(null);
  const [id, setId] = useState<number | null>(null);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  let [billetCopy, setBilletCopy] = useState<billetType[]>([]);
  useEffect(() => {
    setBilletCopy([...billet]);
    handleClosePress();
  }, []);

  const handleChange = (value: any, fieldType: string) => {
    fieldType === "libelle" ? setLibelle(value) : setPrice(value.replace(/[^0-9]/g, ""));
    setIsValid(libelle?.trim() !== "" && price !== NaN);
  };

  const initializeValue = () => {
    setId(null);
    setPrice(0);
    setLibelle("");
  };

  const handleSubmit = () => {
    if (id !== null) {
      console.log("Update");
      const updateBillet = billetCopy.map((billet) => {
        if (billet.id === id) {
          return {
            ...billet,
            prix: price,
            libelle: libelle,
          };
        } else {
          return billet;
        }
      });
      setBilletCopy([...updateBillet]);
    } else {
      isValid && setBilletCopy([...billetCopy, { id: 0, prix: price, libelle: libelle, evenement_id: 1 }]);
    }

    setModalVisible(!modalVisible);
    // initializeValue();
  };
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleOpenPress = () => bottomSheetRef?.current?.expand();
  const handleClosePress = useCallback(() => {
    bottomSheetRef.current!.close();
  }, []);

  const renderItem = ({ item }: { item: billetType }) => (
    <BilletCard
      id={item.id}
      libelle={item.libelle}
      prix={item.prix}
      onPress={() => {
        setSelectedBillet(item);
        handleOpenPress();
      }}
    />
  );

  const renderBackdrop = useCallback(
    (props: any) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />,
    []
  );

  const editBillet = () => {
    setPrice(selectedBillet?.prix);
    setLibelle(selectedBillet?.libelle);
    setId(selectedBillet!.id);
    setModalVisible(!modalVisible);
    handleClosePress();
  };

  const deleteBillet = async () => {
    const newBillet = billetCopy.filter((billet) => billet.id !== selectedBillet!.id);
    setBilletCopy([...newBillet]);
    setShowConfirm(!showConfirm);
    initializeValue();
    handleClosePress();
  };
  const toggleModalConfirm = () => {
    setShowConfirm(!showConfirm);
    handleClosePress();
  };

  return (
    <View style={styles.container}>
      {showConfirm && (
        <ModalConfirm
          title="Suppression"
          btnTxtCancel="Annuler"
          btnTxtConfirm="Supprimer"
          textContent="Voulez-vous vraiment supprimer ce billet ?"
          backGround="rgba(76, 63, 105,0.8)"
          isVisible={showConfirm}
          handleCancel={toggleModalConfirm}
          handleConfirm={deleteBillet}
        />
      )}
      <FlatList numColumns={2} data={billetCopy} renderItem={renderItem} />
      <View style={{ position: "absolute", right: 10, bottom: 90 }}>
        <ButtonCustomize
          btnText="+"
          backGround="rgba(29, 38, 56, 0.8)"
          onPress={showModal}
          customStyle={{
            width: 50,
            height: 50,
            borderRadius: 25,
            zIndex: 1,
          }}
        />
      </View>
      <KeyboardAvoidingView>
        <Modal animationType="fade" visible={modalVisible} transparent={true} onRequestClose={showModal}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={{ flexDirection: "column", flex: 1, gap: 15 }}>
                <View>
                  <CloseIcon style={{ textAlign: "right" }} name="close" size={25} onPress={showModal} />
                </View>
                <View style={[styles.input, { gap: 10 }]}>
                  <Text>Libelle: </Text>
                  <TextInput
                    style={styles.textInput}
                    value={libelle}
                    onChangeText={(value) => handleChange(value, "libelle")}
                  />
                </View>
                <View style={[styles.input, { gap: 25 }]}>
                  <Text>Prix: </Text>
                  <TextInput
                    style={styles.textInput}
                    value={price !== NaN ? price?.toString() : "0"}
                    inputMode={"numeric"}
                    onChangeText={(value) => handleChange(value, "price")}
                  />
                </View>
                <View style={[styles.input, { justifyContent: "center", gap: 20 }]}>
                  <ButtonCustomize
                    backGround="#881337"
                    btnText="Annuler"
                    onPress={showModal}
                    customStyle={{
                      paddingHorizontal: 15,
                      paddingVertical: 10,
                      borderRadius: 20,
                    }}
                  />
                  <ButtonCustomize
                    backGround="rgba(21, 94, 117, 1)"
                    btnText="Enregistrer"
                    onPress={handleSubmit}
                    customStyle={{
                      paddingHorizontal: 20,
                      paddingVertical: 10,
                      borderRadius: 20,
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </KeyboardAvoidingView>
      <BottomSheet
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        ref={bottomSheetRef}
        handleIndicatorStyle={{ backgroundColor: "#fff" }}
        backgroundStyle={{ backgroundColor: AppColor.lightGray }}
        backdropComponent={renderBackdrop}
      >
        <View style={{ display: "flex", flexDirection: "column", gap: 15, marginHorizontal: 10 }}>
          <TouchableOpacity onPress={editBillet}>
            <View style={styles.action}>
              <FeatherIcon name="edit-2" size={20} color={"#fff"} />
              <Text style={styles.actionText}>Modifier</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleModalConfirm}>
            <View style={styles.action}>
              <AntDesignIcon name="delete" size={20} color={"#fff"} />
              <Text style={styles.actionText}>Supprimer</Text>
            </View>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    alignItems: "flex-end",
    flexDirection: "row",
    marginHorizontal: 10,
  },
  modalView: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 8,
    marginHorizontal: 0,
  },
  input: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderColor: AppColor.lightGray,
    borderWidth: 1,
    borderRadius: 20,
    flex: 1,
  },
  actionText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
  },

  action: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "blue",
  },
});

export default Billet;
