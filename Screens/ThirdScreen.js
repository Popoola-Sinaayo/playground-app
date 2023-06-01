import {
  StyleSheet,
  Text,
  View,

  Image,
  TouchableOpacity,

} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import React from "react";
import chevron from "../assets/chevron-right.png";
import signature from "../assets/signature.png";
import arrowUp from "../assets/arrow.png";
import plusIcon from "../assets/plus.png";
import icon2 from "../assets/icon2.png";
import Checkbox from "expo-checkbox";

const ThirdScreen = ({ navigation }) => {

  const CheckboxSelected = ({ value }) => (
    <View style={styles.descriptionItem}>
      <View style={styles.descriptionItemTextContainer}>
        <Checkbox style={styles.checkbox} value={value} color={value ? "blue" : undefined} />
        <Text style={styles.descriptionItemText}>Division number</Text>
      </View>
    </View>
  )


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topNav}>


        {/* <TouchableOpacity> */}
        <View style={styles.leftIconContainer}>
          <Image source={chevron} />
          <Text>Back</Text>
        </View>
        {/* </TouchableOpacity> */}


        <View style={styles.mainText}>
          <Text>Set Up</Text>
        </View>

        <View style={styles.rightIconContainers}>
          <Image source={signature} style={styles.leftIconItem} />
          <Image source={arrowUp} style={styles.leftIconItem} />
          <Image source={plusIcon} style={styles.leftIconItem} />
        </View>

      </View>
      <View style={styles.modalContainer}>

        <View style={styles.modal}>
          <View style={styles.topText}>
            <Text>Added FP20230417 division</Text>
            <Text style={styles.modalLeftText} onPress={() => navigation.navigate("Fourth")}>Finish</Text>
          </View>


          <View style={styles.description}>
            <TouchableOpacity style={styles.descriptionItem}>
              <View style={styles.descriptionItemTextContainer}>
                <Text style={styles.descriptionItemText}>Division number</Text>
              </View>
              <View>
                <Image source={icon2} style={styles.chevron} />
              </View>
            </TouchableOpacity>



            <CheckboxSelected />
            <CheckboxSelected value={true} />
            <CheckboxSelected />
            <CheckboxSelected value={true} />
            <CheckboxSelected />


          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ThirdScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topNav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10

  },
  leftIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  mainText: {

  },
  rightIconContainers: {
    flexDirection: "row",

  },
  leftIconItem: {
    // width: 30,
    height: 30,
    resizeMode: "contain"
  },
  modalContainer: {
    position: "absolute",
    backgroundColor: "#00000066",
    width: "100%",
    height: "120%",
    borderRadius: 5,
    flex: 1,
  },
  modal: {
    backgroundColor: "#F2F2F7",
    width: "90%",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 5,
    marginTop: "50%",
  },
  topText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  modalLeftText: {
    color: "#007AFF",
  },
  description: {
    paddingVertical: 20,
    width: "90%",
  },
  descriptionItem: {
    backgroundColor: "white",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    paddingVertical: 15,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  descriptionItemTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  descriptionItemText: {
    marginHorizontal: 4,
  },
  chevron: {
    width: 15,
    marginRight: 10,
    height: 15,
  },
  checkbox: {
    alignSelf: "center",
    marginLeft: 5,
  },
});
